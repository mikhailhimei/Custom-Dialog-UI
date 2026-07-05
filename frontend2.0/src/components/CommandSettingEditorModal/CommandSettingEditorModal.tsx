import React, { useMemo } from "react";

import { Modal } from "../Modal/Modal";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";
import { ToggleSwitch } from "../ui/ToggleSwitch";
import { Accordion } from "../Accordion/Accordion";
import { ComponentDialog, CommandDetails } from "../../types/commandTypes";

import styles from "./CommandEditorModal.module.scss";


const createComponent = (): ComponentDialog => ({
  endStatus: true,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }],
});

interface CommandEditorModalProps {
  open: boolean;
  isEdit: boolean;
  formData: CommandDetails;
  formatData: string;
  setFormData: React.Dispatch<React.SetStateAction<CommandDetails>>;
  onClose: () => void;
  onSave: () => void;
  onUpdate: () => void;
}

export const CommandSettingEditorModal: React.FC<CommandEditorModalProps> = ({
  open,
  isEdit,
  formData,
  formatData,
  setFormData,
  onClose,
  onSave,
  onUpdate,
}) => {

  const component = useMemo(() => {
    if (formData[formatData]) return formData[formatData] ?? createComponent();
  }, [formData]);

  const updateComponent = (patch: Record<string, any>) => {
    setFormData((current) => ({
      ...current,
      [formatData]: {
        ...(current[formatData] ?? createComponent()),
        ...patch,
      },
    }));
  };

  const updateComponentArray = (
    field: keyof ComponentDialog,
    index: number,
    patch: Record<string, string>
  ) => {
    const list = [...((component[field] as any[]) ?? [])];
    list[index] = { ...list[index], ...patch };

    updateComponent({
      [field]: list,
    });
  };

  const addComponentArrayItem = (
    field: keyof ComponentDialog,
    item: Record<string, string>
  ) => {
    updateComponent({
      [field]: [...((component[field] as any[]) ?? []), item],
    });
  };

  const removeComponentArrayItem = (
    field: keyof ComponentDialog,
    index: number
  ) => {
    updateComponent({
      [field]: ((component[field] as any[]) ?? []).filter(
        (_, itemIndex) => itemIndex !== index
      ),
    });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={isEdit ? "Редактировать" : "Создать"}
      footer={
        <Button onClick={isEdit ? onUpdate : onSave}>
          {isEdit ? "Обновить" : "Сохранить"}
        </Button>
      }
    >
      <div className={styles.form}>
        {/* <ToggleSwitch
          label="Команда включена"
          checked={formData.status ?? true}
          onChange={(event) =>
            setFormData({
              ...formData,
              status: event.target.checked,
            })
          }
        /> */}

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
          label="answerType"
          value={component.answerType}
          onChange={(event) =>
            updateComponent({
              answerType: event.target.value,
            })
          }
        />

        <div className={styles.field}>
          <label>voiceCommands</label>

          <textarea
            className={styles.textarea}
            rows={6}
            value={(component.voiceCommands == null ? [] : typeof component.voiceCommands != 'object' ? component?.voiceCommands.split(';') : component?.voiceCommands).join("\n")}
            onChange={(event) =>
              updateComponent({
                voiceCommands: event.target.value.split("\n"),
              })
            }
          />
        </div>

      </div>
    </Modal>
  );
};