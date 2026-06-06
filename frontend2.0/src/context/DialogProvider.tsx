import React, {
  useEffect,
  useState,
} from "react";

import { DialogContext } from "./DialogContext";
import { DialogApi } from "../api/dialog-api";
import { createHass } from "../hooks/hass";

interface Props {
  children: React.ReactNode;
}

export function DialogProvider({
  children,
}: Props) {
  const [api, setApi] =
    useState<DialogApi | null>(null);

  useEffect(() => {
    async function init() {
      const hass = await createHass();

      setApi(new DialogApi(hass));
    }

    init().catch(console.error);
  }, []);

  if (!api) {
    return <div>Connecting to Home Assistant...</div>;
  }

  return (
    <DialogContext.Provider value={api}>
      {children}
    </DialogContext.Provider>
  );
}