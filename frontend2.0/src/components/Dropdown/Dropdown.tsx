import React from "react";
import styles from "./Dropdown.module.scss";

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
  value = "",
  placeholder = "Выберите",
  onSelect,
}: DropdownProps) {
  return (
    <div className={styles.dropdown}>
      <select
        className={styles.select}
        value={value}
        onChange={(e) => onSelect?.(e.target.value)}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      <span className={styles.arrow}>▼</span>
    </div>
  );
}