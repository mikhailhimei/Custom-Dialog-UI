import React, { useEffect, useMemo, useState } from 'react';
import { useInView } from "react-intersection-observer";

import { useNavigate } from "react-router-dom";

import { NavigationTabs } from '../../components/NavigationTabs/NavigationTabs';
import { MobileNavigation } from '../../components/MobileNavigation/MobileNavigation';
import { MobileHeader } from '../../components/MobileHeader/MobileHeader'
import { Modal } from '../../components/Modal/Modal';
import { Pagination } from '../../components/Pagination/Pagination';
import { Button } from '../../components/ui/Button/Button';
import { Input } from '../../components/ui/Input/Input';
import { Accordion } from '../../components/Accordion/Accordion';
import { BottomSlideButton } from '../../components/BottomSlideButton/BottomSlideButton';
import { useIsMobile } from "../../hooks/useIsMobile";

import { useApiCommands } from '../../hooks/command/useApiCommands';
import { ShortCommand } from "../../../types"


import styles from "../CommandShared/CommandEditorPage.module.scss";

type DirectMode = "main" | "template";
type FormKind = "dialog" | "direct" | "template" | "assistantSettings";

type VoiceResponse = {
  actionType: string;
  voiceResponse: string;
};

type NextAction = {
  actionTypeComponent: string;
  actionType: string;
  uuid: string;
};

type SubDirectControlItem = {
  id?: number;
  subMappingType: string | null;
  title?: string | null;
  subVoiceCommands: string | null;
};

type ComponentDialog = {
  endStatus: boolean;
  actionType: string;
  answerType: string;
  forwardText?: boolean;
  voiceCommands: string[];
  nextDirectControl: { uuid: string }[];
  voiceResponseArray: VoiceResponse[];
  nextAction: NextAction[];
  [key: string]: any;
};

type CommandDetails = {
  status?: boolean;
  title: string;
  uuid?: string;
  componentDialog?: ComponentDialog;
  subComponentDialog?: ComponentDialog;
  directControl?: {
    mappingType: string;
    valueType: string;
    voiceCommands?: string[] | null;
    manual: boolean;
    subDirectControl: string | SubDirectControlItem[];
    [key: string]: any;
  };
  subDirectControl?: SubDirectControlItem[];
  actionType?: string;
  message?: string | null;
  endStatus?: boolean;
  [key: string]: any;
};

type EndpointConfig = {
  key: string;
  label: string;
  kind: FormKind;
  shortType: string;
  detailType: string;
  saveType: string;
  updateType: string;
  deleteType: string;
  componentKey?: "componentDialog" | "subComponentDialog";
  hasStatus: boolean;
  hasForwardText?: boolean;
};


const configs: Record<string, EndpointConfig> = {
  primary: {
    key: "primary",
    label: "Основная команда",
    kind: "dialog",
    shortType: "get_assistant_commands_short",
    detailType: "get_assistant_command",
    saveType: "save_assistant_command",
    updateType: "update_assistant_command",
    deleteType: "delete_assistant_command",
    componentKey: "componentDialog",
    hasStatus: true,
  }
};

const createComponent = (): ComponentDialog => ({
  endStatus: true,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }],
});

const createEmptyCommand = (): CommandDetails => {
  return {
    status: true,
    title: "",
    ["componentDialog"]: {
      ...createComponent(),
      ...({ forwardText: false }),
    },
  };
};


interface CommandEditorPageProps {
  configKey: "primary" | "secondary" | "directMain" | "directTemplate" | "settings";
}

export const CommandMainPage = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState<CommandDetails>(() => createEmptyCommand());
  const [actionsCommand, setActionsCommand] = useState<ShortCommand | null>(null);

  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "0px",
  });

  const {
    loading,
    loadCommands,
    deleteCommand,
    detailInformationCommand,
    saveCommand,
    updateCommand,
    editStatusCommand,
    commands

  } = useApiCommands("get_assistant_commands_short")

  const [canLoadMore, setCanLoadMore] = useState(false);

  useEffect(() => {
    if (
      !canLoadMore ||
      !isMobile ||
      !inView ||
      loading ||
      !commands ||
      commands.page >= commands.total_pages
    ) {
      return;
    }

    loadCommands("get_assistant_commands_short", commands.page + 1, true);
  }, [
    inView,
    isMobile,
    loading,
    commands,
    loadCommands,
  ]);

  useEffect(() => {
    if (
      !loading &&
      commands &&
      commands.page === 1
    ) {
      setCanLoadMore(true);
    }
  }, [loading, commands]);

  const component = useMemo(() => {
    return formData["componentDialog"] as ComponentDialog | undefined;
  }, [formData]);

  const openCreateModal = () => {
    setIsEdit(false);
    setFormData(createEmptyCommand());
    setModalOpen(true);
  };

  const openEditModal = async (command: ShortCommand) => {
    setIsEdit(true);

    const response = await detailInformationCommand("get_assistant_command", command.uuid)

    setFormData(response.data);

    setModalOpen(true);
  };

  const handlerEditStatus = async (uuid: string, status: boolean) => {
    console.log(uuid, status)
    const result = await editStatusCommand("update_status_assistant_command",uuid, status)
    loadCommands("get_assistant_commands_short")
  }

  const handlerDeleteCommand = async (uuid: string) => {
    const result = await deleteCommand("delete_assistant_command", uuid)
    loadCommands("get_assistant_commands_short")
  }

  const handlerSaveCommand = async () => {
    const result = await saveCommand("save_assistant_command", formData)
    setModalOpen(false);
  }

  const handlerUpdateCommand = async () => {
    const result = await updateCommand("update_assistant_command", formData)
    setModalOpen(false);
  }

  const updateComponent = (patch: Record<string, any>) => {
    setFormData((current) => ({
      ...current,
      ["componentDialog"]: {
        ...(current["componentDialog"] ?? createComponent()),
        ...patch,
      },
    }));
  };

  const updateComponentArray = (field: keyof ComponentDialog, index: number, patch: Record<string, string>) => {
    const list = [...((component?.[field] as any[]) ?? [])];
    list[index] = { ...list[index], ...patch };
    updateComponent({ [field]: list });
  };

  const addComponentArrayItem = (field: keyof ComponentDialog, item: Record<string, string>) => {
    updateComponent({ [field]: [...((component?.[field] as any[]) ?? []), item] });
  };

  const removeComponentArrayItem = (field: keyof ComponentDialog, index: number) => {
    updateComponent({ [field]: ((component?.[field] as any[]) ?? []).filter((_, itemIndex) => itemIndex !== index) });
  };

  const modalTitle = `${isEdit ? "Редактировать" : "Создать"}`;

  return (
    <>
      <MobileHeader />

      <div className={styles.page}>
        {!isMobile ? <NavigationTabs /> : <></>}

        {loading && <div className={styles.state}>Загрузка...</div>}

        <div className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.heading}>
              <p className={styles.description}>Создавайте и редактируйте голосовые команды ассистента.</p>
            </div>

            {!isMobile ?
              <Button
                variant="primary"
                onClick={openCreateModal}
              >
                Добавить сценарий
              </Button>
              :
              <BottomSlideButton>
                <Button
                  variant="primary"
                  onClick={openCreateModal}
                >
                  Добавить сценарий
                </Button>
              </BottomSlideButton>
            }
          </div>
        </div>

        <div className={styles.commandList}>
          {commands?.data.map((command) => (
            <div key={command.uuid} className={styles.commandTab}>
              <button type="button" className={styles.commandButton} onClick={() => openEditModal(command)}>
                <span>{command.title}</span>
                <small>{command.status === false ? "Выключена" : "Включена"}</small>
              </button>

              <button
                type="button"
                className={styles.moreButton}
                aria-label={`Действия команды ${command.title}`}
                onClick={() => setActionsCommand(command)}
              >
                ⋯
              </button>
            </div>
          ))}
        </div>

        {!isMobile ?
          <Pagination
            page={commands?.page || 1}
            totalPages={commands?.total_pages || 1}
            onChange={(page) => loadCommands("get_assistant_commands_short", page)}
          /> :
          <div ref={ref} style={{ height: 1 }} />
        }

        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title={modalTitle}
          footer={<Button onClick={!isEdit ? handlerSaveCommand : handlerUpdateCommand}>{!isEdit ? "Сохранить" : "Обновить"}</Button>}
        >
          <div className={styles.form}>
            <label className={styles.checkboxRow}>
              <input type="checkbox" checked={formData.status ?? true} onChange={(event) => setFormData({ ...formData, status: event.target.checked })} />
              Команда включена
            </label>

            <Input label="Название команды" value={formData.title} onChange={(event) => setFormData({ ...formData, title: event.target.value })} />

            <label className={styles.checkboxRow}>
              <input type="checkbox" checked={component.endStatus} onChange={(event) => updateComponent({ endStatus: event.target.checked })} />
              Завершать диалог
            </label>


            <Input label="actionType" value={component.actionType ?? ""} onChange={(event) => updateComponent({ actionType: event.target.value })} />
            <Input label="answerType" value={component.answerType ?? ""} onChange={(event) => updateComponent({ answerType: event.target.value })} />

            <div className={styles.field}>
              <label>voiceCommands</label>
              <textarea
                className={styles.textarea}
                value={(component.voiceCommands ?? []).join("\n")}
                onChange={(event) => updateComponent({ voiceCommands: event.target.value.split("\n") })}
                rows={6}
              />
            </div>

            <Accordion title="nextDirectControl" defaultOpen>
              {(component.nextDirectControl ?? []).map((item: { uuid: string }, index: number) => (
                <div key={index} className={styles.arrayItem}>
                  <Input label="uuid" value={item.uuid ?? ""} onChange={(event) => updateComponentArray("nextDirectControl", index, { uuid: event.target.value })} />
                  <Button type="button" variant="ghost" onClick={() => removeComponentArrayItem("nextDirectControl", index)}>Удалить</Button>
                </div>
              ))}
              <Button type="button" variant="secondary" onClick={() => addComponentArrayItem("nextDirectControl", { uuid: "" })}>Добавить ещё</Button>
            </Accordion>

            <Accordion title="voiceResponseArray" defaultOpen>
              {(component.voiceResponseArray ?? []).map((item: VoiceResponse, index: number) => (
                <div key={index} className={styles.arrayItem}>
                  <Input label="actionType" value={item.actionType ?? ""} onChange={(event) => updateComponentArray("voiceResponseArray", index, { actionType: event.target.value })} />
                  <Input label="voiceResponse" value={item.voiceResponse ?? ""} onChange={(event) => updateComponentArray("voiceResponseArray", index, { voiceResponse: event.target.value })} />
                  <Button type="button" variant="ghost" onClick={() => removeComponentArrayItem("voiceResponseArray", index)}>Удалить</Button>
                </div>
              ))}
              <Button type="button" variant="secondary" onClick={() => addComponentArrayItem("voiceResponseArray", { actionType: "", voiceResponse: "" })}>Добавить ещё</Button>
            </Accordion>

            <Accordion title="nextAction" defaultOpen>
              {(component.nextAction ?? []).map((item: NextAction, index: number) => (
                <div key={index} className={styles.arrayItem}>
                  <Input label="actionTypeComponent" value={item.actionTypeComponent ?? ""} onChange={(event) => updateComponentArray("nextAction", index, { actionTypeComponent: event.target.value })} />
                  <Input label="actionType" value={item.actionType ?? ""} onChange={(event) => updateComponentArray("nextAction", index, { actionType: event.target.value })} />
                  <Input label="uuid" value={item.uuid ?? ""} onChange={(event) => updateComponentArray("nextAction", index, { uuid: event.target.value })} />
                  <Button type="button" variant="ghost" onClick={() => removeComponentArrayItem("nextAction", index)}>Удалить</Button>
                </div>
              ))}
              <Button type="button" variant="secondary" onClick={() => addComponentArrayItem("nextAction", { actionTypeComponent: "", actionType: "", uuid: "" })}>Добавить ещё</Button>
            </Accordion>

          </div>
        </Modal>

        {actionsCommand && (
          <div className={styles.sheetOverlay} onClick={() => setActionsCommand(null)}>
            <div className={styles.bottomSheet} onClick={(event) => event.stopPropagation()}>
              <div className={styles.sheetHandle} />
              <h3>{actionsCommand.title}</h3>
              <Button fullWidth onClick={() => handlerEditStatus(actionsCommand.uuid, Boolean(actionsCommand.status))}> Включить</Button>
              <Button fullWidth variant="ghost" onClick={() => handlerDeleteCommand(actionsCommand.uuid)}>Удалить</Button>
            </div>
          </div>
        )}
      </div>
      <MobileNavigation />
    </>
  );
};
