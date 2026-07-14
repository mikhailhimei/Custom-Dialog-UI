import React, {
  InputHTMLAttributes,
  useId,
} from "react";

import styles from "./Input.module.scss";

interface Props
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  error?: string;
}

export const Input = ({
  label,
  error,
  disabled,
  className = "",
  id,
  ...props
}: Props) => {
  const generatedId = useId();

  const inputId = id ?? generatedId;

  return (
    <div className={styles.field}>
      {label && (
        <label
          htmlFor={inputId}
          className={styles.label}
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        disabled={disabled}
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