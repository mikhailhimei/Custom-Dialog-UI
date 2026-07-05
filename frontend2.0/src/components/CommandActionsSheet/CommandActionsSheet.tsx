import React from "react"
import { Modal } from "../Modal/Modal";
import { BottomSheet } from "../BottomSheet/BottomSheet";
import { Button } from "../ui/Button/Button";
import { useIsMobile } from "../../hooks/useIsMobile";

import styles from "./CommandActionsSheet.module.scss";

export const CommandActionsSheet = ({
  open,
  command,
  onClose,
  onToggleStatus,
  onDelete,
}: Props) => {
  const isMobile = useIsMobile();

  if (!command) return null;

  const content = (
    <div className={styles.content}>
      <h3 className={styles.title}>{command.title}</h3>

      <div className={styles.actions}>
        <Button
          fullWidth
          onClick={() => {
            onToggleStatus(command.uuid, Boolean(command.status));
            onClose();
          }}
        >
          {command.status ? "Выключить" : "Включить"}
        </Button>

        <Button
          fullWidth
          variant="ghost"
          onClick={() => {
            onDelete(command.uuid);
            onClose();
          }}
        >
          Удалить
        </Button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <BottomSheet open={open} onClose={onClose}>
        {content}
      </BottomSheet>
    );
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Действия"
    >
      {content}
    </Modal>
  );
};