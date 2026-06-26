import {
  createConnection,
  createLongLivedTokenAuth,
} from "home-assistant-js-websocket";

import type { HassLike } from "../api/dialog-api";

declare global {
  interface Window {
    hass: any;
  }
}

export function normalizeHass(hass: any): HassLike {
  if (hass?.connection?.sendMessagePromise) {
    return hass as HassLike;
  }

  if (typeof hass?.callWS === "function") {
    return {
      connection: {
        sendMessagePromise: (msg: any) => hass.callWS(msg),
      },
      states: hass.states ?? {},
    };
  }

  return {
    connection: {
      sendMessagePromise: async () => {
        throw new Error("Home Assistant websocket API is not available");
      },
    },
    states: {},
  };
}

export async function createHass(): Promise<HassLike> {
  const url = import.meta.env.VITE_HA_URL;
  const token = import.meta.env.VITE_HA_TOKEN;

  // Прод внутри Home Assistant
  if (!url) {
    return normalizeHass(window.hass);
  }

  // Локальная разработка
  const auth = createLongLivedTokenAuth(
    url,
    token
  );

  const connection = await createConnection({
    auth,
  });

  const states = await connection.sendMessagePromise<
    Record<string, any>
  >({
    type: "get_states",
  });

  return {
    connection,
    states,
  };
}