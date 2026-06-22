import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavigationTabs.module.scss";

const tabs = [
  {
    to: "/scripts",
    label: "Скрипты",
  },
  {
    to: "/commands/main",
    label: "Команды основные",
  },
  {
    to: "/commands/sub",
    label: "Команды второстепенные",
  },
  {
    to: "/commands/direct/main",
    label: "Команды прямые",
  },
  {
    to: "/commands/settings",
    label: "Команды настройки",
  },
  {
    to: "/timer",
    label: "Таймер",
  },
  {
    to: "/alarm",
    label: "Будильник",
  },
  {
    to: "/settings",
    label: "Настройки",
  },
];

export const NavigationTabs = () => {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) =>
            isActive
              ? `${styles.tab} ${styles.active}`
              : styles.tab
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
};
