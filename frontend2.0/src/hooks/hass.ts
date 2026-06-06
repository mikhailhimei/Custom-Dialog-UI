import {
  createConnection,
  createLongLivedTokenAuth,
} from "home-assistant-js-websocket";

import type { HassLike } from "../api/dialog-api";

declare global {
  interface Window {
    hass: HassLike;
  }
}

export async function createHass(): Promise<HassLike> {
  const url = import.meta.env.VITE_HA_URL;
  const token = import.meta.env.VITE_HA_TOKEN;

  // Прод внутри Home Assistant
  if (!url) {
    return window.hass;
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