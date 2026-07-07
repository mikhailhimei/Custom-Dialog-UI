import { NavLink, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  AlarmClock,
  Bot,
  Clock3,
  Settings,
  Workflow,
} from "lucide-react";

import styles from "./MobileNavigation.module.scss";

export const MobileNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [commandsOpened, setCommandsOpened] = useState(
    location.pathname.startsWith("/commands")
  );

  const back = () => {
    setCommandsOpened(false);

    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate("/scripts");
    }
  };

  if (commandsOpened) {
    return (
      <nav className={styles.nav}>

        <NavLink to="/commands/main">
          <Bot size={20} />
          <span>Основные</span>
        </NavLink>

        <NavLink to="/commands/sub">
          <Bot size={20} />
          <span>Второстепенные</span>
        </NavLink>

        <NavLink to="/commands/direct/main">
          <Bot size={20} />
          <span>Прямые</span>
        </NavLink>

        <NavLink to="/commands/settings">
          <Bot size={20} />
          <span>Настройки</span>
        </NavLink>
      </nav>
    );
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/scripts">
        <Workflow size={20} />
        <span>Скрипты</span>
      </NavLink>

      <button
        onClick={() => {
          setCommandsOpened(true);
          navigate("/commands/main");
        }}
      >
        <Bot size={20} />
        <span>Команды</span>
      </button>

      <NavLink to="/timer">
        <Clock3 size={20} />
        <span>Таймер</span>
      </NavLink>

      <NavLink to="/alarm">
        <AlarmClock size={20} />
        <span>Будильник</span>
      </NavLink>

      <NavLink to="/settings">
        <Settings size={20} />
        <span>Настройки</span>
      </NavLink>
    </nav>
  );
};