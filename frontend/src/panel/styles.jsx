export const PANEL_STYLES = `
<style>
:host {
          --panel-bg: radial-gradient(circle at 16% 12%, #fff7ef 0%, #eef3ff 42%, #e8f2f8 100%);
          --card-bg: linear-gradient(175deg, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.86));
          --card-bg-soft: rgba(255, 255, 255, 0.8);
          --border: rgba(34, 45, 67, 0.16);
          --text: #1b2432;
          --muted: #5c667a;
          --accent: #a64b2a;
          --accent-2: #234f7d;
          --ring: rgba(35, 79, 125, 0.2);
          --elev-1: 0 12px 32px rgba(31, 41, 55, 0.1);
          --elev-2: 0 18px 40px rgba(31, 41, 55, 0.14);
          display: block;
          width: 100%;
          max-width: 100%;
          min-height: 100%;
          box-sizing: border-box;
          color: var(--text);
          background: var(--panel-bg);
          font-family: "Manrope", "Segoe UI", "Trebuchet MS", sans-serif;
          overflow-x: hidden;
        }
        :host([data-theme="dark"]) {
          --panel-bg: radial-gradient(circle at 16% 12%, #182033 0%, #121827 44%, #0f1728 100%);
          --card-bg: linear-gradient(175deg, rgba(19, 28, 44, 0.96), rgba(14, 22, 36, 0.92));
          --card-bg-soft: rgba(20, 30, 47, 0.84);
          --border: rgba(164, 180, 214, 0.24);
          --text: #ecf2ff;
          --muted: #b3c0da;
          --accent: #ff8a5a;
          --accent-2: #4f86d8;
          --ring: rgba(79, 134, 216, 0.26);
          --elev-1: 0 12px 32px rgba(1, 5, 14, 0.44);
          --elev-2: 0 18px 40px rgba(1, 5, 14, 0.54);
        }
        * {
          box-sizing: border-box;
          min-width: 0;
        }
        .page {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px;
          overflow-x: hidden;
        }
        .hero {
          display: grid;
          gap: 10px;
          margin-bottom: 20px;
        }
        .hero-card, .scenario-card, .help-card {
          background: var(--card-bg);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border);
          border-radius: 20px;
          box-shadow: var(--elev-1);
          animation: rise-in 220ms ease-out both;
        }
        .hero-card {
          padding: 24px;
        }
        .hero h1 {
          margin: 0;
          font-size: 34px;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }
        .hero p {
          margin: 0;
          color: var(--muted);
          max-width: 860px;
        }
        .tabs {
          display: flex;
          gap: 8px;
          width: 100%;
          flex-wrap: wrap;
          padding: 8px;
          border-radius: 999px;
          background: var(--card-bg-soft);
          border: 1px solid var(--border);
        }
        .tab-button {
          border: none;
          border-radius: 999px;
          padding: 10px 16px;
          font: inherit;
          cursor: pointer;
          background: transparent;
          color: var(--muted);
          transition: transform 0.14s ease, background 0.2s ease, color 0.2s ease;
        }
        .tab-button:hover {
          transform: translateY(-1px);
          background: rgba(34, 45, 67, 0.08);
          color: var(--text);
        }
        .tab-button.active {
          color: white;
          background: linear-gradient(135deg, var(--accent-2), #4c78a8);
          box-shadow: 0 10px 20px rgba(35, 79, 125, 0.28);
        }
        .panel-shell {
          display: grid;
          gap: 8px;
          width: 100%;
          padding: 10px;
          border-radius: 24px;
          background: var(--card-bg-soft);
          border: 1px solid var(--border);
          box-shadow: var(--elev-1);
        }
        .panel-shell .tabs {
          background: transparent;
          border: none;
          padding: 0;
          box-shadow: none;
        }
        .subtabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .yandex-tabs-toolbar {
          display: flex;
          gap: 10px;
          align-items: end;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }
        .yandex-scenario-select {
          display: grid;
          gap: 6px;
          flex: 1 1 320px;
          margin: 0;
        }
        .yandex-scenario-select span {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--muted);
          font-weight: 700;
        }
        .yandex-scenario-select select {
          width: 100%;
        }
        .yandex-subtabs-scroll {
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: thin;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 4px;
        }
        .yandex-subtabs-scroll .subtab-button {
          flex: 0 0 auto;
          white-space: nowrap;
        }
        .subtab-button {
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--card-bg-soft);
          color: var(--muted);
          padding: 10px 14px;
          cursor: pointer;
          transition: transform 0.14s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .subtab-button:hover {
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 8px 18px rgba(31, 41, 55, 0.12);
          color: var(--text);
        }
        .subtab-button.active {
          color: #fff;
          background: linear-gradient(135deg, var(--accent-2), #4c78a8);
          border-color: transparent;
          box-shadow: 0 10px 20px rgba(35, 79, 125, 0.3);
        }
        .command-list {
          display: grid;
          gap: 10px;
        }
        .command-item {
          display: grid;
          gap: 8px;
          width: 100%;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: var(--card-bg-soft);
          color: var(--text);
          padding: 14px;
          text-align: left;
          transition: transform 0.14s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .command-item:hover {
          transform: translateY(-1px);
          border-color: rgba(35, 79, 125, 0.34);
          box-shadow: 0 10px 20px rgba(31, 41, 55, 0.11);
        }
        .command-item-title {
          font-size: 16px;
          font-weight: 700;
        }
        .command-item-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          color: var(--muted);
          font-size: 13px;
        }
        .command-pagination {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 8px;
        }
        .command-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.5);
          z-index: 40;
        }
        .command-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(860px, calc(100vw - 32px));
          max-height: calc(100vh - 40px);
          overflow: auto;
          padding: 18px;
          border-radius: 20px;
          border: 1px solid var(--border);
          background: var(--card-bg);
          z-index: 41;
          display: grid;
          gap: 14px;
          box-shadow: var(--elev-2);
        }
        .command-modal-header,
        .command-modal-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .command-modal-header h2 {
          margin: 0;
          font-size: 24px;
        }
        .command-modal-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        textarea {
          width: 100%;
          max-width: 100%;
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 12px 14px;
          font: inherit;
          color: var(--text);
          background: var(--card-bg-soft);
          resize: vertical;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .checkbox-row {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          align-self: end;
        }
        .checkbox-row input {
          width: auto;
        }
        .config-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
          gap: 16px;
          margin-top: 20px;
          align-items: start;
        }
        .scenario-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          align-items: start;
        }
        .field-span-2 {
          grid-column: 1 / -1;
        }
        .field-narrow {
          max-width: 220px;
        }
        .field-grow {
          flex: 1 1 auto;
        }
        .field-placeholder {
          display: grid;
          gap: 8px;
          min-width: 0;
          align-content: start;
        }
        .scenario-type-field {
          display: grid;
          gap: 8px;
          min-width: 0;
          align-content: start;
        }
        .settings-accordion {
          margin-top: 20px;
          padding: 16px;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: var(--card-bg-soft);
          display: grid;
          gap: 14px;
        }
        .settings-accordion-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 0;
          border: none;
          background: transparent;
          color: inherit;
          text-align: left;
          font: inherit;
          cursor: pointer;
        }
        .settings-accordion-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 999px;
          background: rgba(35, 79, 125, 0.08);
          color: var(--accent-2);
          font-size: 18px;
          line-height: 1;
          flex: 0 0 auto;
        }
        .settings-accordion-body {
          display: grid;
          gap: 14px;
        }
        .settings-accordion-body.hidden {
          display: none;
        }
        .settings-accordion-note {
          margin: 0;
          color: var(--muted);
        }
        .device-list {
          display: grid;
          gap: 10px;
        }
        .device-row {
          display: flex;
          gap: 10px;
          align-items: end;
        }
        .device-remove-button {
          flex: 0 0 auto;
          align-self: end;
        }
        .conditions-block {
          display: grid;
          gap: 14px;
        }
        .conditions-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: start;
          gap: 12px;
          flex-wrap: wrap;
        }
        .conditions-list {
          display: grid;
          gap: 12px;
        }
        .condition-card {
          display: grid;
          gap: 12px;
          padding: 14px;
          border: 1px solid var(--border);
          border-radius: 16px;
          background: var(--card-bg-soft);
        }
        .condition-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 0;
          border: none;
          background: transparent;
          color: inherit;
          text-align: left;
        }
        .condition-heading {
          display: grid;
          gap: 4px;
          min-width: 0;
          flex: 1 1 auto;
        }
        .condition-header-side {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex: 0 0 auto;
        }
        .condition-preview {
          font-size: 13px;
          color: var(--muted);
          overflow-wrap: anywhere;
          word-break: break-word;
        }
        .condition-accordion-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 999px;
          background: rgba(35, 79, 125, 0.08);
          color: var(--accent-2);
          font-size: 18px;
          line-height: 1;
          flex: 0 0 auto;
        }
        .condition-actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .condition-body.hidden {
          display: none;
        }
        .condition-body.open {
          display: grid;
          gap: 12px;
        }
        .condition-title,
        .section-label {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-2);
        }
        .condition-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          align-items: start;
        }
        .field-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          flex-wrap: nowrap;
          min-height: 24px;
        }
        .field-title-row > span {
          min-width: 0;
        }
        .add-inline-button {
          justify-self: start;
          max-width: 100%;
          white-space: normal;
          word-break: break-word;
        }
        .remove-inline-button {
          padding: 6px 12px;
          font-size: 12px;
          line-height: 1.2;
        }
        label {
          display: grid;
          gap: 8px;
          min-width: 0;
        }
        label span {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-2);
        }
        .field-title-row > span {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-2);
        }
        input, select {
          width: 100%;
          max-width: 100%;
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 12px 14px;
          font: inherit;
          color: var(--text);
          background: var(--card-bg-soft);
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .switch-control {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 6px 0;
        }
        .switch-control input[type="checkbox"] {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }
        .switch-slider {
          position: relative;
          width: 54px;
          height: 30px;
          border-radius: 999px;
          background: rgba(34, 45, 67, 0.2);
          border: 1px solid rgba(34, 45, 67, 0.15);
          transition: background .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .switch-slider::after {
          content: "";
          position: absolute;
          top: 3px;
          left: 3px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 3px 8px rgba(15, 23, 42, 0.25);
          transition: transform .2s ease;
        }
        .switch-control input[type="checkbox"]:checked + .switch-slider {
          background: linear-gradient(135deg, var(--accent-2), #4c78a8);
          border-color: transparent;
          box-shadow: 0 8px 18px rgba(35,79,125,.28);
        }
        .switch-control input[type="checkbox"]:checked + .switch-slider::after {
          transform: translateX(24px);
        }
        .switch-label {
          font-weight: 600;
          color: var(--muted);
        }
        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color: rgba(35, 79, 125, 0.52);
          box-shadow: 0 0 0 3px var(--ring);
          background: #fff;
        }
        code, pre, small, .log-message, .scenario-title {
          overflow-wrap: anywhere;
          word-break: break-word;
        }
        small {
          color: var(--muted);
          line-height: 1.35;
        }
        .toolbar {
          margin-top: 18px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        button {
          border: none;
          border-radius: 999px;
          padding: 12px 18px;
          font: inherit;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }
        button:hover {
          transform: translateY(-1px);
        }
        button.primary {
          color: white;
          background: linear-gradient(135deg, var(--accent), #d4743d);
        }
        button.secondary {
          color: white;
          background: linear-gradient(135deg, var(--accent-2), #4c78a8);
        }
        button.compact-button {
          padding: 8px 14px;
          font-size: 13px;
        }
        button.ghost {
          background: rgba(34, 45, 67, 0.06);
          color: var(--text);
        }
        .scenario-toggle {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
          flex: 1 1 auto;
          padding: 0;
          background: transparent;
          color: var(--text);
          text-align: left;
        }
        .scenario-toggle-icon {
          width: 30px;
          height: 30px;
          border-radius: 999px;
          display: inline-grid;
          place-items: center;
          background: rgba(34, 45, 67, 0.08);
          font-size: 20px;
          line-height: 1;
          transform: translateY(-1px);
        }
        button:disabled {
          opacity: 0.5;
          cursor: progress;
          transform: none;
        }
        .status {
          margin-top: 12px;
          padding: 12px 14px;
          border-radius: 14px;
          font-size: 14px;
        }
        .status.error {
          background: rgba(180, 43, 43, 0.1);
          color: #8a2323;
        }
        .status.ok {
          background: rgba(35, 111, 73, 0.1);
          color: #155c3a;
        }
        .scenario-list {
          display: grid;
          gap: 16px;
          width: 100%;
        }
        .scenario-card {
          padding: 18px;
          width: 100%;
          max-width: 100%;
          transition: transform 0.16s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .scenario-card:hover {
          transform: translateY(-1px);
          border-color: rgba(35, 79, 125, 0.3);
          box-shadow: 0 12px 26px rgba(31, 41, 55, 0.12);
        }
        .scenario-header {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 0;
        }
        .scenario-card.expanded .scenario-header {
          margin-bottom: 16px;
        }
        .scenario-kicker {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--muted);
          margin-bottom: 4px;
        }
        .scenario-title {
          display: block;
          font-size: 20px;
          font-weight: 700;
        }
        .scenario-body.hidden {
          display: none;
        }
        .scenario-body.open {
          display: block;
        }
        .empty, .help-card {
          padding: 20px;
        }
        .help-card pre {
          margin: 10px 0 0;
          padding: 14px;
          max-width: 100%;
          overflow: auto;
          white-space: pre-wrap;
          border-radius: 14px;
          background: #17202b;
          color: #f5f7fb;
          font-size: 13px;
        }
        .help-card code {
          font-family: Consolas, monospace;
        }
        .logs-card {
          display: grid;
          gap: 12px;
        }
        .log-item {
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 14px;
          background: var(--card-bg-soft);
        }
        @keyframes rise-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .log-item.request { border-left: 4px solid #4c78a8; }
        .log-item.success { border-left: 4px solid #2f855a; }
        .log-item.error { border-left: 4px solid #c53030; }
        .log-item.match { border-left: 4px solid #805ad5; }
        .log-item.idle { border-left: 4px solid #718096; }
        .log-item.info { border-left: 4px solid #dd6b20; }
        .log-meta {
          display: flex;
          gap: 10px;
          margin-bottom: 6px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--muted);
        }
        .log-message {
          font-size: 14px;
          line-height: 1.4;
        }
        @media (max-width: 900px) {
          .scenario-grid,
          .condition-grid,
          .command-modal-grid {
            grid-template-columns: 1fr;
          }
          .field-span-2 {
            grid-column: auto;
          }
          .field-narrow {
            max-width: none;
          }
          .device-row {
            flex-direction: column;
            align-items: stretch;
          }
        }
        @media (max-width: 700px) {
          .command-modal {
            inset: 0;
            transform: none;
            width: 100vw;
            height: 100vh;
            max-height: none;
            border-radius: 0;
            border: none;
            padding: 16px;
          }
        }
        @media (max-width: 800px) {
          .page {
            padding: 16px;
          }
          .hero h1 {
            font-size: 28px;
          }
        }
        @media (max-width: 640px) {
          .page {
            padding: 10px;
          }
          .panel-shell {
            padding: 8px;
            border-radius: 16px;
          }
          .hero-card,
          .scenario-card,
          .help-card {
            border-radius: 14px;
          }
          .hero-card,
          .scenario-card,
          .empty,
          .help-card {
            padding: 14px;
          }
          .tabs {
            overflow-x: auto;
            flex-wrap: nowrap;
            scrollbar-width: thin;
          }
          .tab-button {
            flex: 0 0 auto;
            white-space: nowrap;
          }
          .toolbar {
            display: grid;
            grid-template-columns: 1fr;
          }
          .toolbar button {
            width: 100%;
          }
          .yandex-tabs-toolbar {
            display: grid;
            grid-template-columns: 1fr;
          }
          .yandex-tabs-toolbar .subtab-button {
            width: 100%;
          }
          .yandex-subtabs-scroll {
            display: flex;
            flex-wrap: nowrap;
          }
          .scenario-header,
          .condition-header {
            align-items: flex-start;
          }
          .scenario-header {
            flex-wrap: nowrap;
            gap: 8px;
          }
          .scenario-header .scenario-toggle {
            flex: 1 1 auto;
            min-width: 0;
          }
          .scenario-header [data-remove-id] {
            flex: 0 0 auto;
            white-space: nowrap;
            padding: 8px 10px;
            font-size: 12px;
          }
          .scenario-toggle > span:last-child {
            min-width: 0;
            display: block;
            width: 100%;
          }
          .scenario-toggle .scenario-title {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .condition-actions {
            width: 100%;
            justify-content: stretch;
          }
          .condition-actions button {
            flex: 1 1 auto;
          }
          .command-modal-header,
          .command-modal-footer {
            flex-direction: column;
            align-items: stretch;
          }
        }
        @media (max-width: 420px) {
          .hero h1 {
            font-size: 22px;
          }
          button,
          .tab-button {
            padding: 10px 12px;
            font-size: 14px;
          }
        }
</style>
`;
