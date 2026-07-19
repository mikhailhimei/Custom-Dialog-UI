import React from "react";

import styles from "./Loader.module.scss";

interface LoaderProps {
  label?: string;
  fullscreen?: boolean;
}

export const Loader = ({ label = "Загрузка...", fullscreen = false }: LoaderProps) => (
  <div className={`${styles.loader} ${fullscreen ? styles.fullscreen : ""}`} role="status" aria-live="polite">
    <span className={styles.spinner} aria-hidden="true" />
    {label && <span className={styles.label}>{label}</span>}
  </div>
);
