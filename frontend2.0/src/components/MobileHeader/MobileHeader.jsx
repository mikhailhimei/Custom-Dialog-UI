import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import styles from "./MobileHeader.module.scss";

export const MobileHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isCommands = location.pathname.startsWith("/commands");

  if (!isCommands) return null;

  const handleBack = () => {
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate("/scripts");
    }
  };

  return (
    <header className={styles.header}>
      <button
        className={styles.backButton}
        onClick={handleBack}
      >
        ← Назад
      </button>
    </header>
  );
};