import React from "react";
import ReactDOM from "react-dom/client";

import { AppRoot } from "./app/AppRoot";
import type { HassLike } from "./api/dialog-api";

const ELEMENT_NAME = "dialog-custom-ui-panel";
const STYLE_ID = "dialog-custom-ui-style";

class DialogCustomUiPanel extends HTMLElement {
  private root?: ReactDOM.Root;
  private hassValue?: HassLike | null;
  private renderTimer?: number;

  private ensureShadowRoot(): ShadowRoot {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }
    return this.shadowRoot as ShadowRoot;
  }

  set hass(hass: HassLike | null | undefined) {
    this.hassValue = hass;

    if (this.renderTimer !== undefined) {
      return;
    }

    this.renderTimer = window.setTimeout(() => {
      this.renderTimer = undefined;
      this.render();
    }, 250);
  }

  get hass() {
    return this.hassValue;
  }

  connectedCallback() {
    this.ensureShadowRoot();
    void this.loadStyles();
    this.render();
  }

  disconnectedCallback() {
    if (this.renderTimer !== undefined) {
      window.clearTimeout(this.renderTimer);
      this.renderTimer = undefined;
    }

    this.root?.unmount();
    this.root = undefined;
  }

  private async loadStyles() {
    const cssFileName = "dialog-custom-ui-panel.css";
    const cssUrl = `/dialog_custom_ui_static/${cssFileName}?v=${Date.now()}`;
    const shadow = this.ensureShadowRoot();

    if (shadow.getElementById(STYLE_ID)) {
      return;
    }

    try {
      const response = await fetch(cssUrl, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Failed to load panel styles: ${response.status}`);
      }

      const css = await response.text();
      if (!css) {
        return;
      }

      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.setAttribute("data-dialog-ui", "true");
      style.textContent = css;
      shadow.appendChild(style);
      return;
    } catch (error) {
      console.warn(
        "[dialog_custom_ui] Failed to inject panel styles into shadow root, falling back to link element.",
        error
      );
    }

    let link = shadow.querySelector<HTMLLinkElement>(
      `link[data-dialog-ui="true"]`
    );

    if (!link) {
      link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssUrl;
      link.setAttribute("data-dialog-ui", "true");
      shadow.appendChild(link);
      return;
    }

    link.href = cssUrl;
  }

  private render() {
    if (!this.isConnected) return;

    const shadow = this.ensureShadowRoot();

    if (!this.root) {
      this.root = ReactDOM.createRoot(shadow);
    }

    this.root.render(
      <React.StrictMode>
        <AppRoot hass={this.hassValue} />
      </React.StrictMode>
    );
  }
}

if (!customElements.get(ELEMENT_NAME)) {
  customElements.define(ELEMENT_NAME, DialogCustomUiPanel);
}