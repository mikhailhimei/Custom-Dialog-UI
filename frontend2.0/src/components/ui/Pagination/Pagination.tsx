import React from 'react';

import styles from './Pagination.module.scss';

interface Props {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export const Pagination = ({
  page,
  totalPages,
  onChange,
}: Props) => {
  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        Назад
      </button>

      <span className={styles.label}>
        {page} / {totalPages}
      </span>

      <button
        className={styles.button}
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        Вперёд
      </button>
    </div>
  );
};