import { NavLink, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";

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

        <NavLink to="/commands/main">Основные</NavLink>

        <NavLink to="/commands/sub">
          Второстепенные
        </NavLink>

        <NavLink to="/commands/direct/main">
          Прямые
        </NavLink>

        <NavLink to="/commands/settings">
          Настройки
        </NavLink>
      </nav>
    );
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/scripts">
        Скрипты
      </NavLink>

      <button
        onClick={() => {
          setCommandsOpened(true);
          navigate("/commands/main");
        }}
      >
        Команды
      </button>

      <NavLink to="/timer">
        Таймер
      </NavLink>

      <NavLink to="/alarm">
        Будильник
      </NavLink>

      <NavLink to="/settings">
        Настройки
      </NavLink>
    </nav>
  );
};