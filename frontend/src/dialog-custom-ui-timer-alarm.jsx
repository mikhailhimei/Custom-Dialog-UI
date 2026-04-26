const GET_WS = 'dialog_custom_ui/get_timer_alarm_config';
const SAVE_WS = 'dialog_custom_ui/save_timer_alarm_config';
const TICK_MS = 1000;
const POLL_MS = 3000;
const QUICK_MINUTES = [5, 10, 15, 30, 60];
const HARD_CODED_MEDIA_FOLDER = 'media-source://media_source/local/timer_alarm/';
const HARD_CODED_MEDIA_CHOICES = [
  'morning-meadow-birdsongs-looping_zyb7nhnu.mp3',
  'gentle-chimes-soft-loop.mp3',
  'sunrise-piano-calm-loop.mp3',
  'digital-beep-short-loop.mp3',
  'forest-rain-ambient-loop.mp3',
];

const esc = (v) => String(v ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const uid = (prefix) => (crypto?.randomUUID ? `${prefix}${crypto.randomUUID().slice(0, 8)}` : `${prefix}${Date.now()}`);
const pad = (n) => String(n).padStart(2, '0');
const parseDate = (v) => {
  const d = new Date(String(v ?? '').replace(' ', 'T'));
  return Number.isNaN(d.getTime()) ? null : d;
};
const toDuration = (sec) => `${pad(Math.floor(sec / 3600))}:${pad(Math.floor((sec % 3600) / 60))}:${pad(sec % 60)}`;
const toSeconds = (duration) => {
  const p = String(duration ?? '').split(':').map((x) => Number(x));
  if (p.some(Number.isNaN)) {
    return 0;
  }
  if (p.length === 3) {
    return p[0] * 3600 + p[1] * 60 + p[2];
  }
  if (p.length === 2) {
    return p[0] * 60 + p[1];
  }
  return p.length === 1 ? p[0] * 60 : 0;
};

const normalizeTimer = (item) => {
  const time = item?.time && typeof item.time === 'object' ? item.time : {};
  const totalSeconds = Number(time.total_seconds) || toSeconds(time.count_timer) || 1800;
  return {
    id: String(item?.id ?? uid('ha_timer:')),
    type: 'timer',
    status: String(item?.status ?? 'on'),
    clientId: String(item?.clientId ?? item?.userId ?? ''),
    userId: String(item?.userId ?? item?.clientId ?? ''),
    deviceId: String(item?.deviceId ?? item?.device_id ?? ''),
    time: {
      count_timer: String(time.count_timer ?? toDuration(totalSeconds)),
      date_end: String(time.date_end ?? ''),
      timezone: String(time.timezone ?? ''),
      remaining_seconds: Number(time.remaining_seconds) || 0,
      total_seconds: totalSeconds,
    },
  };
};

const normalizeAlarm = (item) => {
  const time = item?.time && typeof item.time === 'object' ? item.time : {};
  return {
    id: String(item?.id ?? uid('ha_alarm:')),
    type: 'alarm',
    status: String(item?.status ?? 'on'),
    clientId: String(item?.clientId ?? item?.userId ?? ''),
    userId: String(item?.userId ?? item?.clientId ?? ''),
    deviceId: String(item?.deviceId ?? item?.device_id ?? ''),
    time: {
      time: String(time.time ?? '08:00'),
    },
  };
};

class TimerAlarmPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._hass = null;
    this._tab = 'timer';
    this._items = [];
    this._presets = [];
    this._deviceLabels = {};
    this._selectedDevice = '';
    this._defaultMediaContentId = '';
    this._loading = false;
    this._saving = false;
    this._error = '';
    this._status = '';
    this._tick = null;
    this._poll = null;
    this._debugWsPayload = null;
    this._theme = 'light';
  }

  set hass(v) {
    this._hass = v;
    if (!this._loading) {
      this._load();
    }
  }

  set config(value) {
    const next = value && typeof value === 'object' ? value : {};
    this._theme = String(next.theme ?? 'light').toLowerCase() === 'dark' ? 'dark' : 'light';
    this.setAttribute('data-theme', this._theme);
    this._render();
  }

  connectedCallback() {
    this.setAttribute('data-theme', this._theme);
    if (!this.shadowRoot.innerHTML) {
      this._render();
    }
    this._startLoops();
  }

  disconnectedCallback() {
    this._stopLoops();
  }

  async _load() {
    if (!this._hass || this._loading || this._saving) {
      return;
    }
    this._loading = true;
    try {
      const res = await this._hass.callWS({ type: GET_WS });
      this._debugWsPayload = res;
      const rawItems = Array.isArray(res?.items) ? res.items : [];
      const rawActiveItems = Array.isArray(res?.active_items) ? res.active_items : [];
      const merged = new Map();
      [...rawItems, ...rawActiveItems].forEach((item) => {
        if (!item || typeof item !== 'object') {
          return;
        }
        const key = String(item.id ?? '');
        if (!key) {
          return;
        }
        merged.set(key, { ...(merged.get(key) || {}), ...item });
      });
      this._items = [...merged.values()]
        .map((x) => (String(x?.type ?? '').toLowerCase() === 'timer' ? normalizeTimer(x) : normalizeAlarm(x)));
      this._presets = Array.isArray(res?.alarm_presets) ? res.alarm_presets.map((x) => String(x)) : [];
      this._deviceLabels = res?.device_labels && typeof res.device_labels === 'object' ? res.device_labels : {};
      this._defaultMediaContentId = String(res?.default_media_content_id ?? this._defaultMediaContentId ?? '').trim();
      this._status = res?.last_updated ? `Updated: ${res.last_updated}` : '';
      this._error = '';
    } catch (e) {
      this._debugWsPayload = { ws_error: String(e?.message || e || 'unknown error') };
      this._error = e?.message || 'Failed to load timer/alarm state.';
    } finally {
      this._loading = false;
      this._render();
    }
  }

  async _save() {
    if (!this._hass || this._saving) {
      return;
    }
    this._saving = true;
    this._error = '';
    this._status = '';
    this._render();
    try {
      await this._hass.callWS({
        type: SAVE_WS,
        timer_alarm_items: this._items,
        timer_alarm_media_content_id: this._defaultMediaContentId,
      });
      await this._load();
    } catch (e) {
      this._error = e?.message || 'Failed to save.';
      this._render();
    } finally {
      this._saving = false;
      this._render();
    }
  }

  _startLoops() {
    this._stopLoops();
    this._tick = window.setInterval(() => this._refreshLiveFields(), TICK_MS);
    this._poll = window.setInterval(() => {
      if (this._isInteractiveControlFocused()) {
        return;
      }
      this._load();
    }, POLL_MS);
  }

  _stopLoops() {
    if (this._tick) {
      window.clearInterval(this._tick);
      this._tick = null;
    }
    if (this._poll) {
      window.clearInterval(this._poll);
      this._poll = null;
    }
  }

  _devices() {
    if (!this._hass?.states) {
      return [];
    }
    return Object.values(this._hass.states)
      .filter((s) => s.entity_id.startsWith('media_player.'))
      .sort((a, b) => (a.attributes.friendly_name || a.entity_id).localeCompare((b.attributes.friendly_name || b.entity_id)));
  }

  _timerLeft(timer) {
    const fromRemaining = Math.max(0, Number(timer?.time?.remaining_seconds) || 0);
    if (timer.status === 'paused') {
      return fromRemaining;
    }
    if (fromRemaining > 0) {
      return fromRemaining;
    }
    const end = parseDate(timer.time.date_end);
    if (!end) {
      return fromRemaining;
    }
    return Math.max(0, Math.floor((end.getTime() - Date.now()) / 1000));
  }

  _isInteractiveControlFocused() {
    const active = this.shadowRoot?.activeElement;
    if (!active) {
      return false;
    }
    const tag = String(active.tagName || '').toUpperCase();
    return tag === 'SELECT' || tag === 'INPUT' || tag === 'TEXTAREA';
  }

  _nowTimeLabel() {
    const now = new Date();
    return `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  }

  _refreshLiveFields() {
    this.shadowRoot?.querySelectorAll('[data-timer-left-id]').forEach((el) => {
      const itemId = String(el.getAttribute('data-timer-left-id') || '');
      const timer = this._items.find((item) => item.type === 'timer' && item.id === itemId);
      if (!timer) {
        return;
      }
      el.textContent = `${toDuration(this._timerLeft(timer))} left`;
    });
    this.shadowRoot?.querySelectorAll('[data-now-clock]').forEach((el) => {
      el.textContent = this._nowTimeLabel();
    });
  }

  _renderDeviceOptions(selectedDevice, placeholder = 'Select media_player') {
    const devices = this._devices();
    const hasSelected = selectedDevice && devices.some((d) => d.entity_id === selectedDevice);
    const selectedLabel = String(this._deviceLabels?.[selectedDevice] || '').trim();
    const fallbackOption = hasSelected || !selectedDevice
      ? ''
      : `<option value="${esc(selectedDevice)}" selected>${esc(selectedLabel || selectedDevice)} (${esc(selectedDevice)})</option>`;
    return `
      <option value="">${esc(placeholder)}</option>
      ${fallbackOption}
      ${devices.map((d) => `<option value="${esc(d.entity_id)}" ${selectedDevice === d.entity_id ? 'selected' : ''}>${esc(d.attributes.friendly_name || d.entity_id)}</option>`).join('')}
    `;
  }

  _renderGlobalMediaOptions(selectedMedia) {
    const normalized = String(selectedMedia ?? '').trim();
    const options = HARD_CODED_MEDIA_CHOICES.map((fileName) => `${HARD_CODED_MEDIA_FOLDER}${fileName}`);
    const hasSelected = normalized && options.includes(normalized);
    const fallback = hasSelected || !normalized
      ? ''
      : `<option value="${esc(normalized)}" selected>${esc(normalized.replace(HARD_CODED_MEDIA_FOLDER, ''))}</option>`;
    return `
      <option value="">Select track from timer_alarm folder</option>
      ${fallback}
      ${options.map((value) => `
        <option value="${esc(value)}" ${normalized === value ? 'selected' : ''}>
          ${esc(value.replace(HARD_CODED_MEDIA_FOLDER, ''))}
        </option>
      `).join('')}
    `;
  }

  _addTimer(minutes) {
    const total = Math.max(60, Number(minutes) * 60 || 300);
    const end = new Date(Date.now() + total * 1000);
    const timer = normalizeTimer({
      id: uid('ha_timer:'),
      status: 'on',
      deviceId: this._selectedDevice || this._devices()[0]?.entity_id || '',
      time: {
        count_timer: toDuration(total),
        date_end: `${end.getFullYear()}-${pad(end.getMonth() + 1)}-${pad(end.getDate())} ${pad(end.getHours())}:${pad(end.getMinutes())}:${pad(end.getSeconds())}`,
        remaining_seconds: total,
        total_seconds: total,
      },
    });
    this._items = [...this._items, timer];
    this._save();
  }

  _addAlarm(timeValue = '08:00') {
    const alarm = normalizeAlarm({
      id: uid('ha_alarm:'),
      status: 'on',
      deviceId: this._selectedDevice || this._devices()[0]?.entity_id || '',
      time: { time: timeValue },
    });
    this._items = [...this._items, alarm];
    this._save();
  }

  _updateItem(itemId, patch) {
    this._items = this._items.map((item) => (item.id === itemId ? { ...item, ...patch } : item));
    this._save();
  }

  _removeItem(itemId) {
    this._items = this._items.filter((item) => item.id !== itemId);
    this._save();
  }

  _pauseTimer(itemId) {
    this._items = this._items.map((item) => {
      if (item.id !== itemId || item.type !== 'timer') {
        return item;
      }
      return { ...item, status: 'paused', time: { ...item.time, remaining_seconds: this._timerLeft(item) } };
    });
    this._save();
  }

  _resumeTimer(itemId) {
    this._items = this._items.map((item) => {
      if (item.id !== itemId || item.type !== 'timer') {
        return item;
      }
      const left = Math.max(1, Number(item.time.remaining_seconds) || 60);
      const end = new Date(Date.now() + left * 1000);
      return {
        ...item,
        status: 'on',
        time: {
          ...item.time,
          date_end: `${end.getFullYear()}-${pad(end.getMonth() + 1)}-${pad(end.getDate())} ${pad(end.getHours())}:${pad(end.getMinutes())}:${pad(end.getSeconds())}`,
          count_timer: toDuration(Math.max(left, Number(item.time.total_seconds) || left)),
        },
      };
    });
    this._save();
  }

  _renderTimers() {
    const timers = this._items.filter((x) => x.type === 'timer');
    if (!timers.length) {
      return '<div class="empty">No timers yet.</div>';
    }
    return timers.map((item) => {
      const left = this._timerLeft(item);
      return `
        <article class="card">
          <div class="head">
            <div>
              <div class="title">Timer</div>
              <div class="meta" data-timer-left-id="${esc(item.id)}">${esc(toDuration(left))} left</div>
              <div class="meta">Current time: <span data-now-clock>${esc(this._nowTimeLabel())}</span></div>
            </div>
            <div class="actions">
              ${item.status === 'paused'
                ? `<button type="button" class="btn ghost" data-action="resume-timer" data-item-id="${esc(item.id)}">Resume</button>`
                : `<button type="button" class="btn ghost" data-action="pause-timer" data-item-id="${esc(item.id)}">Pause</button>`
              }
              <button type="button" class="btn danger" data-action="remove-item" data-item-id="${esc(item.id)}">Stop</button>
            </div>
          </div>
          <label>
            <span>Device</span>
            <select data-action="set-device" data-item-id="${esc(item.id)}">
              ${this._renderDeviceOptions(item.deviceId)}
            </select>
          </label>
        </article>
      `;
    }).join('');
  }

  _renderAlarms() {
    const alarms = this._items.filter((x) => x.type === 'alarm');
    return `
      <section class="preset-row">
        ${this._presets.map((p) => `<button type="button" class="btn ghost" data-action="add-alarm-preset" data-preset="${esc(p)}">+ ${esc(p)}</button>`).join('')}
      </section>
      ${alarms.length ? alarms.map((item) => `
        <article class="card">
          <div class="head">
            <div>
              <div class="title">Alarm</div>
              <div class="meta">${esc(item.time.time)}</div>
              <div class="meta">Current time: <span data-now-clock>${esc(this._nowTimeLabel())}</span></div>
            </div>
            <button type="button" class="btn danger" data-action="remove-item" data-item-id="${esc(item.id)}">Delete</button>
          </div>
          <div class="alarm-grid">
            <label>
              <span>Time</span>
              <input type="time" data-action="set-alarm-time" data-item-id="${esc(item.id)}" value="${esc(item.time.time)}" />
            </label>
            <div>
              <span>Status</span>
              <label class="switch-control">
                <input type="checkbox" data-action="set-alarm-enabled" data-item-id="${esc(item.id)}" ${item.status !== 'off' ? 'checked' : ''} />
                <span class="switch-slider" aria-hidden="true"></span>
                <span class="switch-label">${item.status !== 'off' ? 'on' : 'off'}</span>
              </label>
            </div>
            <label class="full">
              <span>Device</span>
              <select data-action="set-device" data-item-id="${esc(item.id)}">
                ${this._renderDeviceOptions(item.deviceId)}
              </select>
            </label>
          </div>
        </article>
      `).join('') : '<div class="empty">No alarms yet.</div>'}
    `;
  }

  _bind() {
    this.shadowRoot.querySelectorAll('[data-tab]').forEach((el) => {
      el.onclick = () => {
        this._tab = el.dataset.tab;
        this._render();
      };
    });
    this.shadowRoot.querySelectorAll('[data-action="quick-timer"]').forEach((el) => {
      el.onclick = () => this._addTimer(Number(el.dataset.minutes) || 5);
    });
    this.shadowRoot.querySelector('[data-action="add-alarm"]')?.addEventListener('click', () => this._addAlarm('08:00'));
    this.shadowRoot.querySelectorAll('[data-action="add-alarm-preset"]').forEach((el) => {
      el.onclick = () => this._addAlarm(String(el.dataset.preset || '08:00'));
    });
    this.shadowRoot.querySelector('[data-action="select-global-device"]')?.addEventListener('change', (e) => {
      this._selectedDevice = String(e.currentTarget.value || '');
    });
    this.shadowRoot.querySelector('[data-action="set-global-media"]')?.addEventListener('change', (e) => {
      this._defaultMediaContentId = String(e.currentTarget.value || '').trim();
      this._save();
    });
    this.shadowRoot.querySelectorAll('[data-action="remove-item"]').forEach((el) => {
      el.onclick = () => this._removeItem(String(el.dataset.itemId || ''));
    });
    this.shadowRoot.querySelectorAll('[data-action="pause-timer"]').forEach((el) => {
      el.onclick = () => this._pauseTimer(String(el.dataset.itemId || ''));
    });
    this.shadowRoot.querySelectorAll('[data-action="resume-timer"]').forEach((el) => {
      el.onclick = () => this._resumeTimer(String(el.dataset.itemId || ''));
    });
    this.shadowRoot.querySelectorAll('[data-action="set-device"]').forEach((el) => {
      el.onchange = (e) => this._updateItem(String(el.dataset.itemId || ''), { deviceId: String(e.currentTarget.value || '') });
    });
    this.shadowRoot.querySelectorAll('[data-action="set-alarm-time"]').forEach((el) => {
      el.onchange = (e) => {
        const v = String(e.currentTarget.value || '08:00');
        const id = String(el.dataset.itemId || '');
        this._items = this._items.map((item) => (item.id === id ? { ...item, time: { ...item.time, time: v } } : item));
        this._save();
      };
    });
    this.shadowRoot.querySelectorAll('[data-action="set-alarm-enabled"]').forEach((el) => {
      el.onchange = (e) => this._updateItem(String(el.dataset.itemId || ''), { status: e.currentTarget.checked ? 'on' : 'off' });
    });
  }

  _render() {
    const body = this._tab === 'timer' ? this._renderTimers() : this._renderAlarms();
    const quickTimerToolbar = this._tab === 'timer'
      ? `<div class="quick-actions-row">${QUICK_MINUTES.map((m) => `<button type="button" class="btn ghost quick-btn" data-action="quick-timer" data-minutes="${m}">+${m}m</button>`).join('')}</div>`
      : '';
    const alarmToolbar = this._tab === 'alarm'
      ? '<div class="quick-actions-row"><button type="button" class="btn ghost quick-btn" data-action="add-alarm">+ alarm</button></div>'
      : '';
    const html = `
      <style>
        :host {
          --ta-bg: var(--card-bg, #ffffff);
          --ta-bg-soft: var(--card-bg-soft, rgba(255, 255, 255, 0.85));
          --ta-border: var(--border, #d9e1ef);
          --ta-text: var(--text, #202533);
          --ta-muted: var(--muted, #5d697f);
          --ta-accent: var(--accent-2, #264b7f);
          display: block;
          color: var(--ta-text);
          font-family: "Manrope", "Segoe UI", sans-serif;
          overflow-x: hidden;
        }
        * {
          box-sizing: border-box;
          min-width: 0;
        }
        .panel { display:grid; gap:14px; max-width: 100%; overflow-x: hidden; }
        .toolbar, .tabs { display:flex; gap:10px; flex-wrap:wrap; }
        .tabs {
          overflow-x: auto;
          flex-wrap: nowrap;
          scrollbar-width: thin;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 2px;
        }
        .tabs button {
          border:0;
          border-radius:999px;
          padding:8px 14px;
          cursor:pointer;
          background:var(--ta-bg-soft);
          color: var(--ta-muted);
          flex: 0 0 auto;
          white-space: nowrap;
        }
        .tabs button.active { background:var(--ta-accent); color:#fff; }
        .quick-actions-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          flex: 1 1 100%;
        }
        .card, .hero, .empty { background:var(--ta-bg); border:1px solid var(--ta-border); border-radius:14px; padding:14px; }
        .head { display:flex; justify-content:space-between; gap:8px; align-items:flex-start; }
        .head > * { min-width: 0; }
        .title { font-weight:700; font-size:18px; }
        .meta { color:var(--ta-muted); margin-top:4px; overflow-wrap: anywhere; word-break: break-word; }
        .btn {
          border:0;
          border-radius:999px;
          padding:8px 12px;
          cursor:pointer;
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .btn.ghost { background:var(--ta-bg-soft); color:var(--ta-accent); }
        .btn.danger { background:#b64a3a; color:#fff; }
        .status { padding:10px 12px; border-radius:10px; }
        .ok { background:rgba(35, 111, 73, 0.12); color:#275f3d; }
        .err { background:rgba(180, 43, 43, 0.12); color:#842f23; }
        :host([data-theme="dark"]) .ok { color:#92f0bd; }
        :host([data-theme="dark"]) .err { color:#ffb0a9; }
        label { display:grid; gap:6px; margin-top:10px; }
        label span { font-size:12px; text-transform:uppercase; color:var(--ta-accent); font-weight:700; letter-spacing:0.08em; }
        select, input {
          border:1px solid var(--ta-border);
          border-radius:10px;
          padding:10px 12px;
          background:var(--ta-bg-soft);
          color: var(--ta-text);
          max-width: 100%;
        }
        .preset-row {
          display:flex;
          gap:8px;
          flex-wrap:nowrap;
          overflow-x:auto;
          scrollbar-width:thin;
          -webkit-overflow-scrolling:touch;
          padding-bottom:4px;
        }
        .preset-row .btn {
          flex: 0 0 auto;
          white-space: nowrap;
        }
        .alarm-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          align-items: start;
        }
        .alarm-grid .full {
          grid-column: 1 / -1;
        }
        .switch-control { margin-top:0; display:inline-flex; align-items:center; gap:8px; }
        .switch-control input[type="checkbox"] { position:absolute; opacity:0; pointer-events:none; }
        .switch-slider { width:44px; height:24px; background:#ccd7ea; border-radius:999px; position:relative; transition:background .2s ease; }
        .switch-slider::after { content:""; position:absolute; top:3px; left:3px; width:18px; height:18px; background:#fff; border-radius:50%; transition:transform .2s ease; }
        .switch-control input[type="checkbox"]:checked + .switch-slider { background:var(--ta-accent); }
        .switch-control input[type="checkbox"]:checked + .switch-slider::after { transform:translateX(20px); }
        .switch-label { font-size:13px; text-transform:none; color:var(--ta-muted); font-weight:600; }
        .media-field { min-width: min(100%, 420px); flex: 1 1 340px; }
        .toolbar select { min-width: min(100%, 280px); flex: 1 1 260px; }
        .quick-btn { min-width: 74px; }
        .actions { display: flex; gap: 8px; flex-wrap: wrap; justify-content: flex-end; }
        .head > .btn.danger { align-self: flex-start; }
        .toolbar > * { min-width: 0; }
        @media (max-width: 760px) {
          .hero,
          .card,
          .empty,
          .toolbar,
          .quick-actions-row,
          .media-field {
            width: 100%;
            max-width: 100%;
          }
          .head {
            flex-direction: column;
          }
          .head > .btn.danger {
            width: 100%;
          }
          .actions {
            width: 100%;
            justify-content: stretch;
          }
          .actions .btn {
            flex: 1 1 auto;
          }
          .toolbar > select {
            flex: 1 1 100%;
          }
          .quick-actions-row {
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
          }
          .quick-actions-row .quick-btn {
            width: 100%;
            min-width: 0;
          }
          .alarm-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <div class="panel">
        <section class="hero">
          <div class="tabs">
            <button type="button" data-tab="timer" class="${this._tab === 'timer' ? 'active' : ''}">Timer</button>
            <button type="button" data-tab="alarm" class="${this._tab === 'alarm' ? 'active' : ''}">Alarm</button>
          </div>
          <div class="meta" style="margin-top:8px;">Current time: <span data-now-clock>${esc(this._nowTimeLabel())}</span></div>
          <div class="toolbar" style="margin-top:10px;">
            <select data-action="select-global-device">
              ${this._renderDeviceOptions(this._selectedDevice, 'Device for quick start')}
            </select>
            ${quickTimerToolbar}
            ${alarmToolbar}
          </div>
          <label class="media-field">
            <span>Global music (folder: local/timer_alarm)</span>
            <select data-action="set-global-media">
              ${this._renderGlobalMediaOptions(this._defaultMediaContentId)}
            </select>
          </label>
          ${this._status ? `<div class="status ok" style="margin-top:10px;">${esc(this._status)}</div>` : ''}
          ${this._error ? `<div class="status err" style="margin-top:10px;">${esc(this._error)}</div>` : ''}
          <details style="margin-top:10px;">
            <summary>Debug WS</summary>
            <div style="margin-top:8px; font-size:12px; color:var(--ta-muted);">
              items: ${Array.isArray(this._debugWsPayload?.items) ? this._debugWsPayload.items.length : 0},
              active_items: ${Array.isArray(this._debugWsPayload?.active_items) ? this._debugWsPayload.active_items.length : 0},
              alarm_presets: ${Array.isArray(this._debugWsPayload?.alarm_presets) ? this._debugWsPayload.alarm_presets.length : 0}
            </div>
            <pre style="margin-top:8px; max-height:220px; overflow:auto; background:var(--ta-bg-soft); border:1px solid var(--ta-border); border-radius:8px; padding:8px;">${esc(JSON.stringify(this._debugWsPayload ?? {}, null, 2))}</pre>
          </details>
        </section>
        ${body}
      </div>
    `;
    this.shadowRoot.innerHTML = html;
    this._bind();
    this._refreshLiveFields();
  }
}

if (!customElements.get('dialog-custom-ui-timer-alarm')) {
  customElements.define('dialog-custom-ui-timer-alarm', TimerAlarmPanel);
}
