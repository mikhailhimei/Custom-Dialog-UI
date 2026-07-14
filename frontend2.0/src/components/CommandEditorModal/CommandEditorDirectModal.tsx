import React, { useMemo } from "react";

import { Modal } from "../ui/Modal/Modal";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";
import { SelectInput } from "../ui/Select/SelectInput";
import { ToggleSwitch } from "../ui/ToggleSwitch";
import { Accordion } from "../ui/Accordion/Accordion";
import { Textarea } from "../ui/Textarea/Textarea"
import { SearchInput } from "../SearchInput/SearchInput";

import { CommandDetails } from "../../types/commandTypes";
import { VALUE_TYPE_OPTIONS } from "../../constants/commandSelectOptions";

import styles from "./CommandEditorModal.module.scss";

const createDirectControl = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: false,
  subDirectControl: "",
});

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

export const CommandDirectModal: React.FC<Props> = ({
  open,
  onClose,
  title,
  formData,
  setFormData,
  onSave,
}) => {
  const directControl = useMemo(() => {
    return formData.directControl ?? createDirectControl();
  }, [formData]);

  const updateDirectControl = (patch: Record<string, any>) => {
    setFormData((current) => ({
      ...current,
      directControl: {
        ...(current.directControl ?? createDirectControl()),
        ...patch,
      },
    }));
  };

  const updateSubDirectControl = (
    index: number,
    patch: Record<string, string>
  ) => {
    const list = [...((directControl.subDirectControl as any[]) ?? [])];

    list[index] = {
      ...list[index],
      ...patch,
    };

    updateDirectControl({
      subDirectControl: list,
    });
  };

  const addSubDirectControl = () => {
    updateDirectControl({
      subDirectControl: [
        ...((directControl.subDirectControl as any[]) ?? []),
        {
          subMappingType: "",
          subVoiceCommands: "",
        },
      ],
    });
  };

  const removeSubDirectControl = (index: number) => {
    updateDirectControl({
      subDirectControl: (
        (directControl.subDirectControl as any[]) ?? []
      ).filter((_, itemIndex) => itemIndex !== index),
    });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      footer={
        <>
          <Button onClick={onSave}>Сохранить</Button>
        </>
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

        <Input
          label="mappingType"
          value={directControl.mappingType}
          onChange={(event) =>
            updateDirectControl({
              mappingType: event.target.value,
            })
          }
        />

        <SelectInput
          label="valueType"
          value={directControl.valueType}
          options={VALUE_TYPE_OPTIONS}
          onChange={(event) =>
            updateDirectControl({
              valueType: event.target.value,
            })
          }
        />
        {directControl.valueType == 'command' ?
          <>
            <div className={styles.field}>
              <Textarea
                label="voiceCommands"
                rows={6}
                value={(directControl.voiceCommands ?? []).join("\n")}
                onChange={(event) =>
                  updateDirectControl({
                    voiceCommands: event.target.value.split("\n"),
                  })
                }
              />
            </div>

            <ToggleSwitch
              label="manual"
              checked={directControl.manual}
              onChange={(event) =>
                updateDirectControl({
                  manual: event.target.checked,
                  subDirectControl: event.target.checked ? [] : "",
                })
              }
            />

            {directControl.manual ? (
              <Accordion title="subDirectControl" defaultOpen>
                {((directControl.subDirectControl as any[]) ?? []).map(
                  (item, index) => (
                    <div key={index} className={styles.arrayItem}>
                      <Input
                        label="subMappingType"
                        value={item.subMappingType}
                        onChange={(event) =>
                          updateSubDirectControl(index, {
                            subMappingType: event.target.value,
                          })
                        }
                      />

                      <div className={styles.field}>
                        <label>subVoiceCommands</label>

                        <textarea
                          className={styles.textarea}
                          rows={3}
                          value={item.subVoiceCommands}
                          onChange={(event) =>
                            updateSubDirectControl(index, {
                              subVoiceCommands: event.target.value,
                            })
                          }
                        />
                      </div>

                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => removeSubDirectControl(index)}
                      >
                        Удалить
                      </Button>
                    </div>
                  )
                )}

                <Button
                  type="button"
                  variant="secondary"
                  onClick={addSubDirectControl}
                >
                  Добавить ещё
                </Button>
              </Accordion>
            ) : (
              <SearchInput
                label="subDirectControl"
                value={
                  typeof directControl.subDirectControl === "string"
                    ? directControl.subDirectControl
                    : ""
                }
                selectedTitle={directControl.subDirectControlTitle}
                searchSource={["search_assistant_sub_direct_control_samples"]}
                onChange={(value) =>
                  updateDirectControl({
                    subDirectControl: value,
                  })
                }
                onSelect={(option) =>
                  updateDirectControl({
                    subDirectControl: option.uuid,
                    subDirectControlTitle: option.title ?? "",
                  })
                }
              />
            )} </> : <></>}
      </div>
    </Modal>
  );
};