import React from "react";
import styles from "./Card.module.scss";

interface Props {
  title: string;
  subTitle?: string;
  onClick: () => void;
}

export const Card = ({
  title,
  subTitle,
  onClick,
}: Props) => {
  return (
    <button
      type="button"
      className={styles.card}
      onClick={onClick}
    >
      <div className={styles.content}>
        <div className={styles.title}>
          {title}
        </div>

        <div className={styles.subtitle}>
          {subTitle}
        </div>
      </div>

      <div className={styles.arrow}>
        →
      </div>
    </button>
  );
};