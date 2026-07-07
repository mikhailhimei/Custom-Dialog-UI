import React from "react"
import { NavLink } from "react-router-dom";
import { useIsMobile } from "../../hooks/useIsMobile";
import {
  FileCode2,
  Command,
  Timer,
  AlarmClock,
  Settings
} from "lucide-react";

import styles from "./NavigationTabs.module.scss";

export const NavigationTabs = () => {
  const isMobile = useIsMobile()

  if (isMobile) return

  return (
    <div className={styles.tabs}>
      <NavLink
        to="/scripts"
        className={({ isActive }) =>
          isActive ? `${styles.tab} ${styles.active}` : styles.tab
        }
      >
        <FileCode2 size={16} strokeWidth={2} />
        <span>Скрипты</span>
      </NavLink>

      <div className={styles.dropdown}>
        <NavLink
          to="/commands/main"
          className={({ isActive }) =>
            isActive ? `${styles.tab} ${styles.active}` : styles.tab
          }
        >
          <Command size={16} strokeWidth={2} />
          <span>Команды</span>
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
        <Timer size={16} strokeWidth={2} />
        <span>Таймер</span>
      </NavLink>

      <NavLink
        to="/alarm"
        className={({ isActive }) =>
          isActive ? `${styles.tab} ${styles.active}` : styles.tab
        }
      >
        <AlarmClock size={16} strokeWidth={2} />
        <span>Будильник</span>
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive ? `${styles.tab} ${styles.active}` : styles.tab
        }
      >
        <Settings size={16} strokeWidth={2} />
        <span>Настройки</span>
      </NavLink>
    </div>
  );
};