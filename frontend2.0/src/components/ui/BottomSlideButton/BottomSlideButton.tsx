import React, { useEffect, useState } from "react";
import styles from "./BottomSlideButton.module.scss";

type BottomSlideButtonProps = {
  children: React.ReactNode;
  offset?: number;
  startVisible?: boolean
};

export const BottomSlideButton = ({
  children,
  offset = 10,
  startVisible = false

}: BottomSlideButtonProps) => {
  const [visible, setVisible] = useState(startVisible);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (
        currentScrollY > lastScrollY &&
        currentScrollY > offset
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, [offset]);

  return (
    <div
      className={`${styles.container} ${
        visible ? styles.visible : ""
      }`}
    >
      {children}
    </div>
  );
};