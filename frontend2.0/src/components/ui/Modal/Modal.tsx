import React, {
  ReactNode,
  useEffect,
} from "react";

import { Button } from "../Button/Button";

import styles from "./Modal.module.scss";

interface Props {
  open: boolean;

  onClose: () => void;

  title?: string;

  footer?: ReactNode;

  children: ReactNode;

  size?: "sm" | "md" | "lg" | "xl";
}

export const Modal = ({
  open,
  onClose,
  title,
  footer,
  children,
  size = "md",
}: Props) => {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={`${styles.modal} ${styles[size]}`}
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <div className={styles.header}>
          {title && (
            <h2 className={styles.title}>
              {title}
            </h2>
          )}

          <Button
            variant="ghost"
            className={styles.close}
            onClick={onClose}
          >
            ✕
          </Button>
        </div>

        <div className={styles.body}>
          {children}
        </div>

        {footer && (
          <div className={styles.footer}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};