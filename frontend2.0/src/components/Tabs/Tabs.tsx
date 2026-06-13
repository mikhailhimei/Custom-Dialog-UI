import React, { ReactNode } from 'react';

import styles from "./Tabs.module.scss";

interface TabItem {
  key: string;
  label: string;
}

interface Props {
  items: TabItem[];
  active: string;
  onChange: (key: string) => void;
}

export const Tabs = ({ items, active, onChange }: Props) => {
  return (
    <div className={styles.tabs}>
      {items.map((item) => (
        <button
          key={item.key}
          className={active === item.key ? styles.active : ''}
          onClick={() => onChange(item.key)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};