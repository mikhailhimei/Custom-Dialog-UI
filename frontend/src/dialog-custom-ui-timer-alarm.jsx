import React from 'react';
import { createRoot } from 'react-dom/client';

const GET_WS = 'dialog_custom_ui/get_timer_alarm_config';
const SAVE_WS = 'dialog_custom_ui/save_timer_alarm_config';
const TICK_MS = 1000;
const QUICK_MINUTES = [5, 10, 15, 30, 60];

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
    this._root = null;
    this._hass = null;
    this._tab = 'timer';
    this._items = [];
    this._presets = [];
    this._selectedDevice = '';
    this._loading = false;
    this._saving = false;
    this._error = '';
    this._status = '';
    this._tick = null;
    this._poll = null;
  }

  set hass(v) {
    this._hass = v;
    if (!this._loading) {
      this._load();
    }
  }

  connectedCallback() {
    if (!this.shadowRoot.innerHTML) {
      this._render();
    }
    this._startLoops();
  }

  disconnectedCallback() {
    this._stopLoops();
    if (this._root) {
      this._root.unmount();
      this._root = null;
    }
  }

  async _load() {
    if (!this._hass || this._loading || this._saving) {
      return;
    }
    this._loading = true;
    try {
      const res = await this._hass.callWS({ type: GET_WS });
      const rawItems = Array.isArray(res?.items) ? res.items : [];
      this._items = rawItems.map((x) => (String(x?.type ?? '').toLowerCase() === 'timer' ? normalizeTimer(x) : normalizeAlarm(x)));
      this._presets = Array.isArray(res?.alarm_presets) ? res.alarm_presets.map((x) => String(x)) : [];
      this._status = res?.last_updated ? `Updated: ${res.last_updated}` : '';
      this._error = '';
    } catch (e) {
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
    this._tick = window.setInterval(() => this._render(), TICK_MS);
    this._poll = window.setInterval(() => this._load(), TICK_MS);
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
    if (timer.status === 'paused') {
      return Math.max(0, Number(timer.time.remaining_seconds) || 0);
    }
    const end = parseDate(timer.time.date_end);
    if (!end) {
      return Math.max(0, Number(timer.time.remaining_seconds) || 0);
    }
    return Math.max(0, Math.floor((end.getTime() - Date.now()) / 1000));
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
              <div class="meta">${esc(toDuration(left))} left</div>
            </div>
            <div class="actions">
              ${item.status === 'paused'
                ? `<button class="btn ghost" data-action="resume-timer" data-item-id="${esc(item.id)}">Resume</button>`
                : `<button class="btn ghost" data-action="pause-timer" data-item-id="${esc(item.id)}">Pause</button>`
              }
              <button class="btn danger" data-action="remove-item" data-item-id="${esc(item.id)}">Stop</button>
            </div>
          </div>
          <label>
            <span>Device</span>
            <select data-action="set-device" data-item-id="${esc(item.id)}">
              <option value="">Select media_player</option>
              ${this._devices().map((d) => `<option value="${esc(d.entity_id)}" ${item.deviceId === d.entity_id ? 'selected' : ''}>${esc(d.attributes.friendly_name || d.entity_id)}</option>`).join('')}
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
        ${this._presets.map((p) => `<button class="btn ghost" data-action="add-alarm-preset" data-preset="${esc(p)}">+ ${esc(p)}</button>`).join('')}
      </section>
      ${alarms.length ? alarms.map((item) => `
        <article class="card">
          <div class="head">
            <div>
              <div class="title">Alarm</div>
              <div class="meta">${esc(item.time.time)}</div>
            </div>
            <button class="btn danger" data-action="remove-item" data-item-id="${esc(item.id)}">Delete</button>
          </div>
          <div class="grid">
            <label>
              <span>Time</span>
              <input type="time" data-action="set-alarm-time" data-item-id="${esc(item.id)}" value="${esc(item.time.time)}" />
            </label>
            <label>
              <span>Status</span>
              <select data-action="set-alarm-status" data-item-id="${esc(item.id)}">
                <option value="on" ${item.status === 'on' ? 'selected' : ''}>on</option>
                <option value="off" ${item.status === 'off' ? 'selected' : ''}>off</option>
              </select>
            </label>
            <label class="full">
              <span>Device</span>
              <select data-action="set-device" data-item-id="${esc(item.id)}">
                <option value="">Select media_player</option>
                ${this._devices().map((d) => `<option value="${esc(d.entity_id)}" ${item.deviceId === d.entity_id ? 'selected' : ''}>${esc(d.attributes.friendly_name || d.entity_id)}</option>`).join('')}
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
    this.shadowRoot.querySelectorAll('[data-action="set-alarm-status"]').forEach((el) => {
      el.onchange = (e) => this._updateItem(String(el.dataset.itemId || ''), { status: String(e.currentTarget.value || 'on') });
    });
  }

  _render() {
    const body = this._tab === 'timer' ? this._renderTimers() : this._renderAlarms();
    const html = `
      <style>
        :host { display:block; font-family: "Segoe UI", sans-serif; color:#202533; }
        .panel { display:grid; gap:14px; }
        .toolbar, .tabs, .grid { display:flex; gap:10px; flex-wrap:wrap; }
        .tabs button { border:0; border-radius:999px; padding:8px 14px; cursor:pointer; background:#e8edf5; }
        .tabs button.active { background:#264b7f; color:#fff; }
        .card, .hero, .empty { background:#fff; border:1px solid #d9e1ef; border-radius:14px; padding:14px; }
        .head { display:flex; justify-content:space-between; gap:8px; align-items:flex-start; }
        .title { font-weight:700; font-size:18px; }
        .meta { color:#5d697f; margin-top:4px; }
        .btn { border:0; border-radius:999px; padding:8px 12px; cursor:pointer; }
        .btn.ghost { background:#e8edf5; color:#223a61; }
        .btn.danger { background:#b64a3a; color:#fff; }
        .status { padding:10px 12px; border-radius:10px; }
        .ok { background:#e8f5ea; color:#275f3d; }
        .err { background:#faecea; color:#842f23; }
        label { display:grid; gap:6px; margin-top:10px; }
        label span { font-size:12px; text-transform:uppercase; color:#2f4f7d; font-weight:600; }
        select, input { border:1px solid #cfd9e9; border-radius:10px; padding:8px 10px; }
        .preset-row { display:flex; gap:8px; flex-wrap:wrap; }
      </style>
      <div class="panel">
        <section class="hero">
          <div class="tabs">
            <button data-tab="timer" class="${this._tab === 'timer' ? 'active' : ''}">Timer</button>
            <button data-tab="alarm" class="${this._tab === 'alarm' ? 'active' : ''}">Alarm</button>
          </div>
          <div class="toolbar" style="margin-top:10px;">
            <select data-action="select-global-device">
              <option value="">Device for quick start</option>
              ${this._devices().map((d) => `<option value="${esc(d.entity_id)}">${esc(d.attributes.friendly_name || d.entity_id)}</option>`).join('')}
            </select>
            ${QUICK_MINUTES.map((m) => `<button class="btn ghost" data-action="quick-timer" data-minutes="${m}">+${m}m</button>`).join('')}
            <button class="btn ghost" data-action="add-alarm">+ alarm</button>
          </div>
          ${this._status ? `<div class="status ok" style="margin-top:10px;">${esc(this._status)}</div>` : ''}
          ${this._error ? `<div class="status err" style="margin-top:10px;">${esc(this._error)}</div>` : ''}
        </section>
        ${body}
      </div>
    `;
    if (!this._root) {
      this._root = createRoot(this.shadowRoot);
    }
    this._root.render(React.createElement('div', { dangerouslySetInnerHTML: { __html: html } }));
    this._bind();
  }
}

customElements.define('dialog-custom-ui-timer-alarm', TimerAlarmPanel);
