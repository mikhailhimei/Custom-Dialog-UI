import React from "react"
import { NavLink } from "react-router-dom";

import styles from "./NavigationTabs.module.scss";

const tabs = [
  {
    to: "/scripts",
    label: "Скрипты",
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
  <NavLink
    to="/scripts"
    className={({ isActive }) =>
      isActive ? `${styles.tab} ${styles.active}` : styles.tab
    }
  >
    Скрипты
  </NavLink>

  <div className={styles.dropdown}>
    <NavLink
      to="/commands/main"
      className={({ isActive }) =>
        isActive ? `${styles.tab} ${styles.active}` : styles.tab
      }
    >
      Команды
    </NavLink>

    <div className={styles.menu}>
      <NavLink
        to="/commands/main"
        className={({ isActive }) =>
          isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
        }
      >
        Основные
      </NavLink>

      <NavLink
        to="/commands/sub"
        className={({ isActive }) =>
          isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
        }
      >
        Второстепенные
      </NavLink>

      <NavLink
        to="/commands/direct/main"
        className={({ isActive }) =>
          isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
        }
      >
        Прямые
      </NavLink>

      <NavLink
        to="/commands/settings"
        className={({ isActive }) =>
          isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
        }
      >
        Настройки
      </NavLink>
    </div>
  </div>

  <NavLink
    to="/timer"
    className={({ isActive }) =>
      isActive ? `${styles.tab} ${styles.active}` : styles.tab
    }
  >
    Таймер
  </NavLink>

  <NavLink
    to="/alarm"
    className={({ isActive }) =>
      isActive ? `${styles.tab} ${styles.active}` : styles.tab
    }
  >
    Будильник
  </NavLink>

  <NavLink
    to="/settings"
    className={({ isActive }) =>
      isActive ? `${styles.tab} ${styles.active}` : styles.tab
    }
  >
    Настройки
  </NavLink>
</div>
  );
};