import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import { DialogContext } from "./DialogContext";
import { DialogApi, type HassLike } from "../api/dialog-api";
import { createHass, normalizeHass } from "../hooks/hass";
import { Loader } from "../components/ui/Loader";

interface Props {
  children: React.ReactNode;
  hass?: HassLike | null;
}

export function DialogProvider({
  children,
  hass,
}: Props) {
  const apiRef = useRef<DialogApi | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function init() {
      const resolvedHass = hass
        ? normalizeHass(hass)
        : await createHass();

      if (!apiRef.current) {
        apiRef.current = new DialogApi(resolvedHass);
      } else {
        apiRef.current.setHass(resolvedHass);
      }

      setReady(true);
    }

    init().catch(console.error);
  }, [hass]);

  if (!ready || !apiRef.current) {
    return <Loader label="Подключение к Home Assistant..." fullscreen />;
  }

  return (
    <DialogContext.Provider value={apiRef.current}>
      {children}
    </DialogContext.Provider>
  );
}