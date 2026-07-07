import React from "react";
import {
  ArrowLeft,
  Home,
} from "lucide-react";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import styles from "./MobileHeader.module.scss";

export const MobileHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isCommands = location.pathname.startsWith("/commands");

  const title = isCommands
    ? "Команды"
    : "Скрипты";

  const handleBack = () => {
    if (isCommands) {
      navigate("/scripts");
    } else {
      navigate("home assistant");
    }
  };

  return (
    <header className={styles.header}>
      <button
        className={styles.backButton}
        onClick={handleBack}
      >
        <ArrowLeft size={18} />
      </button>

      <h1 className={styles.title}>
        {title}
      </h1>

      <button
        className={styles.homeButton}
        onClick={() => navigate("/scripts")}
      >
        <Home size={18} />
      </button>
    </header>
  );
};