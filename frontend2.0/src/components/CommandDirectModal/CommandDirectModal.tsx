import React from "react";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";
import { Accordion } from "../Accordion/Accordion";
import { Modal } from "../Modal/Modal";

import styles from "../../pages/CommandShared/CommandEditorPage.module.scss";

import { CommandDetails } from "../../types/commandTypes";

type Props = {
  open: boolean;
  onClose: () => void;

  title: string;
  formData: CommandDetails;
  setFormData: (data: CommandDetails) => void;

  directControl: any;
  directItems: any[];

  updateDirectControl: (patch: any) => void;
  updateSubDirectItem: (
    mode: string,
    index: number,
    patch: any
  ) => void;
  removeSubDirectItem: (
    mode: string,
    index: number
  ) => void;
  addSubDirectItem: (mode: string) => void;

  onSave: () => void;
};

export const CommandDirectModal: React.FC<Props> = ({
  open,
  onClose,
  title,
  formData,
  setFormData,
  directControl,
  directItems,
  updateDirectControl,
  updateSubDirectItem,
  removeSubDirectItem,
  addSubDirectItem,
  onSave,
}) => {
  console.log(directControl)
  if (!directControl) return
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      footer={
        <>
          <Button
            variant="ghost"
            onClick={onClose}
          >
            Отмена
          </Button>

          <Button onClick={onSave}>
            Сохранить
          </Button>
        </>
      }
    >
      <div className={styles.form}>
        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            checked={formData.status ?? true}
            onChange={(e) =>
              setFormData({
                ...formData,
                status: e.target.checked,
              })
            }
          />
          Команда включена
        </label>

        <Input
          label="Название команды"
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
        />

        <Input
          label="directControl.mappingType"
          value={directControl.mappingType ?? ""}
          onChange={(e) =>
            updateDirectControl({
              mappingType: e.target.value,
            })
          }
        />

        <Input
          label="directControl.valueType"
          value={directControl.valueType ?? ""}
          onChange={(e) =>
            updateDirectControl({
              valueType: e.target.value,
            })
          }
        />

        <div className={styles.field}>
          <label>voiceCommands</label>

          <textarea
            className={styles.textarea}
            rows={5}
            value={
              Array.isArray(
                directControl.voiceCommands
              )
                ? directControl.voiceCommands.join(
                    "\n"
                  )
                : ""
            }
            onChange={(e) =>
              updateDirectControl({
                voiceCommands: e.target.value
                  .split("\n")
                  .filter(Boolean),
              })
            }
          />
        </div>

        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            checked={Boolean(
              directControl.manual
            )}
            onChange={(e) =>
              updateDirectControl({
                manual: e.target.checked,
                subDirectControl:
                  e.target.checked ? [] : "",
              })
            }
          />
          manual
        </label>

        {directControl.manual ? (
          <Accordion
            title="directControl.subDirectControl"
            defaultOpen
          >
            {directItems.map(
              (item, index) => (
                <div
                  key={index}
                  className={styles.arrayItem}
                >
                  <Input
                    label="subMappingType"
                    value={
                      item.subMappingType ?? ""
                    }
                    onChange={(e) =>
                      updateSubDirectItem(
                        "direct",
                        index,
                        {
                          subMappingType:
                            e.target.value,
                        }
                      )
                    }
                  />

                  <div
                    className={styles.field}
                  >
                    <label>
                      subVoiceCommands
                    </label>

                    <textarea
                      className={
                        styles.textarea
                      }
                      rows={3}
                      value={
                        item.subVoiceCommands ??
                        ""
                      }
                      onChange={(e) =>
                        updateSubDirectItem(
                          "direct",
                          index,
                          {
                            subVoiceCommands:
                              e.target.value,
                          }
                        )
                      }
                    />
                  </div>

                  <Button
                    variant="ghost"
                    onClick={() =>
                      removeSubDirectItem(
                        "direct",
                        index
                      )
                    }
                  >
                    Удалить
                  </Button>
                </div>
              )
            )}

            <Button
              variant="secondary"
              onClick={() =>
                addSubDirectItem(
                  "direct"
                )
              }
            >
              Добавить ещё
            </Button>
          </Accordion>
        ) : (
          <Input
            label="directControl.subDirectControl"
            value={
              typeof directControl.subDirectControl ===
              "string"
                ? directControl.subDirectControl
                : ""
            }
            onChange={(e) =>
              updateDirectControl({
                subDirectControl:
                  e.target.value,
              })
            }
          />
        )}
      </div>
    </Modal>
  );
};