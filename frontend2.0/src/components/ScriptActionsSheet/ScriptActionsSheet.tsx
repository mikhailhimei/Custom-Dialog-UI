import React from "react"
import { Modal } from "@/components/ui/Modal/Modal";
import { BottomSheet } from "@/components/ui/BottomSheet/BottomSheet";
import { Button } from "@/components/ui/Button/Button";
import { useIsMobile } from "@/hooks/useIsMobile";

import styles from "./ScriptActionsSheet.module.scss";

export const ScriptActionsSheet = ({
  uuid,
  open,
  title,
  onClose,
  onEdit,
  onDelete,
  }: Props) => {
  const isMobile = useIsMobile();

  if (!uuid) return null;

  const content = (
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.actions}>
        <Button
          fullWidth
          onClick={() => {
            onEdit(uuid);
            onClose();
          }}
        >
          Изменить
        </Button>

        <Button
          fullWidth
          variant="ghost"
          onClick={() => {
            onDelete(uuid);
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
            size="sm"
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