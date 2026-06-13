import React, { ReactNode } from 'react';

import styles from "./Modal.module.scss";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ open, onClose, children }: Props) => {
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose}>✕</button>

        {children}
      </div>
    </div>
  );
};