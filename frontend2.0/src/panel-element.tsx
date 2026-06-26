import React from "react";
import ReactDOM from "react-dom/client";

import { AppRoot } from "./app/AppRoot";
import type { HassLike } from "./api/dialog-api";

import "./styles/globals.scss";

const ELEMENT_NAME = "dialog-custom-ui-panel";

class DialogCustomUiPanel extends HTMLElement {
  private root?: ReactDOM.Root;
  private hassValue?: HassLike | null;

  set hass(hass: HassLike | null | undefined) {
    this.hassValue = hass;
    this.render();
  }

  get hass() {
    return this.hassValue;
  }

  connectedCallback() {
    this.loadStyles();
    this.render();
  }

  disconnectedCallback() {
    this.root?.unmount();
    this.root = undefined;
  }

  private loadStyles() {
    // Load CSS from the static path registered by panel.py
    const cssFileName = 'dialog-custom-ui-panel.css';
    // Try to reuse the same version query parameter as the loaded module
    // (if present) to avoid stale cached CSS. We look for a script tag
    // that loads the panel JS and copy its search/query string.
    const moduleScriptName = 'dialog-custom-ui-panel.js';
    const script = Array.from(document.getElementsByTagName('script')).find((s) => s.src && s.src.includes(moduleScriptName));
    const search = script && script.src ? (new URL(script.src, window.location.href)).search : '';
    const cssUrl = `/dialog_custom_ui_static/${cssFileName}${search}`;

    if (!document.querySelector(`link[href*="${cssFileName}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssUrl;
      document.head.appendChild(link);
    }
  }

  private render() {
    if (!this.isConnected) {
      return;
    }

    if (!this.root) {
      this.root = ReactDOM.createRoot(this);
    }

    this.root.render(
      <React.StrictMode>
        <AppRoot hass={this.hassValue} />
      </React.StrictMode>,
    );
  }
}

if (!customElements.get(ELEMENT_NAME)) {
  customElements.define(ELEMENT_NAME, DialogCustomUiPanel);
}
