import React, {
  InputHTMLAttributes,
  useId,
  useState,
} from "react";

import styles from "./Input.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
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
  type,
  ...props
}: Props) => {
  const generatedId = useId();

  const [showPassword, setShowPassword] = useState(false);

  const inputId = id ?? generatedId;

  const inputType =
    type === "password" && showPassword
      ? "text"
      : type;

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

      <div className={styles.inputWrapper}>
        <input
          id={inputId}
          disabled={disabled}
          type={inputType}
          {...props}
          className={`
            ${styles.input}
            ${type === "password" ? styles.passwordInput : ""}
            ${error ? styles.error : ""}
            ${className}
          `}
        />

        {type === "password" && (
          <button
            type="button"
            className={styles.passwordToggle}
            onClick={() =>
              setShowPassword((prev) => !prev)
            }
            disabled={disabled}
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        )}
      </div>

      {error && (
        <span className={styles.errorText}>
          {error}
        </span>
      )}
    </div>
  );
};