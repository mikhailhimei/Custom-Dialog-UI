import React, {
  InputHTMLAttributes,
} from "react";

import styles from "./Input.module.scss";

interface Props
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;

  error?: string;
}

export const Input = ({
  label,

  error,

  className = "",

  ...props
}: Props) => {
  return (
    <div className={styles.field}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}

      <input
        {...props}
        className={`
          ${styles.input}
          ${error ? styles.error : ""}
          ${className}
        `}
      />

      {error && (
        <span className={styles.errorText}>
          {error}
        </span>
      )}
    </div>
  );
};