import React, { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";

  fullWidth?: boolean;
}

export const Button = ({
  children,

  variant = "primary",

  fullWidth = false,

  className = "",

  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={`
        ${styles.button}
        ${styles[variant]}
        ${fullWidth ? styles.full : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};