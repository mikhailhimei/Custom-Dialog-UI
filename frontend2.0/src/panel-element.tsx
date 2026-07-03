import React from "react";
import ReactDOM from "react-dom/client";

import { AppRoot } from "./app/AppRoot";
import type { HassLike } from "./api/dialog-api";

import "./styles/globals.css";

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
    this.injectStyles();
    this.render();
  }

  disconnectedCallback() {
    this.root?.unmount();
    this.root = undefined;
  }

  /**
   * 🔥 ВАЖНО: теперь мы НЕ используем <link>
   */
  private injectStyles() {
  const STYLE_ID = "dialog-custom-ui-style";

  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement("style");
  style.id = STYLE_ID;

  // ⚠️ берем уже СКОМПИЛЕННЫЙ CSS из document
  const css = Array.from(document.styleSheets)
    .map((s) => {
      try {
        return Array.from(s.cssRules || [])
          .map((r) => r.cssText)
          .join("\n");
      } catch {
        return "";
      }
    })
    .join("\n");

  style.textContent = css;

  document.head.appendChild(style);
}

  private render() {
    if (!this.isConnected) return;

    if (!this.root) {
      this.root = ReactDOM.createRoot(this);
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