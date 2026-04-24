var _="dialog_custom_ui/get_timer_alarm_config",g="dialog_custom_ui/save_timer_alarm_config";var b=[5,10,15,30,60],i=s=>String(s??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),h=s=>crypto?.randomUUID?`${s}${crypto.randomUUID().slice(0,8)}`:`${s}${Date.now()}`,n=s=>String(s).padStart(2,"0"),f=s=>{let t=new Date(String(s??"").replace(" ","T"));return Number.isNaN(t.getTime())?null:t},c=s=>`${n(Math.floor(s/3600))}:${n(Math.floor(s%3600/60))}:${n(s%60)}`,v=s=>{let t=String(s??"").split(":").map(e=>Number(e));return t.some(Number.isNaN)?0:t.length===3?t[0]*3600+t[1]*60+t[2]:t.length===2?t[0]*60+t[1]:t.length===1?t[0]*60:0},m=s=>{let t=s?.time&&typeof s.time=="object"?s.time:{},e=Number(t.total_seconds)||v(t.count_timer)||1800;return{id:String(s?.id??h("ha_timer:")),type:"timer",status:String(s?.status??"on"),clientId:String(s?.clientId??s?.userId??""),userId:String(s?.userId??s?.clientId??""),deviceId:String(s?.deviceId??s?.device_id??""),time:{count_timer:String(t.count_timer??c(e)),date_end:String(t.date_end??""),timezone:String(t.timezone??""),remaining_seconds:Number(t.remaining_seconds)||0,total_seconds:e}}},p=s=>{let t=s?.time&&typeof s.time=="object"?s.time:{};return{id:String(s?.id??h("ha_alarm:")),type:"alarm",status:String(s?.status??"on"),clientId:String(s?.clientId??s?.userId??""),userId:String(s?.userId??s?.clientId??""),deviceId:String(s?.deviceId??s?.device_id??""),time:{time:String(t.time??"08:00")}}},u=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._hass=null,this._tab="timer",this._items=[],this._presets=[],this._deviceLabels={},this._selectedDevice="",this._loading=!1,this._saving=!1,this._error="",this._status="",this._tick=null,this._poll=null,this._debugWsPayload=null}set hass(t){this._hass=t,this._loading||this._load()}connectedCallback(){this.shadowRoot.innerHTML||this._render(),this._startLoops()}disconnectedCallback(){this._stopLoops()}async _load(){if(!(!this._hass||this._loading||this._saving)){this._loading=!0;try{let t=await this._hass.callWS({type:_});this._debugWsPayload=t;let e=Array.isArray(t?.items)?t.items:[],a=Array.isArray(t?.active_items)?t.active_items:[],r=new Map;[...e,...a].forEach(o=>{if(!o||typeof o!="object")return;let l=String(o.id??"");l&&r.set(l,{...r.get(l)||{},...o})}),this._items=[...r.values()].map(o=>String(o?.type??"").toLowerCase()==="timer"?m(o):p(o)),this._presets=Array.isArray(t?.alarm_presets)?t.alarm_presets.map(o=>String(o)):[],this._deviceLabels=t?.device_labels&&typeof t.device_labels=="object"?t.device_labels:{},this._status=t?.last_updated?`Updated: ${t.last_updated}`:"",this._error=""}catch(t){this._debugWsPayload={ws_error:String(t?.message||t||"unknown error")},this._error=t?.message||"Failed to load timer/alarm state."}finally{this._loading=!1,this._render()}}}async _save(){if(!(!this._hass||this._saving)){this._saving=!0,this._error="",this._status="",this._render();try{await this._hass.callWS({type:g,timer_alarm_items:this._items}),await this._load()}catch(t){this._error=t?.message||"Failed to save.",this._render()}finally{this._saving=!1,this._render()}}}_startLoops(){this._stopLoops(),this._tick=window.setInterval(()=>this._refreshLiveFields(),1e3),this._poll=window.setInterval(()=>{this._isInteractiveControlFocused()||this._load()},3e3)}_stopLoops(){this._tick&&(window.clearInterval(this._tick),this._tick=null),this._poll&&(window.clearInterval(this._poll),this._poll=null)}_devices(){return this._hass?.states?Object.values(this._hass.states).filter(t=>t.entity_id.startsWith("media_player.")).sort((t,e)=>(t.attributes.friendly_name||t.entity_id).localeCompare(e.attributes.friendly_name||e.entity_id)):[]}_timerLeft(t){let e=Math.max(0,Number(t?.time?.remaining_seconds)||0);if(t.status==="paused"||e>0)return e;let a=f(t.time.date_end);return a?Math.max(0,Math.floor((a.getTime()-Date.now())/1e3)):e}_isInteractiveControlFocused(){let t=this.shadowRoot?.activeElement;if(!t)return!1;let e=String(t.tagName||"").toUpperCase();return e==="SELECT"||e==="INPUT"||e==="TEXTAREA"}_nowTimeLabel(){let t=new Date;return`${n(t.getHours())}:${n(t.getMinutes())}:${n(t.getSeconds())}`}_refreshLiveFields(){this.shadowRoot?.querySelectorAll("[data-timer-left-id]").forEach(t=>{let e=String(t.getAttribute("data-timer-left-id")||""),a=this._items.find(r=>r.type==="timer"&&r.id===e);a&&(t.textContent=`${c(this._timerLeft(a))} left`)}),this.shadowRoot?.querySelectorAll("[data-now-clock]").forEach(t=>{t.textContent=this._nowTimeLabel()})}_renderDeviceOptions(t,e="Select media_player"){let a=this._devices(),r=t&&a.some(d=>d.entity_id===t),o=String(this._deviceLabels?.[t]||"").trim(),l=r||!t?"":`<option value="${i(t)}" selected>${i(o||t)} (${i(t)})</option>`;return`
      <option value="">${i(e)}</option>
      ${l}
      ${a.map(d=>`<option value="${i(d.entity_id)}" ${t===d.entity_id?"selected":""}>${i(d.attributes.friendly_name||d.entity_id)}</option>`).join("")}
    `}_addTimer(t){let e=Math.max(60,Number(t)*60||300),a=new Date(Date.now()+e*1e3),r=m({id:h("ha_timer:"),status:"on",deviceId:this._selectedDevice||this._devices()[0]?.entity_id||"",time:{count_timer:c(e),date_end:`${a.getFullYear()}-${n(a.getMonth()+1)}-${n(a.getDate())} ${n(a.getHours())}:${n(a.getMinutes())}:${n(a.getSeconds())}`,remaining_seconds:e,total_seconds:e}});this._items=[...this._items,r],this._save()}_addAlarm(t="08:00"){let e=p({id:h("ha_alarm:"),status:"on",deviceId:this._selectedDevice||this._devices()[0]?.entity_id||"",time:{time:t}});this._items=[...this._items,e],this._save()}_updateItem(t,e){this._items=this._items.map(a=>a.id===t?{...a,...e}:a),this._save()}_removeItem(t){this._items=this._items.filter(e=>e.id!==t),this._save()}_pauseTimer(t){this._items=this._items.map(e=>e.id!==t||e.type!=="timer"?e:{...e,status:"paused",time:{...e.time,remaining_seconds:this._timerLeft(e)}}),this._save()}_resumeTimer(t){this._items=this._items.map(e=>{if(e.id!==t||e.type!=="timer")return e;let a=Math.max(1,Number(e.time.remaining_seconds)||60),r=new Date(Date.now()+a*1e3);return{...e,status:"on",time:{...e.time,date_end:`${r.getFullYear()}-${n(r.getMonth()+1)}-${n(r.getDate())} ${n(r.getHours())}:${n(r.getMinutes())}:${n(r.getSeconds())}`,count_timer:c(Math.max(a,Number(e.time.total_seconds)||a))}}}),this._save()}_renderTimers(){let t=this._items.filter(e=>e.type==="timer");return t.length?t.map(e=>{let a=this._timerLeft(e);return`
        <article class="card">
          <div class="head">
            <div>
              <div class="title">Timer</div>
              <div class="meta" data-timer-left-id="${i(e.id)}">${i(c(a))} left</div>
              <div class="meta">\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F: <span data-now-clock>${i(this._nowTimeLabel())}</span></div>
            </div>
            <div class="actions">
              ${e.status==="paused"?`<button type="button" class="btn ghost" data-action="resume-timer" data-item-id="${i(e.id)}">Resume</button>`:`<button type="button" class="btn ghost" data-action="pause-timer" data-item-id="${i(e.id)}">Pause</button>`}
              <button type="button" class="btn danger" data-action="remove-item" data-item-id="${i(e.id)}">Stop</button>
            </div>
          </div>
          <label>
            <span>Device</span>
            <select data-action="set-device" data-item-id="${i(e.id)}">
              ${this._renderDeviceOptions(e.deviceId)}
            </select>
          </label>
        </article>
      `}).join(""):'<div class="empty">No timers yet.</div>'}_renderAlarms(){let t=this._items.filter(e=>e.type==="alarm");return`
      <section class="preset-row">
        ${this._presets.map(e=>`<button type="button" class="btn ghost" data-action="add-alarm-preset" data-preset="${i(e)}">+ ${i(e)}</button>`).join("")}
      </section>
      ${t.length?t.map(e=>`
        <article class="card">
          <div class="head">
            <div>
              <div class="title">Alarm</div>
              <div class="meta">${i(e.time.time)}</div>
              <div class="meta">\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F: <span data-now-clock>${i(this._nowTimeLabel())}</span></div>
            </div>
            <button type="button" class="btn danger" data-action="remove-item" data-item-id="${i(e.id)}">Delete</button>
          </div>
          <div class="grid">
            <label>
              <span>Time</span>
              <input type="time" data-action="set-alarm-time" data-item-id="${i(e.id)}" value="${i(e.time.time)}" />
            </label>
            <div>
              <span>Status</span>
              <label class="switch-control">
                <input type="checkbox" data-action="set-alarm-enabled" data-item-id="${i(e.id)}" ${e.status!=="off"?"checked":""} />
                <span class="switch-slider" aria-hidden="true"></span>
                <span class="switch-label">${e.status!=="off"?"on":"off"}</span>
              </label>
            </div>
            <label class="full">
              <span>Device</span>
              <select data-action="set-device" data-item-id="${i(e.id)}">
                ${this._renderDeviceOptions(e.deviceId)}
              </select>
            </label>
          </div>
        </article>
      `).join(""):'<div class="empty">No alarms yet.</div>'}
    `}_bind(){this.shadowRoot.querySelectorAll("[data-tab]").forEach(t=>{t.onclick=()=>{this._tab=t.dataset.tab,this._render()}}),this.shadowRoot.querySelectorAll('[data-action="quick-timer"]').forEach(t=>{t.onclick=()=>this._addTimer(Number(t.dataset.minutes)||5)}),this.shadowRoot.querySelector('[data-action="add-alarm"]')?.addEventListener("click",()=>this._addAlarm("08:00")),this.shadowRoot.querySelectorAll('[data-action="add-alarm-preset"]').forEach(t=>{t.onclick=()=>this._addAlarm(String(t.dataset.preset||"08:00"))}),this.shadowRoot.querySelector('[data-action="select-global-device"]')?.addEventListener("change",t=>{this._selectedDevice=String(t.currentTarget.value||"")}),this.shadowRoot.querySelectorAll('[data-action="remove-item"]').forEach(t=>{t.onclick=()=>this._removeItem(String(t.dataset.itemId||""))}),this.shadowRoot.querySelectorAll('[data-action="pause-timer"]').forEach(t=>{t.onclick=()=>this._pauseTimer(String(t.dataset.itemId||""))}),this.shadowRoot.querySelectorAll('[data-action="resume-timer"]').forEach(t=>{t.onclick=()=>this._resumeTimer(String(t.dataset.itemId||""))}),this.shadowRoot.querySelectorAll('[data-action="set-device"]').forEach(t=>{t.onchange=e=>this._updateItem(String(t.dataset.itemId||""),{deviceId:String(e.currentTarget.value||"")})}),this.shadowRoot.querySelectorAll('[data-action="set-alarm-time"]').forEach(t=>{t.onchange=e=>{let a=String(e.currentTarget.value||"08:00"),r=String(t.dataset.itemId||"");this._items=this._items.map(o=>o.id===r?{...o,time:{...o.time,time:a}}:o),this._save()}}),this.shadowRoot.querySelectorAll('[data-action="set-alarm-enabled"]').forEach(t=>{t.onchange=e=>this._updateItem(String(t.dataset.itemId||""),{status:e.currentTarget.checked?"on":"off"})})}_render(){let t=this._tab==="timer"?this._renderTimers():this._renderAlarms(),e=`
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
        .switch-control { margin-top:0; display:inline-flex; align-items:center; gap:8px; }
        .switch-control input[type="checkbox"] { position:absolute; opacity:0; pointer-events:none; }
        .switch-slider { width:44px; height:24px; background:#ccd7ea; border-radius:999px; position:relative; transition:background .2s ease; }
        .switch-slider::after { content:""; position:absolute; top:3px; left:3px; width:18px; height:18px; background:#fff; border-radius:50%; transition:transform .2s ease; }
        .switch-control input[type="checkbox"]:checked + .switch-slider { background:#2c5b9b; }
        .switch-control input[type="checkbox"]:checked + .switch-slider::after { transform:translateX(20px); }
        .switch-label { font-size:13px; text-transform:none; color:#1f3457; font-weight:600; }
      </style>
      <div class="panel">
        <section class="hero">
          <div class="tabs">
            <button type="button" data-tab="timer" class="${this._tab==="timer"?"active":""}">Timer</button>
            <button type="button" data-tab="alarm" class="${this._tab==="alarm"?"active":""}">Alarm</button>
          </div>
          <div class="meta" style="margin-top:8px;">\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F: <span data-now-clock>${i(this._nowTimeLabel())}</span></div>
          <div class="toolbar" style="margin-top:10px;">
            <select data-action="select-global-device">
              ${this._renderDeviceOptions(this._selectedDevice,"Device for quick start")}
            </select>
            ${b.map(a=>`<button type="button" class="btn ghost" data-action="quick-timer" data-minutes="${a}">+${a}m</button>`).join("")}
            <button type="button" class="btn ghost" data-action="add-alarm">+ alarm</button>
          </div>
          ${this._status?`<div class="status ok" style="margin-top:10px;">${i(this._status)}</div>`:""}
          ${this._error?`<div class="status err" style="margin-top:10px;">${i(this._error)}</div>`:""}
          <details style="margin-top:10px;">
            <summary>Debug WS</summary>
            <div style="margin-top:8px; font-size:12px; color:#40516f;">
              items: ${Array.isArray(this._debugWsPayload?.items)?this._debugWsPayload.items.length:0},
              active_items: ${Array.isArray(this._debugWsPayload?.active_items)?this._debugWsPayload.active_items.length:0},
              alarm_presets: ${Array.isArray(this._debugWsPayload?.alarm_presets)?this._debugWsPayload.alarm_presets.length:0}
            </div>
            <pre style="margin-top:8px; max-height:220px; overflow:auto; background:#f7f9fd; border:1px solid #d9e1ef; border-radius:8px; padding:8px;">${i(JSON.stringify(this._debugWsPayload??{},null,2))}</pre>
          </details>
        </section>
        ${t}
      </div>
    `;this.shadowRoot.innerHTML=e,this._bind(),this._refreshLiveFields()}};customElements.get("dialog-custom-ui-timer-alarm")||customElements.define("dialog-custom-ui-timer-alarm",u);
