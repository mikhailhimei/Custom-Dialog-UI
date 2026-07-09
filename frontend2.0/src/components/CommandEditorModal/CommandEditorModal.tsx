import React, { useMemo } from "react";

import { Modal } from "../ui/Modal/Modal";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";
import { SelectInput } from "../ui/SelectInput";
import { ToggleSwitch } from "../ui/ToggleSwitch";
import { Accordion } from "../ui/Accordion/Accordion";
import { SearchInput } from "../SearchInput/SearchInput";
import { ComponentDialog, CommandDetails } from "../../types/commandTypes";
import {
  ACTION_TYPE_COMPONENT_OPTIONS,
  ANSWER_TYPE_OPTIONS,
} from "../../constants/commandSelectOptions";

import styles from "./CommandEditorModal.module.scss";


const createComponent = (): ComponentDialog => ({
  endStatus: true,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "", title: "" }],
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

        {formatData == 'subComponentDialog' ?
        <ToggleSwitch
          label="forwardText"
          checked={component.forwardText}
          onChange={(event) =>
            updateComponent({
              forwardText: event.target.checked,
            })
          }
        /> : <></>}

        <Input
          label="actionType"
          value={component.actionType}
          onChange={(event) =>
            updateComponent({
              actionType: event.target.value,
            })
          }
        />

        <SelectInput
          label="answerType"
          value={component.answerType}
          options={ANSWER_TYPE_OPTIONS}
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
              <SearchInput
                label="uuid"
                value={item.uuid}
                selectedTitle={item.title}
                searchSource="sub_direct_controls"
                onChange={(value) =>
                  updateComponentArray("nextDirectControl", index, {
                    uuid: value,
                  })
                }
                onSelect={(option) =>
                  updateComponentArray("nextDirectControl", index, {
                    uuid: option.uuid,
                    actionType: option.actionType ?? option.mappingType ?? "",
                    title: option.title ?? "",
                  })
                }
              />

              <Input
                label="actionType"
                value={item.actionType ?? ""}
                onChange={(event) =>
                  updateComponentArray("nextDirectControl", index, {
                    actionType: event.target.value,
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
                actionType: "",
                title: "",
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
              <SelectInput
                label="actionTypeComponent"
                value={item.actionTypeComponent}
                options={ACTION_TYPE_COMPONENT_OPTIONS}
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

              <SearchInput
                label="uuid"
                value={item.uuid}
                selectedTitle={item.title}
                onChange={(value) =>
                  updateComponentArray("nextAction", index, {
                    uuid: value,
                  })
                }
                onSelect={(option) =>
                  updateComponentArray("nextAction", index, {
                    uuid: option.uuid,
                    actionType: option.actionType ?? "",
                    title: option.title ?? "",
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
                title: "",
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