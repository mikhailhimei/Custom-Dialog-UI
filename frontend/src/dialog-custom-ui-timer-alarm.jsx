import React from 'react';
import { createRoot } from 'react-dom/client';

const ShadowMarkup = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

const GET_WS = 'dialog_custom_ui/get_timer_alarm_config';
const SAVE_WS = 'dialog_custom_ui/save_timer_alarm_config';
const POLL_MS = 1000;
const TICK_MS = 1000;
const DAYS = { 1: 'Пн', 2: 'Вт', 3: 'Ср', 4: 'Чт', 5: 'Пт', 6: 'Сб', 7: 'Вс' };
const QUICK_STARTS = [10, 15, 30, 60];

const esc = (v) => String(v ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');
const id = () => (crypto?.randomUUID ? crypto.randomUUID() : `item_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`);
const n = (v, d) => {
  const x = Number(v);
  return Number.isFinite(x) ? x : d;
};
const pad = (v) => String(v).padStart(2, '0');
const now = () => new Date();
const formatDateTimeForApi = (date) => {
  const value = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(value.getTime())) {
    return '';
  }
  return `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())} ${pad(value.getHours())}:${pad(value.getMinutes())}:${pad(value.getSeconds())}`;
};
const getBrowserTimeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone || '';
const dt = (value) => {
  if (!value) {
    return null;
  }
  const normalized = String(value).trim().replace(' ', 'T');
  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};
const days = (value) => {
  if (!Array.isArray(value)) {
    return [];
  }
  return [...new Set(value.map((x) => Number(x)).filter((x) => x >= 1 && x <= 7))].sort((a, b) => a - b);
};
const durToSec = (value) => {
  const parts = String(value ?? '').trim().split(':').map(Number);
  if (!parts.length || parts.some(Number.isNaN)) {
    return 0;
  }
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  if (parts.length === 2) {
    return parts[0] * 3600 + parts[1] * 60;
  }
  return parts[0] * 60;
};
const secToDur = (seconds) => `${pad(Math.floor(seconds / 3600))}:${pad(Math.floor((seconds % 3600) / 60))}:${pad(seconds % 60)}`;
const humanDuration = (seconds) => {
  const total = Math.max(0, Math.floor(seconds));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  if (hours > 0) {
    return `${hours} ${hours === 1 ? 'час' : hours < 5 ? 'часа' : 'часов'} ${minutes} ${minutes === 1 ? 'минута' : minutes < 5 ? 'минуты' : 'минут'}`;
  }
  return `${minutes} ${minutes === 1 ? 'минута' : minutes < 5 ? 'минуты' : 'минут'}`;
};
const alarmItem = () => ({
  id: id(),
  name: '',
  type: 'alarm',
  deviceId: '',
  status: 'on',
  time: { time: '08:00', repeat_mode: 'every_day', days: [1, 2, 3, 4, 5, 6, 7] },
});
const timerItem = (minutes = 30, clientId = '', deviceId = '') => {
  const totalSeconds = Math.max(1, Math.round(Number(minutes) * 60) || 1800);
  const endDate = new Date(Date.now() + totalSeconds * 1000);
  return {
    id: id(),
    name: '',
    type: 'timer',
    clientId,
    deviceId,
    status: 'on',
    time: {
      date_end: formatDateTimeForApi(endDate),
      count_timer: secToDur(totalSeconds),
      timezone: getBrowserTimeZone(),
    },
  };
};

class DialogCustomUiTimerAlarm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._reactRoot = null;
    this._hass = null;
    this._loaded = false;
    this._loading = false;
    this._saving = false;
    this._error = '';
    this._status = '';
    this._dirty = false;
    this._tab = 'timer';
    this._cfg = { base_url: 'http://127.0.0.1:8000', client_id: '', interval: 1 };
    this._items = [];
    this._activeItems = [];
    this._pollTimer = null;
    this._tickTimer = null;
    this._pollInFlight = false;
    this._stateSignature = '';
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._loaded && !this._loading) {
      this._load();
      return;
    }
    this._render();
  }

  get hass() {
    return this._hass;
  }

  connectedCallback() {
    if (!this.shadowRoot.innerHTML) {
      this._render();
    }
    if (this._loaded) {
      this._start();
    }
  }

  disconnectedCallback() {
    this._stop();
    this._unmountReact();
  }

  _mountReact(markup) {
    if (!this._reactRoot) {
      this._reactRoot = createRoot(this.shadowRoot);
    }
    this._reactRoot.render(<ShadowMarkup html={markup} />);
  }

  _unmountReact() {
    if (this._reactRoot) {
      this._reactRoot.unmount();
      this._reactRoot = null;
    }
  }

  async _load() {
    if (!this._hass) {
      return;
    }
    this._loading = true;
    this._render();
    try {
      const result = await this._hass.callWS({ type: GET_WS });
      this._applyLoadedState(result, true);
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
    this._pollTimer = window.setInterval(() => this._loadStateOnly(), POLL_MS);
    this._tickTimer = window.setInterval(() => this._renderActiveTimerProgress(), TICK_MS);
  }

  _stop() {
    if (this._pollTimer) {
      window.clearInterval(this._pollTimer);
      this._pollTimer = null;
    }
    if (this._tickTimer) {
      window.clearInterval(this._tickTimer);
      this._tickTimer = null;
    }
  }

  _renderActiveTimerProgress() {
    if (!this._loaded || this._saving || this._dirty) {
      return;
    }
    if (!this._activeTimers().length) {
      return;
    }
    this._syncActiveTimerCards();
  }

  async _loadStateOnly() {
    if (!this._hass || this._saving || this._pollInFlight) {
      return;
    }
    this._pollInFlight = true;
    try {
      if (this._dirty) {
        return;
      }
      const result = await this._hass.callWS({ type: GET_WS });
      this._applyLoadedState(result, false);
    } catch (err) {
      this._error = err?.message || 'Не удалось обновить список.';
      this._render();
    } finally {
      this._pollInFlight = false;
    }
  }

  _applyLoadedState(result, forceRender = false) {
    const previousError = this._error;
    const nextCfg = {
      base_url: result.base_url ?? this._cfg.base_url,
      client_id: result.client_id ?? this._cfg.client_id,
      interval: n(result.interval, this._cfg.interval),
    };
    const nextItems = Array.isArray(result.items) ? result.items.map((item) => this._norm(item)) : [];
    const nextActiveItems = Array.isArray(result.active_items)
      ? result.active_items.map((item) => this._norm(item))
      : nextItems.filter((item) => item.status === 'on');
    const nextSignature = JSON.stringify({
      cfg: nextCfg,
      items: nextItems,
      activeItems: nextActiveItems,
    });

    const changed = forceRender || nextSignature !== this._stateSignature || Boolean(previousError);
    this._cfg = nextCfg;
    this._items = nextItems;
    this._activeItems = nextActiveItems;
    this._error = '';
    if (changed) {
      this._status = result.last_updated ? `Обновлено: ${result.last_updated}` : '';
      this._stateSignature = nextSignature;
      this._render();
    }
    return changed;
  }

  _norm(item) {
    const type = String(item?.type ?? 'alarm').toLowerCase() === 'timer' ? 'timer' : 'alarm';
    const time = typeof item?.time === 'object' && item.time ? item.time : {};
    if (type === 'timer') {
      const clientId = String(
        item?.clientId
        ?? item?.client_id
        ?? item?.userId
        ?? item?.user_id
        ?? this._cfg.client_id
        ?? '',
      );
      const countTimer = String(time.count_timer ?? time.duration ?? item?.count_timer ?? item?.duration ?? '00:30:00');
      const dateEnd = String(time.date_end ?? time.end_at ?? time.finish_at ?? item?.date_end ?? item?.end_at ?? '');
      const timezone = String(time.timezone ?? time.time_zone ?? item?.timezone ?? item?.time_zone ?? getBrowserTimeZone());
      return {
        id: String(item?.id ?? id()),
        name: String(item?.name ?? ''),
        type,
        clientId,
        userId: clientId,
        deviceId: String(item?.deviceId ?? item?.device_id ?? ''),
        status: String(item?.status ?? 'on') === 'off' ? 'off' : 'on',
        time: { date_end: dateEnd, count_timer: countTimer, timezone, time_zone: timezone },
      };
    }

    const repeat = ['every_day', 'once', 'custom'].includes(String(time.repeat_mode ?? item?.repeat_mode ?? 'every_day'))
      ? String(time.repeat_mode ?? item?.repeat_mode ?? 'every_day')
      : 'every_day';
    return {
      id: String(item?.id ?? id()),
      name: String(item?.name ?? ''),
      type,
      deviceId: String(item?.deviceId ?? item?.device_id ?? ''),
      status: String(item?.status ?? 'on') === 'off' ? 'off' : 'on',
      time: {
        time: String(time.time ?? item?.alarm_time ?? '08:00'),
        repeat_mode: repeat,
        days: days(time.days ?? item?.days ?? [1, 2, 3, 4, 5, 6, 7]),
      },
    };
  }

  _activeAlarms() {
    return this._items
      .filter((item) => item.type === 'alarm' && item.status === 'on')
      .sort((a, b) => (this._moment(a)?.getTime() ?? Number.MAX_SAFE_INTEGER) - (this._moment(b)?.getTime() ?? Number.MAX_SAFE_INTEGER));
  }

  _activeTimers() {
    const timers = new Map();
    for (const item of this._items) {
      if (item.type === 'timer') {
        timers.set(item.id, item);
      }
    }
    for (const item of this._activeItems) {
      if (item.type === 'timer') {
        timers.set(item.id, { ...(timers.get(item.id) ?? {}), ...item });
      }
    }
    return [...timers.values()]
      .sort((a, b) => (this._moment(a)?.getTime() ?? Number.MAX_SAFE_INTEGER) - (this._moment(b)?.getTime() ?? Number.MAX_SAFE_INTEGER));
  }

  _moment(item) {
    if (item.type === 'timer') {
      return dt(item.time.date_end ?? item.time.end_at);
    }

    const [hh, mm] = String(item.time.time ?? '08:00').split(':').map(Number);
    if (Number.isNaN(hh) || Number.isNaN(mm)) {
      return null;
    }

    const base = now();
    base.setSeconds(0, 0);
    base.setHours(hh, mm, 0, 0);
    const repeat = item.time.repeat_mode ?? 'every_day';
    const ds = days(item.time.days);

    if (repeat === 'once') {
      return base;
    }

    if (repeat === 'every_day' || !ds.length) {
      return base >= now() ? base : new Date(base.getTime() + 86400000);
    }

    for (let offset = 0; offset < 8; offset += 1) {
      const candidate = new Date(Date.now() + offset * 86400000);
      const dow = candidate.getDay() === 0 ? 7 : candidate.getDay();
      if (!ds.includes(dow)) {
        continue;
      }
      candidate.setHours(hh, mm, 0, 0);
      if (candidate >= now()) {
        return candidate;
      }
    }

    return base;
  }

  _timerProgress(item) {
    const end = dt(item.time.date_end ?? item.time.end_at);
    const total = durToSec(item.time.count_timer ?? item.time.duration);
    if (!end || !total) {
      return { left: '00:00:00', percent: 0, leftSeconds: 0, totalSeconds: total };
    }
    const leftSeconds = Math.max(0, Math.floor((end.getTime() - Date.now()) / 1000));
    return {
      left: secToDur(leftSeconds),
      percent: Math.max(0, Math.min(100, Math.round((leftSeconds / total) * 100))),
      leftSeconds,
      totalSeconds: total,
    };
  }

  _deviceName(deviceId) {
    const entity = this._hass?.states?.[deviceId];
    return entity?.attributes?.friendly_name || deviceId || 'Не выбрано';
  }

  _devices() {
    if (!this._hass) {
      return [];
    }
    const all = Object.values(this._hass.states).filter((state) => state.entity_id.startsWith('media_player.'));
    const preferred = all.filter((state) => {
      const entityId = state.entity_id.toLowerCase();
      const name = String(state.attributes.friendly_name ?? '').toLowerCase();
      return entityId.includes('voice') || name.includes('voice') || entityId.includes('home_assistant');
    });
    return (preferred.length ? preferred : all).sort((a, b) => (a.attributes.friendly_name || a.entity_id).localeCompare((b.attributes.friendly_name || b.entity_id), 'ru'));
  }

  _defaultTimerDevice() {
    return this._devices()[0]?.entity_id || '';
  }

  _updateItem(itemId, field, value) {
    this._items = this._items.map((item) => {
      if (item.id !== itemId) {
        return item;
      }

      if (field === 'type') {
        return value === 'timer'
          ? timerItem(30, this._cfg.client_id, this._defaultTimerDevice())
          : alarmItem();
      }

      if (field === 'status') {
        return { ...item, status: value === 'off' ? 'off' : 'on' };
      }

      if (item.type === 'timer') {
        if (field === 'count_timer') {
          return { ...item, time: { ...item.time, count_timer: value } };
        }
        if (field === 'date_end') {
          return { ...item, time: { ...item.time, date_end: value } };
        }
        if (field === 'timezone') {
          return { ...item, time: { ...item.time, timezone: value, time_zone: value } };
        }
        return { ...item, [field]: value };
      }

      if (field === 'alarm_time') {
        return { ...item, time: { ...item.time, time: value } };
      }
      if (field === 'repeat_mode') {
        return {
          ...item,
          time: {
            ...item.time,
            repeat_mode: value,
            days: value === 'every_day' ? [1, 2, 3, 4, 5, 6, 7] : value === 'once' ? [] : item.time.days,
          },
        };
      }
      return { ...item, [field]: value };
    });

    this._dirty = true;
    this._status = '';
    this._error = '';
    this._render();
  }

  _toggleDay(itemId, day) {
    this._items = this._items.map((item) => {
      if (item.id !== itemId || item.type !== 'alarm') {
        return item;
      }
      const current = days(item.time.days);
      const next = current.includes(day) ? current.filter((value) => value !== day) : [...current, day];
      return { ...item, time: { ...item.time, repeat_mode: 'custom', days: next } };
    });
    this._dirty = true;
    this._status = '';
    this._error = '';
    this._render();
  }

  _addAlarm() {
    this._items = [...this._items, alarmItem()];
    this._tab = 'alarm';
    this._dirty = true;
    this._render();
    this._save();
  }

  _addTimer(minutes = 30) {
    this._items = [...this._items, timerItem(minutes, this._cfg.client_id, this._defaultTimerDevice())];
    this._tab = 'timer';
    this._dirty = true;
    this._render();
    this._save();
  }

  _remove(itemId) {
    this._items = this._items.filter((item) => item.id !== itemId);
    this._dirty = true;
    this._render();
    this._save();
  }

  _serialize(item) {
    if (item.type === 'timer') {
      const timezone = String(item.time.timezone ?? item.time.time_zone ?? getBrowserTimeZone());
      const clientId = String(item.clientId ?? item.userId ?? this._cfg.client_id ?? '');
      return {
        id: item.id,
        clientId,
        userId: clientId,
        type: 'timer',
        deviceId: item.deviceId,
        status: item.status,
        time: {
          date_end: String(item.time.date_end ?? item.time.end_at ?? ''),
          count_timer: String(item.time.count_timer ?? item.time.duration ?? '00:30:00'),
          timezone,
        },
      };
    }

    return {
      id: item.id,
      type: 'alarm',
      deviceId: item.deviceId,
      status: item.status,
      time: {
        time: String(item.time.time ?? '08:00'),
        repeat_mode: String(item.time.repeat_mode ?? 'every_day'),
        days: item.time.repeat_mode === 'every_day'
          ? [1, 2, 3, 4, 5, 6, 7]
          : item.time.repeat_mode === 'once'
            ? []
            : days(item.time.days),
      },
    };
  }

  async _save() {
    if (!this._hass) {
      return;
    }
    this._saving = true;
    this._error = '';
    this._status = '';
    this._render();
    try {
      await this._hass.callWS({
        type: SAVE_WS,
        items: this._items.map((item) => this._serialize(item)),
      });
      this._status = 'Timer/alarm настройки сохранены.';
      this._dirty = false;
      await this._loadStateOnly();
    } catch (err) {
      this._error = err?.message || 'Не удалось сохранить timer/alarm.';
    } finally {
      this._saving = false;
      this._render();
    }
  }

  _bind() {
    const root = this.shadowRoot;
    root.querySelectorAll('[data-tab]').forEach((el) => {
      el.addEventListener('click', () => {
        this._tab = el.dataset.tab;
        this._render();
      });
    });
    root.querySelector('[data-action="save"]')?.addEventListener('click', () => this._save());
    root.querySelector('[data-action="add-alarm"]')?.addEventListener('click', () => this._addAlarm());
    root.querySelector('[data-action="add-timer"]')?.addEventListener('click', () => this._addTimer(30));
    root.querySelectorAll('[data-action="quick-start"]').forEach((el) => {
      el.addEventListener('click', () => this._addTimer(Number(el.dataset.minutes) || 30));
    });
    root.querySelectorAll('[data-action="remove-item"]').forEach((el) => {
      el.addEventListener('click', () => this._remove(el.dataset.itemId));
    });
    root.querySelectorAll('[data-item-id][data-field]').forEach((el) => {
      const field = el.dataset.field;
      el.addEventListener(el.tagName === 'SELECT' || el.type === 'time' || el.type === 'datetime-local' ? 'change' : 'input', (ev) => {
        this._updateItem(el.dataset.itemId, field, ev.currentTarget.value);
      });
    });
    root.querySelectorAll('[data-day-item-id][data-day]').forEach((el) => {
      el.addEventListener('change', () => this._toggleDay(el.dataset.dayItemId, Number(el.dataset.day)));
    });
    root.querySelectorAll('input, select, button').forEach((el) => {
      ['click', 'mousedown', 'mouseup', 'keydown', 'keyup', 'keypress', 'focusin'].forEach((eventName) => {
        el.addEventListener(eventName, (event) => event.stopPropagation());
      });
    });
  }

  _renderAlarmItem(item) {
    const devices = this._devices();
    return `
      <article class="item-card">
        <div class="item-head">
          <div>
            <div class="item-kicker">Будильник</div>
            <div class="item-title">${esc(item.name || 'Будильник')}</div>
            <div class="item-summary">${esc(item.time.time)} • ${esc(item.time.repeat_mode === 'once' ? 'один раз' : item.time.repeat_mode === 'custom' ? days(item.time.days).map((day) => DAYS[day]).filter(Boolean).join(', ') : 'каждый день')}</div>
          </div>
          <button type="button" class="ghost" data-action="remove-item" data-item-id="${esc(item.id)}">Удалить</button>
        </div>
        <div class="item-grid">
          <label>
            <span>Устройство</span>
            <select data-item-id="${esc(item.id)}" data-field="deviceId">
              <option value="">Выберите media_player</option>
              ${devices.map((device) => `<option value="${esc(device.entity_id)}" ${device.entity_id === item.deviceId ? 'selected' : ''}>${esc(device.attributes.friendly_name || device.entity_id)} (${esc(device.entity_id)})</option>`).join('')}
            </select>
          </label>
          <label>
            <span>Статус</span>
            <select data-item-id="${esc(item.id)}" data-field="status">
              <option value="on" ${item.status === 'on' ? 'selected' : ''}>on</option>
              <option value="off" ${item.status === 'off' ? 'selected' : ''}>off</option>
            </select>
          </label>
          <label>
            <span>Время</span>
            <input type="time" data-item-id="${esc(item.id)}" data-field="alarm_time" value="${esc(item.time.time)}" />
          </label>
          <label>
            <span>Повтор</span>
            <select data-item-id="${esc(item.id)}" data-field="repeat_mode">
              <option value="every_day" ${item.time.repeat_mode === 'every_day' ? 'selected' : ''}>Каждый день</option>
              <option value="once" ${item.time.repeat_mode === 'once' ? 'selected' : ''}>Один раз</option>
              <option value="custom" ${item.time.repeat_mode === 'custom' ? 'selected' : ''}>Дни недели</option>
            </select>
          </label>
          <div style="grid-column: 1 / -1;" class="days-box">
            <div class="days-title">Дни недели</div>
            <div class="days-row">
              ${Object.entries(DAYS).map(([day, label]) => `
                <label class="day-chip">
                  <input type="checkbox" data-day-item-id="${esc(item.id)}" data-day="${esc(day)}" ${item.time.repeat_mode !== 'custom' ? 'disabled' : ''} ${days(item.time.days).includes(Number(day)) ? 'checked' : ''} />
                  <span>${esc(label)} (${esc(day)})</span>
                </label>
              `).join('')}
            </div>
          </div>
        </div>
        <div class="item-footer">
          <span class="badge ${item.status === 'on' ? 'badge-on' : 'badge-off'}">${esc(item.status)}</span>
          <span class="badge">${esc(item.time.repeat_mode === 'once' ? 'один раз' : item.time.repeat_mode === 'custom' ? 'выбранные дни' : 'каждый день')}</span>
        </div>
      </article>
    `;
  }

  _renderTimerItem(item) {
    const devices = this._devices();
    const progress = this._timerProgress(item);
    const duration = item.time.count_timer || '00:30:00';
    const remainingLabel = progress.totalSeconds ? `${humanDuration(progress.leftSeconds)} осталось` : 'ожидание';
    const ringRadius = 45;
    const ringCircumference = 2 * Math.PI * ringRadius;
    const ringOffset = ringCircumference * (1 - (progress.percent / 100));
    const ringGradientId = `timer-ring-gradient-${String(item.id).replaceAll(/[^a-zA-Z0-9_-]/g, '-')}`;
    return `
      <article class="item-card timer-card" data-item-id="${esc(item.id)}">
        <div class="item-head">
          <div>
            <div class="item-kicker">Таймер</div>
            <div class="item-title">${esc(item.name || 'Таймер')}</div>
            <div class="item-summary">${esc(duration)} • ${esc(this._deviceName(item.deviceId))}</div>
          </div>
          <button type="button" class="ghost" data-action="remove-item" data-item-id="${esc(item.id)}">Удалить</button>
        </div>
        <div class="timer-visual">
          <div class="timer-ring">
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <linearGradient id="${esc(ringGradientId)}" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#234f7d"></stop>
                  <stop offset="100%" stop-color="#4c78a8"></stop>
                </linearGradient>
              </defs>
              <circle class="timer-ring-track" cx="60" cy="60" r="${ringRadius}"></circle>
              <circle
                class="timer-ring-progress"
                cx="60"
                cy="60"
                r="${ringRadius}"
                style="stroke:url(#${esc(ringGradientId)}); stroke-dasharray:${ringCircumference}; stroke-dashoffset:${ringOffset};"
              ></circle>
            </svg>
            <div class="timer-ring-text">
              <div class="timer-value">${esc(progress.left)}</div>
              <div class="timer-note">${esc(remainingLabel)}</div>
            </div>
          </div>
        </div>
        <div class="item-grid">
          <label>
            <span>Устройство</span>
            <select data-item-id="${esc(item.id)}" data-field="deviceId">
              <option value="">Выберите media_player</option>
              ${devices.map((device) => `<option value="${esc(device.entity_id)}" ${device.entity_id === item.deviceId ? 'selected' : ''}>${esc(device.attributes.friendly_name || device.entity_id)} (${esc(device.entity_id)})</option>`).join('')}
            </select>
          </label>
          <label>
            <span>Статус</span>
            <select data-item-id="${esc(item.id)}" data-field="status">
              <option value="on" ${item.status === 'on' ? 'selected' : ''}>on</option>
              <option value="off" ${item.status === 'off' ? 'selected' : ''}>off</option>
            </select>
          </label>
          <label>
            <span>Длительность</span>
            <input data-item-id="${esc(item.id)}" data-field="count_timer" value="${esc(item.time.count_timer ?? '')}" placeholder="00:10:00" />
          </label>
          <label>
            <span>Дата окончания</span>
            <input type="text" data-item-id="${esc(item.id)}" data-field="date_end" value="${esc(item.time.date_end ?? '')}" placeholder="2026-04-08 16:44:06" />
          </label>
          <label style="grid-column: 1 / -1;">
            <span>Timezone</span>
            <input data-item-id="${esc(item.id)}" data-field="timezone" value="${esc(item.time.timezone ?? item.time.time_zone ?? getBrowserTimeZone())}" placeholder="Asia/Yekaterinburg" />
          </label>
        </div>
        <div class="item-footer">
          <span class="badge ${item.status === 'on' ? 'badge-on' : 'badge-off'}">${esc(item.status)}</span>
          <span class="badge">${esc(duration)}</span>
          <span class="badge">${esc(this._deviceName(item.deviceId))}</span>
        </div>
      </article>
    `;
  }

  _syncActiveTimerCards() {
    const timers = this._activeTimers();
    for (const item of timers) {
      const card = this.shadowRoot.querySelector(`.timer-card[data-item-id="${CSS.escape(String(item.id))}"]`);
      if (!card) {
        continue;
      }

      const progress = this._timerProgress(item);
      const duration = item.time.count_timer || '00:30:00';
      const remainingLabel = progress.totalSeconds ? `${humanDuration(progress.leftSeconds)} осталось` : 'ожидание';
      const ringRadius = 45;
      const ringCircumference = 2 * Math.PI * ringRadius;
      const ringOffset = ringCircumference * (1 - (progress.percent / 100));

      const valueEl = card.querySelector('.timer-value');
      if (valueEl) {
        valueEl.textContent = progress.left;
      }
      const noteEl = card.querySelector('.timer-note');
      if (noteEl) {
        noteEl.textContent = remainingLabel;
      }
      const summaryEl = card.querySelector('.item-summary');
      if (summaryEl) {
        summaryEl.textContent = `${duration} • ${this._deviceName(item.deviceId)}`;
      }
      const progressEl = card.querySelector('.timer-ring-progress');
      if (progressEl) {
        progressEl.style.strokeDasharray = `${ringCircumference}`;
        progressEl.style.strokeDashoffset = `${ringOffset}`;
      }
    }
  }

  _renderTimerTab() {
    const timers = this._activeTimers();
    const body = timers.length
      ? timers.map((item) => this._renderTimerItem(item)).join('')
      : `<div class="empty">Таймеров пока нет.</div>`;

    return `
      <section class="hero">
        <h1 class="title">Таймер</h1>
        <p class="subtitle">Создавай таймеры, выбирай устройство и смотри активные запуски внизу.</p>
        <div class="toolbar">
          <button type="button" class="btn secondary" data-action="add-timer">+ Таймер</button>
          ${QUICK_STARTS.map((minutes) => `<button type="button" class="btn secondary" data-action="quick-start" data-minutes="${minutes}">+${minutes === 60 ? '1 час' : `${minutes} мин`}</button>`).join('')}
          <button type="button" class="btn primary" data-action="save" ${this._saving ? 'disabled' : ''}>${this._saving ? 'Сохранение...' : 'Сохранить'}</button>
        </div>
      </section>
      <section class="item-list">${body}</section>
    `;
  }

  _renderAlarmTab() {
    const alarms = this._activeAlarms();
    const body = alarms.length
      ? alarms.map((item) => this._renderAlarmItem(item)).join('')
      : `<div class="empty">Активных будильников пока нет.</div>`;

    return `
      <section class="hero">
        <h1 class="title">Будильник</h1>
        <p class="subtitle">Настрой время, дни недели и устройство воспроизведения.</p>
        <div class="toolbar">
          <button type="button" class="btn secondary" data-action="add-alarm">+ Будильник</button>
          <button type="button" class="btn primary" data-action="save" ${this._saving ? 'disabled' : ''}>${this._saving ? 'Сохранение...' : 'Сохранить'}</button>
        </div>
      </section>
      <section class="item-list">${body}</section>
    `;
  }

  _render() {
    const body = this._tab === 'timer' ? this._renderTimerTab() : this._renderAlarmTab();
    const markup = `
      <style>
        :host { display:block; color:#1b2432; font-family:"Segoe UI","Trebuchet MS",sans-serif; }
        * { box-sizing:border-box; min-width:0; }
        .panel, .item-list { display:grid; gap:16px; }
        .hero, .item-card, .empty { background:rgba(255,255,255,.9); border:1px solid rgba(34,45,67,.14); border-radius:20px; box-shadow:0 18px 40px rgba(31,41,55,.08); }
        .hero { padding:24px; }
        .title { margin:0; font-size:32px; line-height:1.05; letter-spacing:-.03em; }
        .subtitle, .item-summary, .timer-note, small { color:#5c667a; }
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
        .timer-card { display:grid; gap:16px; }
        .item-head { display:flex; justify-content:space-between; align-items:flex-start; gap:12px; margin-bottom:4px; }
        .item-kicker { text-transform:uppercase; letter-spacing:.1em; font-size:12px; color:#5c667a; }
        .item-title { font-size:20px; font-weight:700; margin-top:4px; }
        .item-footer { display:flex; gap:8px; flex-wrap:wrap; margin-top:12px; }
        .badge { display:inline-flex; align-items:center; padding:6px 10px; border-radius:999px; background:rgba(35,79,125,.08); color:#234f7d; font-size:12px; }
        .badge-on { background:rgba(47,133,90,.1); color:#2f855a; }
        .badge-off { background:rgba(194,65,12,.1); color:#b45309; }
        .days-box { grid-column:1 / -1; display:grid; gap:10px; padding:14px; border:1px solid rgba(34,45,67,.14); border-radius:16px; background:rgba(255,255,255,.72); }
        .days-row { display:flex; flex-wrap:wrap; gap:8px; }
        .day-chip { display:inline-flex; gap:8px; align-items:center; padding:8px 12px; border-radius:999px; border:1px solid rgba(34,45,67,.14); background:rgba(255,255,255,.82); cursor:pointer; }
        .day-chip input { width:auto; }
        .timer-visual { display:flex; justify-content:center; padding:10px 0 2px; }
        .timer-ring { position:relative; width:180px; height:180px; display:grid; place-items:center; }
        .timer-ring svg { width:100%; height:100%; transform:rotate(-90deg); overflow:visible; }
        .timer-ring-track,
        .timer-ring-progress { fill:none; stroke-width:10; }
        .timer-ring-track { stroke:rgba(35,79,125,.12); }
        .timer-ring-progress { stroke-linecap:round; transition:stroke-dashoffset .35s ease; }
        .timer-ring-text { position:absolute; inset:0; display:grid; place-items:center; text-align:center; padding:18px; }
        .timer-value { font-size:28px; font-weight:800; color:#234f7d; line-height:1.05; }
        .timer-note { font-size:13px; }
        .toolbar { margin-top:18px; display:flex; gap:12px; flex-wrap:wrap; }
        .empty { padding:24px; }
        @media (max-width:900px) { .grid, .item-grid { grid-template-columns:1fr; } }
        @media (max-width:640px) { .timer-ring { width:150px; height:150px; } }
      </style>
      <div class="panel">
        <section class="hero">
          <h1 class="title">Timer / Alarm</h1>
          <p class="subtitle">Отдельные вкладки для будильников и таймеров. Подключение и общие настройки живут во вкладке Settings панели сценариев.</p>
          <div class="toolbar">
            <div class="tabs">
              <button type="button" class="tab ${this._tab === 'alarm' ? 'active' : ''}" data-tab="alarm">Будильник</button>
              <button type="button" class="tab ${this._tab === 'timer' ? 'active' : ''}" data-tab="timer">Таймер</button>
            </div>
          </div>
          ${this._error ? `<div style="margin-top:12px;padding:12px 14px;border-radius:14px;background:rgba(180,43,43,.1);color:#8a2323;">${esc(this._error)}</div>` : ''}
          ${this._status ? `<div style="margin-top:12px;padding:12px 14px;border-radius:14px;background:rgba(35,111,73,.1);color:#155c3a;">${esc(this._status)}</div>` : ''}
        </section>
        ${body}
      </div>
    `;
    this._mountReact(markup);
    this._bind();
  }
}

customElements.define('dialog-custom-ui-timer-alarm', DialogCustomUiTimerAlarm);
