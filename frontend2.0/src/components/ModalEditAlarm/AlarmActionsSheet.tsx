import React from "react"
import { Modal } from "@/components/ui/Modal/Modal";
import { BottomSheet } from "@/components/ui/BottomSheet/BottomSheet";
import { Button } from "@/components/ui/Button/Button";
import { useIsMobile } from "@/hooks/useIsMobile";

import styles from "./AlarmActionsSheet.module.scss";

export const AlarmActionsSheet = ({
  open,
  command,
  onClose,
  onToggleStatus,
  onEdit,
  onDelete,
}: Props) => {
  const isMobile = useIsMobile();
  if (!command) return null;

  const handleUpdateStatus = (command) => {
    const status = command.status == 'on' ? 'off' : 'on' 
    onToggleStatus(command, status);
    onClose();
  }

  const content = (
    <div className={styles.content}>
      <h3 className={styles.title}>{command.title}</h3>

      <div className={styles.actions}>
        <Button
          fullWidth
          onClick={() => handleUpdateStatus(command)}
        >
          {command.status == 'on' ? "Выключить" : "Включить"}
        </Button>

        <Button
          fullWidth
          variant="secondary"
          onClick={() => {
            onEdit(command);
            onClose();
          }}
        >
          Изменить
        </Button>

        <Button
          fullWidth
          variant="ghost"
          onClick={() => {
            onDelete(command);
            onClose();
          }}
        >
          Удалить
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {
        !isMobile ?
          <Modal
            open={open}
            onClose={onClose}
            title="Действия"
          >
            {content}
          </Modal >
          :
          <BottomSheet open={open} onClose={onClose}>
            {content}
          </BottomSheet>
      }
    </>
  );
};