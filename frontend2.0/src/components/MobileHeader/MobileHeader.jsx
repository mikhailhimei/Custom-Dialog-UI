import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import styles from "./MobileHeader.module.scss";

export const MobileHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (location.pathname.includes('commands')) {
      navigate('/scripts');
    } else {
      navigate("/");
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