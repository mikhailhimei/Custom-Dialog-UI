import React, { useMemo } from "react";

import { Modal } from "../Modal/Modal";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";
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

export const CommandEditorModal: React.FC<CommandEditorModalProps> = ({
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
        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            checked={formData.status ?? true}
            onChange={(event) =>
              setFormData({
                ...formData,
                status: event.target.checked,
              })
            }
          />
          Команда включена
        </label>

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

        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            checked={component.endStatus}
            onChange={(event) =>
              updateComponent({
                endStatus: event.target.checked,
              })
            }
          />
          Завершать диалог
        </label>

        {formatData == 'subComponentDialog' ?
        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            checked={component.forwardText}
            onChange={(event) =>
              updateComponent({
                forwardText: event.target.checked,
              })
            }
          />
          forwardText
        </label> : <></>}

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

        <Accordion title="nextDirectControl" defaultOpen>
          {(component.nextDirectControl ?? []).map((item, index) => (
            <div key={index} className={styles.arrayItem}>
              <Input
                label="uuid"
                value={item.uuid}
                onChange={(event) =>
                  updateComponentArray("nextDirectControl", index, {
                    uuid: event.target.value,
                  })
                }
              />

              <Button
                type="button"
                variant="ghost"
                onClick={() =>
                  removeComponentArrayItem("nextDirectControl", index)
                }
              >
                Удалить
              </Button>
            </div>
          ))}

          <Button
            type="button"
            variant="secondary"
            onClick={() =>
              addComponentArrayItem("nextDirectControl", {
                uuid: "",
              })
            }
          >
            Добавить ещё
          </Button>
        </Accordion>

        <Accordion title="voiceResponseArray" defaultOpen>
          {(component.voiceResponseArray ?? []).map((item, index) => (
            <div key={index} className={styles.arrayItem}>
              <Input
                label="actionType"
                value={item.actionType}
                onChange={(event) =>
                  updateComponentArray("voiceResponseArray", index, {
                    actionType: event.target.value,
                  })
                }
              />

              <Input
                label="voiceResponse"
                value={item.voiceResponse}
                onChange={(event) =>
                  updateComponentArray("voiceResponseArray", index, {
                    voiceResponse: event.target.value,
                  })
                }
              />

              <Button
                type="button"
                variant="ghost"
                onClick={() =>
                  removeComponentArrayItem("voiceResponseArray", index)
                }
              >
                Удалить
              </Button>
            </div>
          ))}

          <Button
            type="button"
            variant="secondary"
            onClick={() =>
              addComponentArrayItem("voiceResponseArray", {
                actionType: "",
                voiceResponse: "",
              })
            }
          >
            Добавить ещё
          </Button>
        </Accordion>

        <Accordion title="nextAction" defaultOpen>
          {(component.nextAction ?? []).map((item, index) => (
            <div key={index} className={styles.arrayItem}>
              <Input
                label="actionTypeComponent"
                value={item.actionTypeComponent}
                onChange={(event) =>
                  updateComponentArray("nextAction", index, {
                    actionTypeComponent: event.target.value,
                  })
                }
              />

              <Input
                label="actionType"
                value={item.actionType}
                onChange={(event) =>
                  updateComponentArray("nextAction", index, {
                    actionType: event.target.value,
                  })
                }
              />

              <Input
                label="uuid"
                value={item.uuid}
                onChange={(event) =>
                  updateComponentArray("nextAction", index, {
                    uuid: event.target.value,
                  })
                }
              />

              <Button
                type="button"
                variant="ghost"
                onClick={() =>
                  removeComponentArrayItem("nextAction", index)
                }
              >
                Удалить
              </Button>
            </div>
          ))}

          <Button
            type="button"
            variant="secondary"
            onClick={() =>
              addComponentArrayItem("nextAction", {
                actionTypeComponent: "",
                actionType: "",
                uuid: "",
              })
            }
          >
            Добавить ещё
          </Button>
        </Accordion>
      </div>
    </Modal>
  );
};