import React, {
  useEffect,
  useState,
} from "react";

import { DialogContext } from "./DialogContext";
import { DialogApi, type HassLike } from "../api/dialog-api";
import { createHass, normalizeHass } from "../hooks/hass";

interface Props {
  children: React.ReactNode;
  hass?: HassLike | null;
}

export function DialogProvider({
  children,
  hass,
}: Props) {
  const [api, setApi] =
    useState<DialogApi | null>(null);

  useEffect(() => {
    async function init() {
      const resolvedHass = hass ? normalizeHass(hass) : await createHass();

      setApi(new DialogApi(resolvedHass));
    }

    init().catch(console.error);
  }, [hass]);

  if (!api) {
    return <div>Connecting to Home Assistant...</div>;
  }

  return (
    <DialogContext.Provider value={api}>
      {children}
    </DialogContext.Provider>
  );
}