import React, { useMemo } from "react";

import { Modal } from "../ui/Modal/Modal";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";
import { ToggleSwitch } from "../ui/ToggleSwitch";
import { Accordion } from "../ui/Accordion/Accordion";
import { ComponentDialog, CommandDetails } from "../../types/commandTypes";

import styles from "./CommandEditorModal.module.scss";


interface CommandEditorModalProps {
  open: boolean;
  isEdit: boolean;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<CommandDetails>>;
  onClose: () => void;
  onUpdate: () => void;
}

export const CommandSettingEditorModal: React.FC<CommandEditorModalProps> = ({
  open,
  isEdit,
  formData,
  setFormData,
  onClose,
  onUpdate,
}) => {

  if (!formData) return

  const component = useMemo(() => {
    if (formData) return formData;
  }, [formData]);

  const updateComponent = (patch: Record<string, any>) => {
    setFormData((current) => ({
      ...current,
      ...patch
    }));
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={isEdit ? "Редактировать" : "Создать"}
      footer={
        <Button onClick={onUpdate}>
          {"Обновить"}
        </Button>
      }
    >
      <div className={styles.form}>
        <Input
          label="Название команды"
          value={formData.title}
          onChange={(event) =>
            setFormData({
              ...formData,
              title: event.target.value,
            })
          }
        />

        <ToggleSwitch
          label="Завершать диалог"
          checked={component.endStatus}
          onChange={(event) =>
            updateComponent({
              endStatus: event.target.checked,
            })
          }
        />

        <ToggleSwitch
          label="Передать команду серверу"
          checked={component.forwardCommandToServer}
          onChange={(event) =>
            updateComponent({
              forwardCommandToServer: event.target.checked,
            })
          }
        />

        <Input
          label="actionType"
          value={component.actionType}
          onChange={(event) =>
            updateComponent({
              actionType: event.target.value,
            })
          }
        />

        <Input
          label="Ответное сообщение"
          value={component.voiceResponse}
          onChange={(event) =>
            updateComponent({
              voiceResponse: event.target.value,
            })
          }
        />
      </div>
    </Modal>
  );
};