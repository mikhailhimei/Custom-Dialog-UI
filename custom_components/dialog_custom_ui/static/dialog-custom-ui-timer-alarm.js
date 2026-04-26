var g="dialog_custom_ui/get_timer_alarm_config",b="dialog_custom_ui/save_timer_alarm_config";var f=[5,10,15,30,60],m="media-source://media_source/local/timer_alarm/",v=["morning-meadow-birdsongs-looping_zyb7nhnu.mp3","gentle-chimes-soft-loop.mp3","sunrise-piano-calm-loop.mp3","digital-beep-short-loop.mp3","forest-rain-ambient-loop.mp3"],s=a=>String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),h=a=>crypto?.randomUUID?`${a}${crypto.randomUUID().slice(0,8)}`:`${a}${Date.now()}`,n=a=>String(a).padStart(2,"0"),y=a=>{let t=new Date(String(a??"").replace(" ","T"));return Number.isNaN(t.getTime())?null:t},c=a=>`${n(Math.floor(a/3600))}:${n(Math.floor(a%3600/60))}:${n(a%60)}`,w=a=>{let t=String(a??"").split(":").map(e=>Number(e));return t.some(Number.isNaN)?0:t.length===3?t[0]*3600+t[1]*60+t[2]:t.length===2?t[0]*60+t[1]:t.length===1?t[0]*60:0},u=a=>{let t=a?.time&&typeof a.time=="object"?a.time:{},e=Number(t.total_seconds)||w(t.count_timer)||1800;return{id:String(a?.id??h("ha_timer:")),type:"timer",status:String(a?.status??"on"),clientId:String(a?.clientId??a?.userId??""),userId:String(a?.userId??a?.clientId??""),deviceId:String(a?.deviceId??a?.device_id??""),time:{count_timer:String(t.count_timer??c(e)),date_end:String(t.date_end??""),timezone:String(t.timezone??""),remaining_seconds:Number(t.remaining_seconds)||0,total_seconds:e}}},_=a=>{let t=a?.time&&typeof a.time=="object"?a.time:{};return{id:String(a?.id??h("ha_alarm:")),type:"alarm",status:String(a?.status??"on"),clientId:String(a?.clientId??a?.userId??""),userId:String(a?.userId??a?.clientId??""),deviceId:String(a?.deviceId??a?.device_id??""),time:{time:String(t.time??"08:00")}}},p=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._hass=null,this._tab="timer",this._items=[],this._presets=[],this._deviceLabels={},this._selectedDevice="",this._defaultMediaContentId="",this._loading=!1,this._saving=!1,this._error="",this._status="",this._tick=null,this._poll=null,this._debugWsPayload=null,this._theme="light"}set hass(t){this._hass=t,this._loading||this._load()}set config(t){let e=t&&typeof t=="object"?t:{};this._theme=String(e.theme??"light").toLowerCase()==="dark"?"dark":"light",this.setAttribute("data-theme",this._theme),this._render()}connectedCallback(){this.setAttribute("data-theme",this._theme),this.shadowRoot.innerHTML||this._render(),this._startLoops()}disconnectedCallback(){this._stopLoops()}async _load(){if(!(!this._hass||this._loading||this._saving)){this._loading=!0;try{let t=await this._hass.callWS({type:g});this._debugWsPayload=t;let e=Array.isArray(t?.items)?t.items:[],i=Array.isArray(t?.active_items)?t.active_items:[],r=new Map;[...e,...i].forEach(o=>{if(!o||typeof o!="object")return;let d=String(o.id??"");d&&r.set(d,{...r.get(d)||{},...o})}),this._items=[...r.values()].map(o=>String(o?.type??"").toLowerCase()==="timer"?u(o):_(o)),this._presets=Array.isArray(t?.alarm_presets)?t.alarm_presets.map(o=>String(o)):[],this._deviceLabels=t?.device_labels&&typeof t.device_labels=="object"?t.device_labels:{},this._defaultMediaContentId=String(t?.default_media_content_id??this._defaultMediaContentId??"").trim(),this._status=t?.last_updated?`Updated: ${t.last_updated}`:"",this._error=""}catch(t){this._debugWsPayload={ws_error:String(t?.message||t||"unknown error")},this._error=t?.message||"Failed to load timer/alarm state."}finally{this._loading=!1,this._render()}}}async _save(){if(!(!this._hass||this._saving)){this._saving=!0,this._error="",this._status="",this._render();try{await this._hass.callWS({type:b,timer_alarm_items:this._items,timer_alarm_media_content_id:this._defaultMediaContentId}),await this._load()}catch(t){this._error=t?.message||"Failed to save.",this._render()}finally{this._saving=!1,this._render()}}}_startLoops(){this._stopLoops(),this._tick=window.setInterval(()=>this._refreshLiveFields(),1e3),this._poll=window.setInterval(()=>{this._isInteractiveControlFocused()||this._load()},3e3)}_stopLoops(){this._tick&&(window.clearInterval(this._tick),this._tick=null),this._poll&&(window.clearInterval(this._poll),this._poll=null)}_devices(){return this._hass?.states?Object.values(this._hass.states).filter(t=>t.entity_id.startsWith("media_player.")).sort((t,e)=>(t.attributes.friendly_name||t.entity_id).localeCompare(e.attributes.friendly_name||e.entity_id)):[]}_timerLeft(t){let e=Math.max(0,Number(t?.time?.remaining_seconds)||0);if(t.status==="paused"||e>0)return e;let i=y(t.time.date_end);return i?Math.max(0,Math.floor((i.getTime()-Date.now())/1e3)):e}_isInteractiveControlFocused(){let t=this.shadowRoot?.activeElement;if(!t)return!1;let e=String(t.tagName||"").toUpperCase();return e==="SELECT"||e==="INPUT"||e==="TEXTAREA"}_nowTimeLabel(){let t=new Date;return`${n(t.getHours())}:${n(t.getMinutes())}:${n(t.getSeconds())}`}_refreshLiveFields(){this.shadowRoot?.querySelectorAll("[data-timer-left-id]").forEach(t=>{let e=String(t.getAttribute("data-timer-left-id")||""),i=this._items.find(r=>r.type==="timer"&&r.id===e);i&&(t.textContent=`${c(this._timerLeft(i))} left`)}),this.shadowRoot?.querySelectorAll("[data-now-clock]").forEach(t=>{t.textContent=this._nowTimeLabel()})}_renderDeviceOptions(t,e="Select media_player"){let i=this._devices(),r=t&&i.some(l=>l.entity_id===t),o=String(this._deviceLabels?.[t]||"").trim(),d=r||!t?"":`<option value="${s(t)}" selected>${s(o||t)} (${s(t)})</option>`;return`
      <option value="">${s(e)}</option>
      ${d}
      ${i.map(l=>`<option value="${s(l.entity_id)}" ${t===l.entity_id?"selected":""}>${s(l.attributes.friendly_name||l.entity_id)}</option>`).join("")}
    `}_renderGlobalMediaOptions(t){let e=String(t??"").trim(),i=v.map(d=>`${m}${d}`);return`
      <option value="">Select track from timer_alarm folder</option>
      ${e&&i.includes(e)||!e?"":`<option value="${s(e)}" selected>${s(e.replace(m,""))}</option>`}
      ${i.map(d=>`
        <option value="${s(d)}" ${e===d?"selected":""}>
          ${s(d.replace(m,""))}
        </option>
      `).join("")}
    `}_addTimer(t){let e=Math.max(60,Number(t)*60||300),i=new Date(Date.now()+e*1e3),r=u({id:h("ha_timer:"),status:"on",deviceId:this._selectedDevice||this._devices()[0]?.entity_id||"",time:{count_timer:c(e),date_end:`${i.getFullYear()}-${n(i.getMonth()+1)}-${n(i.getDate())} ${n(i.getHours())}:${n(i.getMinutes())}:${n(i.getSeconds())}`,remaining_seconds:e,total_seconds:e}});this._items=[...this._items,r],this._save()}_addAlarm(t="08:00"){let e=_({id:h("ha_alarm:"),status:"on",deviceId:this._selectedDevice||this._devices()[0]?.entity_id||"",time:{time:t}});this._items=[...this._items,e],this._save()}_updateItem(t,e){this._items=this._items.map(i=>i.id===t?{...i,...e}:i),this._save()}_removeItem(t){this._items=this._items.filter(e=>e.id!==t),this._save()}_pauseTimer(t){this._items=this._items.map(e=>e.id!==t||e.type!=="timer"?e:{...e,status:"paused",time:{...e.time,remaining_seconds:this._timerLeft(e)}}),this._save()}_resumeTimer(t){this._items=this._items.map(e=>{if(e.id!==t||e.type!=="timer")return e;let i=Math.max(1,Number(e.time.remaining_seconds)||60),r=new Date(Date.now()+i*1e3);return{...e,status:"on",time:{...e.time,date_end:`${r.getFullYear()}-${n(r.getMonth()+1)}-${n(r.getDate())} ${n(r.getHours())}:${n(r.getMinutes())}:${n(r.getSeconds())}`,count_timer:c(Math.max(i,Number(e.time.total_seconds)||i))}}}),this._save()}_renderTimers(){let t=this._items.filter(e=>e.type==="timer");return t.length?t.map(e=>{let i=this._timerLeft(e);return`
        <article class="card">
          <div class="head">
            <div>
              <div class="title">Timer</div>
              <div class="meta" data-timer-left-id="${s(e.id)}">${s(c(i))} left</div>
              <div class="meta">Current time: <span data-now-clock>${s(this._nowTimeLabel())}</span></div>
            </div>
            <div class="actions">
              ${e.status==="paused"?`<button type="button" class="btn ghost" data-action="resume-timer" data-item-id="${s(e.id)}">Resume</button>`:`<button type="button" class="btn ghost" data-action="pause-timer" data-item-id="${s(e.id)}">Pause</button>`}
              <button type="button" class="btn danger" data-action="remove-item" data-item-id="${s(e.id)}">Stop</button>
            </div>
          </div>
          <label>
            <span>Device</span>
            <select data-action="set-device" data-item-id="${s(e.id)}">
              ${this._renderDeviceOptions(e.deviceId)}
            </select>
          </label>
        </article>
      `}).join(""):'<div class="empty">No timers yet.</div>'}_renderAlarms(){let t=this._items.filter(e=>e.type==="alarm");return`
      <section class="preset-row">
        ${this._presets.map(e=>`<button type="button" class="btn ghost" data-action="add-alarm-preset" data-preset="${s(e)}">+ ${s(e)}</button>`).join("")}
      </section>
      ${t.length?t.map(e=>`
        <article class="card">
          <div class="head">
            <div>
              <div class="title">Alarm</div>
              <div class="meta">${s(e.time.time)}</div>
              <div class="meta">Current time: <span data-now-clock>${s(this._nowTimeLabel())}</span></div>
            </div>
            <button type="button" class="btn danger" data-action="remove-item" data-item-id="${s(e.id)}">Delete</button>
          </div>
          <div class="alarm-grid">
            <label>
              <span>Time</span>
              <input type="time" data-action="set-alarm-time" data-item-id="${s(e.id)}" value="${s(e.time.time)}" />
            </label>
            <div>
              <span>Status</span>
              <label class="switch-control">
                <input type="checkbox" data-action="set-alarm-enabled" data-item-id="${s(e.id)}" ${e.status!=="off"?"checked":""} />
                <span class="switch-slider" aria-hidden="true"></span>
                <span class="switch-label">${e.status!=="off"?"on":"off"}</span>
              </label>
            </div>
            <label class="full">
              <span>Device</span>
              <select data-action="set-device" data-item-id="${s(e.id)}">
                ${this._renderDeviceOptions(e.deviceId)}
              </select>
            </label>
          </div>
        </article>
      `).join(""):'<div class="empty">No alarms yet.</div>'}
    `}_bind(){this.shadowRoot.querySelectorAll("[data-tab]").forEach(t=>{t.onclick=()=>{this._tab=t.dataset.tab,this._render()}}),this.shadowRoot.querySelectorAll('[data-action="quick-timer"]').forEach(t=>{t.onclick=()=>this._addTimer(Number(t.dataset.minutes)||5)}),this.shadowRoot.querySelector('[data-action="add-alarm"]')?.addEventListener("click",()=>this._addAlarm("08:00")),this.shadowRoot.querySelectorAll('[data-action="add-alarm-preset"]').forEach(t=>{t.onclick=()=>this._addAlarm(String(t.dataset.preset||"08:00"))}),this.shadowRoot.querySelector('[data-action="select-global-device"]')?.addEventListener("change",t=>{this._selectedDevice=String(t.currentTarget.value||"")}),this.shadowRoot.querySelector('[data-action="set-global-media"]')?.addEventListener("change",t=>{this._defaultMediaContentId=String(t.currentTarget.value||"").trim(),this._save()}),this.shadowRoot.querySelectorAll('[data-action="remove-item"]').forEach(t=>{t.onclick=()=>this._removeItem(String(t.dataset.itemId||""))}),this.shadowRoot.querySelectorAll('[data-action="pause-timer"]').forEach(t=>{t.onclick=()=>this._pauseTimer(String(t.dataset.itemId||""))}),this.shadowRoot.querySelectorAll('[data-action="resume-timer"]').forEach(t=>{t.onclick=()=>this._resumeTimer(String(t.dataset.itemId||""))}),this.shadowRoot.querySelectorAll('[data-action="set-device"]').forEach(t=>{t.onchange=e=>this._updateItem(String(t.dataset.itemId||""),{deviceId:String(e.currentTarget.value||"")})}),this.shadowRoot.querySelectorAll('[data-action="set-alarm-time"]').forEach(t=>{t.onchange=e=>{let i=String(e.currentTarget.value||"08:00"),r=String(t.dataset.itemId||"");this._items=this._items.map(o=>o.id===r?{...o,time:{...o.time,time:i}}:o),this._save()}}),this.shadowRoot.querySelectorAll('[data-action="set-alarm-enabled"]').forEach(t=>{t.onchange=e=>this._updateItem(String(t.dataset.itemId||""),{status:e.currentTarget.checked?"on":"off"})})}_render(){let t=this._tab==="timer"?this._renderTimers():this._renderAlarms(),e=this._tab==="timer"?`<div class="quick-actions-row">${f.map(o=>`<button type="button" class="btn ghost quick-btn" data-action="quick-timer" data-minutes="${o}">+${o}m</button>`).join("")}</div>`:"",i=this._tab==="alarm"?'<div class="quick-actions-row"><button type="button" class="btn ghost quick-btn" data-action="add-alarm">+ alarm</button></div>':"",r=`
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
        }
        .panel { display:grid; gap:14px; }
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
        .title { font-weight:700; font-size:18px; }
        .meta { color:var(--ta-muted); margin-top:4px; }
        .btn { border:0; border-radius:999px; padding:8px 12px; cursor:pointer; }
        .btn.ghost { background:var(--ta-bg-soft); color:var(--ta-accent); }
        .btn.danger { background:#b64a3a; color:#fff; }
        .status { padding:10px 12px; border-radius:10px; }
        .ok { background:rgba(35, 111, 73, 0.12); color:#275f3d; }
        .err { background:rgba(180, 43, 43, 0.12); color:#842f23; }
        :host([data-theme="dark"]) .ok { color:#92f0bd; }
        :host([data-theme="dark"]) .err { color:#ffb0a9; }
        label { display:grid; gap:6px; margin-top:10px; }
        label span { font-size:12px; text-transform:uppercase; color:var(--ta-accent); font-weight:700; letter-spacing:0.08em; }
        select, input { border:1px solid var(--ta-border); border-radius:10px; padding:10px 12px; background:var(--ta-bg-soft); color: var(--ta-text); }
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
        @media (max-width: 760px) {
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
            grid-template-columns: repeat(2, minmax(0, 1fr));
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
            <button type="button" data-tab="timer" class="${this._tab==="timer"?"active":""}">Timer</button>
            <button type="button" data-tab="alarm" class="${this._tab==="alarm"?"active":""}">Alarm</button>
          </div>
          <div class="meta" style="margin-top:8px;">Current time: <span data-now-clock>${s(this._nowTimeLabel())}</span></div>
          <div class="toolbar" style="margin-top:10px;">
            <select data-action="select-global-device">
              ${this._renderDeviceOptions(this._selectedDevice,"Device for quick start")}
            </select>
            ${e}
            ${i}
          </div>
          <label class="media-field">
            <span>Global music (folder: local/timer_alarm)</span>
            <select data-action="set-global-media">
              ${this._renderGlobalMediaOptions(this._defaultMediaContentId)}
            </select>
          </label>
          ${this._status?`<div class="status ok" style="margin-top:10px;">${s(this._status)}</div>`:""}
          ${this._error?`<div class="status err" style="margin-top:10px;">${s(this._error)}</div>`:""}
          <details style="margin-top:10px;">
            <summary>Debug WS</summary>
            <div style="margin-top:8px; font-size:12px; color:var(--ta-muted);">
              items: ${Array.isArray(this._debugWsPayload?.items)?this._debugWsPayload.items.length:0},
              active_items: ${Array.isArray(this._debugWsPayload?.active_items)?this._debugWsPayload.active_items.length:0},
              alarm_presets: ${Array.isArray(this._debugWsPayload?.alarm_presets)?this._debugWsPayload.alarm_presets.length:0}
            </div>
            <pre style="margin-top:8px; max-height:220px; overflow:auto; background:var(--ta-bg-soft); border:1px solid var(--ta-border); border-radius:8px; padding:8px;">${s(JSON.stringify(this._debugWsPayload??{},null,2))}</pre>
          </details>
        </section>
        ${t}
      </div>
    `;this.shadowRoot.innerHTML=r,this._bind(),this._refreshLiveFields()}};customElements.get("dialog-custom-ui-timer-alarm")||customElements.define("dialog-custom-ui-timer-alarm",p);
