import React, { useEffect, useState } from "react";

import { useDialogApi } from "../context/DialogContext";
import { AppRoutes } from "./routes";

type AppTheme = "dark" | "light";

const THEME_STORAGE_KEY = "dialog-custom-ui-theme";

const normalizeTheme = (theme?: string | null): AppTheme => (theme === "light" ? "light" : "dark");

const applyTheme = (theme: AppTheme) => {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem(THEME_STORAGE_KEY, theme);
};

export const App = () => {
  const api = useDialogApi();
  const [theme, setTheme] = useState<AppTheme>(() => normalizeTheme(localStorage.getItem(THEME_STORAGE_KEY)));

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    let mounted = true;

    api._getShort("get_settings")
      .then((response: any) => {
        if (!mounted) return;

        setTheme(normalizeTheme((response?.result ?? response)?.theme));
      })
      .catch(console.error);

    const handleThemeChange = (event: Event) => {
      setTheme(normalizeTheme((event as CustomEvent<string>).detail));
    };

    window.addEventListener("dialog-custom-ui-theme-change", handleThemeChange);

    return () => {
      mounted = false;
      window.removeEventListener("dialog-custom-ui-theme-change", handleThemeChange);
    };
  }, [api]);

  return (
    <div className="appShell" data-theme={theme}>
      <AppRoutes />
    </div>
  );
};
