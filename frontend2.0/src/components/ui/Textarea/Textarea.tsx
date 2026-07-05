import React, {
  TextareaHTMLAttributes,
} from "react";

import styles from "./Textarea.module.scss";

interface Props
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;

  error?: string;
}

export const Textarea = ({
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

      <textarea
        {...props}
        className={`
          ${styles.textarea}
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