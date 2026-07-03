import { useEffect } from "react";
import React from "react";
import { HashRouter } from "react-router-dom";

import { App } from "./App";
import { DialogProvider } from "../context/DialogProvider";
import type { HassLike } from "../api/dialog-api";

interface Props {
  hass?: HassLike | null;
}

export function AppRoot({ hass }: Props) {
  useEffect(() => {
    const style = document.createElement("style");

    style.textContent = `
      /* === GLOBAL THEME FIX FOR HOME ASSISTANT DIALOGS === */

      ha-dialog {
        --mdc-theme-surface: #151518 !important;
        --ha-card-background: #151518 !important;
        --dialog-backdrop-opacity: 0.7;
      }

      ha-dialog::part(content),
      ha-dialog::part(container) {
        background: #151518 !important;
        color: #f3f4f6 !important;
      }

      /* fallback for older HA dialogs */
      mdc-dialog,
      mwc-dialog {
        --mdc-theme-surface: #151518 !important;
      }
    `;

    document.head.appendChild(style);
  }, []);

  return (
    <HashRouter>
      <DialogProvider hass={hass}>
        <App />
      </DialogProvider>
    </HashRouter>
  );
}