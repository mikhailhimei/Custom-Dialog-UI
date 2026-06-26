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
    // Load CSS from the same path as the JS module
    const cssPath = import.meta.url.replace(".js", ".css");
    if (!document.querySelector(`link[href="${cssPath}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssPath;
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
