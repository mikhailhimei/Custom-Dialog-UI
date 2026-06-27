import React from "react";
import ReactDOM from "react-dom/client";

import { AppRoot } from "./app/AppRoot";
import type { HassLike } from "./api/dialog-api";

import "./styles/globals.scss";

const ELEMENT_NAME = "dialog-custom-ui-panel";

class DialogCustomUiPanel extends HTMLElement {
  private root?: ReactDOM.Root;
  private container?: HTMLDivElement;
  private shadow?: ShadowRoot;
  private hassValue?: HassLike | null;

  set hass(hass: HassLike | null | undefined) {
    this.hassValue = hass;
    this.render();
  }

  get hass() {
    return this.hassValue;
  }

  connectedCallback() {
    if (!this.shadow) {
      this.shadow = this.attachShadow({ mode: "open" });
      this.container = document.createElement("div");
      this.container.className = "dialog-custom-ui-root";
      this.shadow.appendChild(this.container);
    }

    this.loadStyles();
    this.render();
  }

  disconnectedCallback() {
    this.root?.unmount();
    this.root = undefined;
  }

  private loadStyles() {
    if (!this.shadow) {
      return;
    }

    // Load CSS inside this element's shadow root. Home Assistant renders
    // custom panels inside its own web components, so a document-level
    // stylesheet can be isolated away and leave the panel unstyled.
    const cssFileName = "dialog-custom-ui-panel.css";
    const moduleScriptName = "dialog-custom-ui-panel.js";
    const script = Array.from(document.getElementsByTagName("script")).find((s) => s.src && s.src.includes(moduleScriptName));
    const search = script && script.src ? new URL(script.src, window.location.href).search : "";
    const cssUrl = `/dialog_custom_ui_static/${cssFileName}${search}`;
    const expectedHref = new URL(cssUrl, window.location.href).href;

    const existingLink = this.shadow.querySelector<HTMLLinkElement>(`link[data-dialog-custom-ui-styles="true"]`);
    if (existingLink) {
      if (existingLink.href !== expectedHref) {
        existingLink.href = cssUrl;
      }
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssUrl;
    link.dataset.dialogCustomUiStyles = "true";
    this.shadow.prepend(link);
  }

  private render() {
    if (!this.isConnected) {
      return;
    }

    if (!this.container) {
      return;
    }

    if (!this.root) {
      this.root = ReactDOM.createRoot(this.container);
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
