import React, { SelectHTMLAttributes } from "react";

import styles from "./SelectInput.module.scss";

type SelectOption = {
  label: string;
  value: string;
};

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
}

export const SelectInput = ({
  label,
  options,
  className = "",
  value,
  ...props
}: Props) => {
  const normalizedValue = value == null ? "" : String(value);
  const hasCurrentValue = !normalizedValue || options.some((option) => option.value === normalizedValue);

  return (
    <div className={styles.field}>
      {label && <label className={styles.label}>{label}</label>}
      <select
        {...props}
        value={normalizedValue}
        className={`${styles.select} ${className}`}
      >
        {!hasCurrentValue && <option value={normalizedValue}>{normalizedValue}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
