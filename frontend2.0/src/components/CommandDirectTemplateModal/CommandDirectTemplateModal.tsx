import React, { useMemo } from "react";

import { Modal } from "../Modal/Modal";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";
import { Textarea } from "../ui/Textarea/Textarea";
import { Accordion } from "../Accordion/Accordion";

import { CommandDetails } from "../../types/commandTypes";

import styles from "@/pages/CommandPage/CommandEditorPage.module.scss";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;

  formData: CommandDetails;
  setFormData: React.Dispatch<
    React.SetStateAction<CommandDetails>
  >;

  onSave: () => void;
};

export const CommandDirectTemplateModal: React.FC<Props> = ({
  open,
  onClose,
  title,
  formData,
  setFormData,
  onSave,
}) => {
  const template = useMemo(
    () => formData.subDirectControl ?? [],
    [formData]
  );

  const updateTemplate = (items: any[]) => {
    setFormData((current) => ({
      ...current,
      subDirectControl: items,
    }));
  };

  const updateItem = (
    index: number,
    patch: Record<string, string>
  ) => {
    const list = [...template];

    list[index] = {
      ...list[index],
      ...patch,
    };

    updateTemplate(list);
  };

  const addItem = () => {
    updateTemplate([
      ...template,
      {
        subMappingType: "",
        subVoiceCommands: "",
      },
    ]);
  };

  const removeItem = (index: number) => {
    updateTemplate(
      template.filter((_, i) => i !== index)
    );
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      footer={
        <Button onClick={onSave}>
          Сохранить
        </Button>
      }
    >
      <div className={styles.form}>
        <Input
          label="Название команды"
          value={formData.title}
          onChange={(event) =>
            setFormData((current) => ({
              ...current,
              title: event.target.value,
            }))
          }
        />

        <Accordion
          title="subDirectControl"
          defaultOpen
        >
          {template.map((item, index) => (
            <div
              key={index}
              className={styles.arrayItem}
            >
              <Input
                label="subMappingType"
                value={item.subMappingType ?? ""}
                onChange={(event) =>
                  updateItem(index, {
                    subMappingType:
                      event.target.value,
                  })
                }
              />

              <Textarea
                label="subVoiceCommands"
                rows={3}
                value={(typeof item.subVoiceCommands == 'object' ? item.subVoiceCommands : []).join("\n")}
                onChange={(event) =>
                    updateItem(index, {
                    subVoiceCommands: event.target.value
                        .split("\n")
                        .filter(Boolean),
                    } as any)
                }
                />

              <Button
                type="button"
                variant="ghost"
                onClick={() =>
                  removeItem(index)
                }
              >
                Удалить
              </Button>
            </div>
          ))}

          <Button
            type="button"
            variant="secondary"
            onClick={addItem}
          >
            Добавить ещё
          </Button>
        </Accordion>
      </div>
    </Modal>
  );
};
