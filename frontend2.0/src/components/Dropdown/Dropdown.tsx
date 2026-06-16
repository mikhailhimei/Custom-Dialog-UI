import React from "react";
import styles from "./Dropdown.module.scss";

import {
  useEffect,
  useRef,
  useState,
} from "react";

type Option = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: Option[];

  value?: string;

  placeholder?: string;

  onSelect?: (value: string) => void;
};

export function Dropdown({
  options,
  value,
  placeholder = "Выберите",
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] =
    useState(false);

  const dropdownRef =
    useRef<HTMLDivElement | null>(null);

  const selectedOption = options.find(
    (option) => option.value === value
  );

  const toggleDropdown = (): void => {
    setIsOpen((prev) => !prev);
  };

  const selectOption = (
    option: Option
  ): void => {
    onSelect?.(option.value);

    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (
      event: MouseEvent
    ): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  return (
    <div
      className={`${styles.dropdown} ${
        isOpen ? styles.active : ""
      }`}
      ref={dropdownRef}
    >
      <button
        className={styles.button}
        onClick={toggleDropdown}
        type="button"
      >
        <span>
          {selectedOption?.label ||
            placeholder}
        </span>

        <span className={styles.arrow}>
          ▼
        </span>
      </button>

      <div className={styles.menu}>
        {options.map((option) => (
          <div
            key={option.value}
            className={`${styles.item} ${
              value === option.value
                ? styles.selected
                : ""
            }`}
            onClick={() =>
              selectOption(option)
            }
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}