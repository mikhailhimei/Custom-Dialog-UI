const GET_WS = 'dialog_custom_ui/get_timer_alarm_config';
const SAVE_WS = 'dialog_custom_ui/save_timer_alarm_config';
const POLL_MS = 1000;
const DAYS = { 1: 'Пн', 2: 'Вт', 3: 'Ср', 4: 'Чт', 5: 'Пт', 6: 'Сб', 7: 'Вс' };

const esc = (v) => String(v ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
const id = () => (crypto?.randomUUID ? crypto.randomUUID() : `item_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`);
const n = (v, d) => {
  const x = Number(v);
  return Number.isFinite(x) ? x : d;
};
const pad = (v) => String(v).padStart(2, '0');
const formatDateTimeForApi = (date) => {
  const value = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(value.getTime())) {
    return '';
  }

  return `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())} ${pad(value.getHours())}:${pad(value.getMinutes())}:${pad(value.getSeconds())}`;
};
const now = () => new Date();
const dt = (v) => {
  if (!v) {
    return null;
  }

  const normalized = String(v).trim().replace(' ', 'T');
  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};
const days = (v) => Array.isArray(v) ? [...new Set(v.map((x) => Number(x)).filter((x) => x >= 1 && x <= 7))].sort((a, b) => a - b) : [];
const durToSec = (v) => {
  const p = String(v ?? '').trim().split(':').map(Number);
  if (p.some(Number.isNaN) || !p.length) return 0;
  return p.length === 3 ? p[0] * 3600 + p[1] * 60 + p[2] : p.length === 2 ? p[0] * 3600 + p[1] * 60 : p[0] * 60;
};
const secToDur = (s) => `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;
const humanDur = (s) => {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  return [h ? `${h} ${h === 1 ? 'час' : h < 5 ? 'часа' : 'часов'}` : '', `${m} ${m === 1 ? 'минута' : m < 5 ? 'минуты' : 'минут'}`].filter(Boolean).join(' ');
};
const alarmItem = () => ({ id: id(), name: '', type: 'alarm', device_id: '', status: 'on', time: { time: '08:00', repeat_mode: 'every_day', days: [1, 2, 3, 4, 5, 6, 7] } });
const timerItem = () => ({
  id: id(),
  name: '',
  type: 'timer',
  device_id: '',
  status: 'on',
  time: {
    date_end: formatDateTimeForApi(new Date(Date.now() + 30 * 60 * 1000)),
    count_timer: '00:30:00',
  },
});

class DialogCustomUiTimerAlarm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._hass = null;
    this._loaded = false;
    this._loading = false;
    this._saving = false;
    this._error = '';
    this._status = '';
    this._dirty = false;
    this._tab = 'alarm';
    this._cfg = { base_url: 'http://127.0.0.1:8000', client_id: '', interval: 1 };
    this._items = [];
    this._timer = null;
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._loaded && !this._loading) {
      this._load();
      return;
    }
    this._render();
  }
  get hass() { return this._hass; }
  connectedCallback() { if (!this.shadowRoot.innerHTML) this._render(); if (this._loaded) this._start(); }
  disconnectedCallback() { this._stop(); }

  async _load() {
    if (!this._hass) return;
    this._loading = true;
    this._render();
    try {
      const result = await this._hass.callWS({ type: GET_WS });
      this._cfg = { base_url: result.base_url ?? this._cfg.base_url, client_id: result.client_id ?? this._cfg.client_id, interval: n(result.interval, this._cfg.interval) };
      this._items = Array.isArray(result.items) ? result.items.map((item) => this._norm(item)) : [];
      this._status = result.last_updated ? `Обновлено: ${result.last_updated}` : '';
      this._error = '';
      this._dirty = false;
      this._loaded = true;
    } catch (err) {
      this._error = err?.message || 'Не удалось загрузить timer/alarm.';
    } finally {
      this._loading = false;
      this._render();
      this._start();
    }
  }

  _start() {
    this._stop();
    this._timer = window.setInterval(() => this._loadStateOnly(), POLL_MS);
  }
  _stop() { if (this._timer) { window.clearInterval(this._timer); this._timer = null; } }

  async _loadStateOnly() {
    if (!this._hass) return;
    try {
      if (this._dirty) {
        return;
      }
      const result = await this._hass.callWS({ type: GET_WS });
      this._cfg = { base_url: result.base_url ?? this._cfg.base_url, client_id: result.client_id ?? this._cfg.client_id, interval: n(result.interval, this._cfg.interval) };
      this._items = Array.isArray(result.items) ? result.items.map((item) => this._norm(item)) : [];
      this._status = result.last_updated ? `Обновлено: ${result.last_updated}` : '';
      this._error = '';
      this._dirty = false;
      this._render();
    } catch (err) {
      this._error = err?.message || 'Не удалось обновить список.';
      this._render();
    }
  }

  _norm(item) {
    const type = String(item?.type ?? 'alarm').toLowerCase() === 'timer' ? 'timer' : 'alarm';
    const time = typeof item?.time === 'object' && item.time ? item.time : {};
    if (type === 'timer') {
      const countTimer = String(time.count_timer ?? time.duration ?? item?.count_timer ?? item?.duration ?? '00:30:00');
      const dateEnd = String(time.date_end ?? time.end_at ?? time.finish_at ?? item?.date_end ?? item?.end_at ?? '');
      return {
        id: String(item?.id ?? id()),
        name: String(item?.name ?? ''),
        type,
        userId: String(item?.userId ?? item?.user_id ?? item?.client_id ?? this._cfg.client_id ?? ''),
        device_id: String(item?.device_id ?? ''),
        status: String(item?.status ?? 'on') === 'off' ? 'off' : 'on',
        time: { date_end: dateEnd, count_timer: countTimer },
      };
    }
    const repeat = ['every_day', 'once', 'custom'].includes(String(time.repeat_mode ?? item?.repeat_mode ?? 'every_day')) ? String(time.repeat_mode ?? item?.repeat_mode ?? 'every_day') : 'every_day';
    return { id: String(item?.id ?? id()), name: String(item?.name ?? ''), type, device_id: String(item?.device_id ?? ''), status: String(item?.status ?? 'on') === 'off' ? 'off' : 'on', time: { time: String(time.time ?? item?.alarm_time ?? '08:00'), repeat_mode: repeat, days: days(time.days ?? item?.days ?? [1, 2, 3, 4, 5, 6, 7]) } };
  }

  _activeItems() { return this._items.filter((item) => item.type === this._tab && item.status === 'on').sort((a, b) => (this._moment(a)?.getTime() ?? Number.MAX_SAFE_INTEGER) - (this._moment(b)?.getTime() ?? Number.MAX_SAFE_INTEGER)); }
  _moment(item) {
    if (item.type === 'timer') return dt(item.time.date_end ?? item.time.end_at);
    const [hh, mm] = String(item.time.time ?? '08:00').split(':').map(Number);
    if (Number.isNaN(hh) || Number.isNaN(mm)) return null;
    const base = now(); base.setSeconds(0, 0); base.setHours(hh, mm, 0, 0);
    const repeat = item.time.repeat_mode ?? 'every_day';
    const ds = days(item.time.days);
    if (repeat === 'once') return base;
    if (repeat === 'every_day' || !ds.length) return base >= now() ? base : new Date(base.getTime() + 86400000);
    for (let i = 0; i < 8; i += 1) {
      const cand = new Date(Date.now() + i * 86400000);
      const dow = cand.getDay() === 0 ? 7 : cand.getDay();
      if (!ds.includes(dow)) continue;
      cand.setHours(hh, mm, 0, 0);
      if (cand >= now()) return cand;
    }
    return base;
  }

  _alarmLabel(item) {
    const repeat = item.time.repeat_mode === 'once' ? 'один раз' : item.time.repeat_mode === 'custom' ? days(item.time.days).map((d) => String(d)).join(', ') : 'каждый день';
    return `${item.time.time || '08:00'} • ${repeat}`;
  }
  _timerLabel(item) {
    const total = durToSec(item.time.count_timer ?? item.time.duration);
    const end = dt(item.time.date_end ?? item.time.end_at);
    return `${(item.time.count_timer ?? item.time.duration) || '00:30:00'}${end ? ` • до ${end.toLocaleString('ru-RU')}` : ''}`;
  }
  _timerRemain(item) {
    const end = dt(item.time.date_end ?? item.time.end_at); const total = durToSec(item.time.count_timer ?? item.time.duration);
    if (!end || !total) return { left: '00:00:00', percent: 0 };
    const left = Math.max(0, Math.floor((end.getTime() - Date.now()) / 1000));
    return { left: secToDur(left), percent: Math.max(0, Math.min(100, Math.round((left / total) * 100))) };
  }

  _devices() {
    if (!this._hass) return [];
    const all = Object.values(this._hass.states).filter((s) => s.entity_id.startsWith('media_player.'));
    const preferred = all.filter((s) => {
      const id = s.entity_id.toLowerCase();
      const name = String(s.attributes.friendly_name ?? '').toLowerCase();
      return id.includes('voice') || name.includes('voice') || id.includes('home_assistant');
    });
    return (preferred.length ? preferred : all).sort((a, b) => (a.attributes.friendly_name || a.entity_id).localeCompare((b.attributes.friendly_name || b.entity_id), 'ru'));
  }

  _updateCfg(field, value) { this._cfg = { ...this._cfg, [field]: value }; this._dirty = true; this._status = ''; this._error = ''; this._render(); }
  _markDirty() { this._dirty = true; }
  _updateItem(itemId, field, value) {
    this._items = this._items.map((item) => {
      if (item.id !== itemId) return item;
      if (field === 'type') {
        return value === 'timer'
          ? { ...timerItem(), userId: this._cfg.client_id }
          : alarmItem();
      }
      if (field === 'status') return { ...item, status: value === 'off' ? 'off' : 'on' };
      if (item.type === 'timer') {
        if (field === 'duration') return { ...item, time: { ...item.time, count_timer: value } };
        if (field === 'end_at') return { ...item, time: { ...item.time, date_end: value } };
        return { ...item, time: { ...item.time, [field]: value } };
      }
      if (field === 'alarm_time') return { ...item, time: { ...item.time, time: value } };
      if (field === 'repeat_mode') return { ...item, time: { ...item.time, repeat_mode: value, days: value === 'every_day' ? [1, 2, 3, 4, 5, 6, 7] : value === 'once' ? [] : item.time.days } };
      return { ...item, [field]: value };
    });
    this._status = ''; this._error = ''; this._render();
    this._markDirty();
  }
  _toggleDay(itemId, day) {
    this._items = this._items.map((item) => {
      if (item.id !== itemId || item.type !== 'alarm') return item;
      const current = days(item.time.days);
      const next = current.includes(day) ? current.filter((d) => d !== day) : [...current, day];
      return { ...item, time: { ...item.time, repeat_mode: 'custom', days: next } };
    });
    this._status = ''; this._error = ''; this._render();
    this._markDirty();
  }
  _add(type) {
    this._items = [...this._items, type === 'timer' ? { ...timerItem(), userId: this._cfg.client_id } : alarmItem()];
    this._tab = type;
    this._markDirty();
    this._render();
  }
  _remove(itemId) { this._items = this._items.filter((item) => item.id !== itemId); this._markDirty(); this._render(); }
  _serialize(item) {
    return item.type === 'timer'
      ? {
          id: item.id,
          type: 'timer',
          device_id: item.device_id,
          status: item.status,
          time: {
            date_end: String(item.time.date_end ?? item.time.end_at ?? ''),
            count_timer: String(item.time.count_timer ?? item.time.duration ?? '00:30:00'),
          },
        }
      : { id: item.id, name: item.name, type: 'alarm', device_id: item.device_id, status: item.status, time: { time: String(item.time.time ?? '08:00'), repeat_mode: String(item.time.repeat_mode ?? 'every_day'), days: item.time.repeat_mode === 'every_day' ? [1, 2, 3, 4, 5, 6, 7] : item.time.repeat_mode === 'once' ? [] : days(item.time.days) } };
  }

  async _save() {
    this._saving = true; this._error = ''; this._status = ''; this._render();
    try {
      await this._hass.callWS({
        type: SAVE_WS,
        base_url: String(this._cfg.base_url ?? '').trim(),
        client_id: String(this._cfg.client_id ?? '').trim(),
        timer_alarm_interval_seconds: n(this._cfg.interval, 1),
        items: this._items.map((item) => this._serialize(item)),
      });
      this._status = 'Timer/alarm настройки сохранены.';
      this._dirty = false;
      await this._loadStateOnly();
    } catch (err) {
      this._error = err?.message || 'Не удалось сохранить timer/alarm.';
    } finally {
      this._saving = false; this._render();
    }
  }

  _bind() {
    const root = this.shadowRoot;
    root.querySelectorAll('[data-tab]').forEach((el) => el.addEventListener('click', () => { this._tab = el.dataset.tab; this._render(); }));
    root.querySelector('[data-action="save"]')?.addEventListener('click', () => this._save());
    root.querySelectorAll('[data-action="add-item"]').forEach((el) => el.addEventListener('click', () => this._add(el.dataset.type)));
    root.querySelectorAll('[data-action="remove-item"]').forEach((el) => el.addEventListener('click', () => this._remove(el.dataset.itemId)));
    root.querySelectorAll('[data-item-id][data-field]').forEach((el) => {
      const field = el.dataset.field;
      el.addEventListener(el.tagName === 'SELECT' || el.type === 'time' || el.type === 'datetime-local' ? 'change' : 'input', (ev) => this._updateItem(el.dataset.itemId, field, ev.currentTarget.value));
    });
    root.querySelectorAll('[data-day-item-id][data-day]').forEach((el) => el.addEventListener('change', () => this._toggleDay(el.dataset.dayItemId, Number(el.dataset.day))));
    root.querySelectorAll('input, select, button').forEach((el) => ['click', 'mousedown', 'mouseup', 'keydown', 'keyup', 'keypress', 'focusin'].forEach((ev) => el.addEventListener(ev, (event) => event.stopPropagation())));
    root.querySelectorAll('[data-settings-field]').forEach((el) => el.addEventListener('input', (ev) => this._updateCfg(ev.currentTarget.dataset.settingsField, ev.currentTarget.value)));
  }

  _renderItem(item) {
    const devices = this._devices();
    const progress = item.type === 'timer' ? this._timerRemain(item) : null;
    return `
      <article class="item-card">
        <div class="item-head">
          <div>
            <div class="item-kicker">${esc(item.type)}</div>
            <div class="item-title">${esc(item.name || (item.type === 'timer' ? 'Таймер' : 'Будильник'))}</div>
            <div class="item-summary">${esc(item.type === 'timer' ? this._timerLabel(item) : this._alarmLabel(item))}</div>
          </div>
          <button type="button" class="ghost" data-action="remove-item" data-item-id="${esc(item.id)}">Удалить</button>
        </div>
        <div class="item-grid">
          <label><span>Название</span><input data-item-id="${esc(item.id)}" data-field="name" value="${esc(item.name)}" /></label>
          <label><span>Устройство</span><select data-item-id="${esc(item.id)}" data-field="device_id"><option value="">Выберите media_player</option>${devices.map((d) => `<option value="${esc(d.entity_id)}" ${d.entity_id === item.device_id ? 'selected' : ''}>${esc(d.attributes.friendly_name || d.entity_id)} (${esc(d.entity_id)})</option>`).join('')}</select></label>
          <label><span>Статус</span><select data-item-id="${esc(item.id)}" data-field="status"><option value="on" ${item.status === 'on' ? 'selected' : ''}>on</option><option value="off" ${item.status === 'off' ? 'selected' : ''}>off</option></select></label>
          <label><span>Тип</span><select data-item-id="${esc(item.id)}" data-field="type"><option value="alarm" ${item.type === 'alarm' ? 'selected' : ''}>Будильник</option><option value="timer" ${item.type === 'timer' ? 'selected' : ''}>Таймер</option></select></label>
          ${item.type === 'alarm' ? `
            <label><span>Время</span><input type="time" data-item-id="${esc(item.id)}" data-field="alarm_time" value="${esc(item.time.time)}" /></label>
            <label><span>Повтор</span><select data-item-id="${esc(item.id)}" data-field="repeat_mode"><option value="every_day" ${item.time.repeat_mode === 'every_day' ? 'selected' : ''}>Каждый день</option><option value="once" ${item.time.repeat_mode === 'once' ? 'selected' : ''}>Один раз</option><option value="custom" ${item.time.repeat_mode === 'custom' ? 'selected' : ''}>Дни недели</option></select></label>
            <div style="grid-column: 1 / -1;" class="days-box"><div class="days-title">Дни недели</div><div class="days-row">${Object.entries(DAYS).map(([d, label]) => `<label class="day-chip"><input type="checkbox" data-day-item-id="${esc(item.id)}" data-day="${esc(d)}" ${item.time.repeat_mode !== 'custom' ? 'disabled' : ''} ${days(item.time.days).includes(Number(d)) ? 'checked' : ''} /><span>${esc(label)} (${esc(d)})</span></label>`).join('')}</div></div>
          ` : `
            <label><span>count_timer</span><input data-item-id="${esc(item.id)}" data-field="count_timer" value="${esc(item.time.count_timer ?? '')}" placeholder="00:10:00" /></label>
            <label><span>date_end</span><input type="text" data-item-id="${esc(item.id)}" data-field="date_end" value="${esc(item.time.date_end ?? '')}" placeholder="2026-04-08 09:21:34" /></label>
            <div style="grid-column: 1 / -1;" class="days-box"><div class="days-title">Осталось</div><div>${esc(progress?.left ?? '00:00:00')}</div><div class="timer-progress-track"><div class="timer-progress-fill" style="width: ${esc(progress?.percent ?? 0)}%;"></div></div><small>Формат: <code>{"date_end":"2026-04-08 09:21:34","count_timer":"00:10:00"}</code></small></div>
          `}
        </div>
        <div class="item-footer"><span class="badge ${item.status === 'on' ? 'badge-on' : 'badge-off'}">${esc(item.status)}</span><span class="badge">${esc(item.type === 'timer' ? this._timerLabel(item) : this._alarmLabel(item))}</span></div>
      </article>
    `;
  }

  _render() {
    const items = this._activeItems();
    const body = items.length ? items.map((item) => this._renderItem(item)).join('') : `<div class="empty">${esc(this._tab === 'alarm' ? 'Активных будильников пока нет.' : 'Активных таймеров пока нет.')}</div>`;
    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; color:#1b2432; font-family:"Segoe UI","Trebuchet MS",sans-serif; }
        * { box-sizing:border-box; min-width:0; }
        .panel, .item-list { display:grid; gap:16px; }
        .hero, .item-card, .empty { background:rgba(255,255,255,.9); border:1px solid rgba(34,45,67,.14); border-radius:20px; box-shadow:0 18px 40px rgba(31,41,55,.08); }
        .hero { padding:24px; }
        .title { margin:0; font-size:32px; line-height:1.05; letter-spacing:-.03em; }
        .subtitle, .item-summary, small { color:#5c667a; }
        .tabs { display:inline-flex; gap:8px; padding:8px; border-radius:999px; background:rgba(255,255,255,.72); border:1px solid rgba(34,45,67,.14); flex-wrap:wrap; }
        .tab { border:none; border-radius:999px; padding:10px 16px; cursor:pointer; background:transparent; color:#5c667a; font:inherit; }
        .tab.active { color:#fff; background:linear-gradient(135deg,#234f7d,#4c78a8); }
        .grid, .item-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px; }
        label { display:grid; gap:8px; }
        label span, .days-title { font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:#234f7d; }
        input, select { width:100%; border:1px solid rgba(34,45,67,.14); border-radius:14px; padding:12px 14px; font:inherit; background:rgba(255,255,255,.95); color:#1b2432; }
        .btn { border:none; border-radius:999px; padding:12px 18px; font:inherit; cursor:pointer; }
        .primary { color:#fff; background:linear-gradient(135deg,#a64b2a,#d4743d); }
        .secondary { color:#fff; background:linear-gradient(135deg,#234f7d,#4c78a8); }
        .ghost { background:rgba(34,45,67,.06); color:#1b2432; }
        .item-card { padding:18px; }
        .item-head { display:flex; justify-content:space-between; align-items:flex-start; gap:12px; margin-bottom:16px; }
        .item-kicker { text-transform:uppercase; letter-spacing:.1em; font-size:12px; color:#5c667a; }
        .item-title { font-size:20px; font-weight:700; margin-top:4px; }
        .item-footer { display:flex; gap:8px; flex-wrap:wrap; margin-top:16px; }
        .badge { display:inline-flex; align-items:center; padding:6px 10px; border-radius:999px; background:rgba(35,79,125,.08); color:#234f7d; font-size:12px; }
        .badge-on { background:rgba(47,133,90,.1); color:#2f855a; }
        .badge-off { background:rgba(194,65,12,.1); color:#b45309; }
        .days-box { grid-column:1 / -1; display:grid; gap:10px; padding:14px; border:1px solid rgba(34,45,67,.14); border-radius:16px; background:rgba(255,255,255,.72); }
        .days-row { display:flex; flex-wrap:wrap; gap:8px; }
        .day-chip { display:inline-flex; gap:8px; align-items:center; padding:8px 12px; border-radius:999px; border:1px solid rgba(34,45,67,.14); background:rgba(255,255,255,.82); cursor:pointer; }
        .day-chip input { width:auto; }
        .timer-progress-track { height:10px; border-radius:999px; background:rgba(35,79,125,.12); overflow:hidden; }
        .timer-progress-fill { height:100%; border-radius:inherit; background:linear-gradient(135deg,#234f7d,#4c78a8); transition:width .4s ease; }
        .toolbar { margin-top:18px; display:flex; gap:12px; flex-wrap:wrap; }
        .empty { padding:24px; }
        @media (max-width:900px) { .grid, .item-grid { grid-template-columns:1fr; } }
      </style>
      <div class="panel">
        <section class="hero">
          <h1 class="title">Timer / Alarm</h1>
          <p class="subtitle">Отдельные вкладки для будильников и таймеров. Подключение и общий <code>time</code> теперь берутся из вкладки настроек, как и у сценариев.</p>
          <div class="toolbar">
            <div class="tabs">
              <button type="button" class="tab ${this._tab === 'alarm' ? 'active' : ''}" data-tab="alarm">Будильник</button>
              <button type="button" class="tab ${this._tab === 'timer' ? 'active' : ''}" data-tab="timer">Таймер</button>
            </div>
            <button type="button" class="btn secondary" data-action="add-item" data-type="alarm">+ Будильник</button>
            <button type="button" class="btn secondary" data-action="add-item" data-type="timer">+ Таймер</button>
            <button type="button" class="btn primary" data-action="save" ${this._saving ? 'disabled' : ''}>${this._saving ? 'Сохранение...' : 'Сохранить'}</button>
          </div>
          ${this._error ? `<div style="margin-top:12px;padding:12px 14px;border-radius:14px;background:rgba(180,43,43,.1);color:#8a2323;">${esc(this._error)}</div>` : ''}
          ${this._status ? `<div style="margin-top:12px;padding:12px 14px;border-radius:14px;background:rgba(35,111,73,.1);color:#155c3a;">${esc(this._status)}</div>` : ''}
        </section>
        <section class="item-list">${body}</section>
      </div>
    `;
    this._bind();
  }
}

customElements.define('dialog-custom-ui-timer-alarm', DialogCustomUiTimerAlarm);
