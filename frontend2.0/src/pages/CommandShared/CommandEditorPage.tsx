import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { NavigationTabs } from '../../components/NavigationTabs/NavigationTabs';
import { MobileNavigation } from '../../components/MobileNavigation/MobileNavigation';
import { MobileHeader } from '../../components/MobileHeader/MobileHeader'
import { Modal } from '../../components/Modal/Modal';
import { Pagination } from '../../components/Pagination/Pagination';
import { Button } from '../../components/ui/Button/Button';
import { Input } from '../../components/ui/Input/Input';
import { SelectInput } from '../../components/ui/SelectInput';
import { ToggleSwitch } from '../../components/ui/ToggleSwitch';
import { CommandSearchInput } from '../../components/CommandSearchInput';
import { Accordion } from '../../components/Accordion/Accordion';
import { useDialogApi } from '../../context/DialogContext';
import { useIsMobile } from "../../hooks/useIsMobile";
import {
  ACTION_TYPE_COMPONENT_OPTIONS,
  ANSWER_TYPE_OPTIONS,
  VALUE_TYPE_OPTIONS,
} from "../../constants/commandSelectOptions";


import styles from "./CommandEditorPage.module.scss";

type DirectMode = "main" | "template";
type FormKind = "dialog" | "direct" | "template" | "assistantSettings";

type ShortCommand = {
  uuid: string;
  title: string;
  status?: boolean;
};

type ShortResponse = {
  data: ShortCommand[];
  page: number;
  page_size: number;
  total_pages: number;
  total_items: number;
};

type VoiceResponse = {
  actionType: string;
  voiceResponse: string;
};

type NextAction = {
  actionTypeComponent: string;
  actionType: string;
  uuid: string;
  title?: string;
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
  nextDirectControl: { uuid: string; actionType?: string; title?: string }[];
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

const directModes: Array<{ key: DirectMode; label: string }> = [
  { key: "main", label: "Основной" },
  { key: "template", label: "Шаблон" },
];

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
  },
  secondary: {
    key: "secondary",
    label: "Второстепенная команда",
    kind: "dialog",
    shortType: "get_assistant_sub_commands_short",
    detailType: "get_assistant_sub_command",
    saveType: "save_assistant_sub_command",
    updateType: "update_assistant_sub_command",
    deleteType: "delete_assistant_sub_command",
    componentKey: "subComponentDialog",
    hasStatus: true,
    hasForwardText: true,
  },
  directMain: {
    key: "directMain",
    label: "Прямая команда",
    kind: "direct",
    shortType: "get_assistant_sub_direct_controls_short",
    detailType: "get_assistant_sub_direct_control",
    saveType: "save_assistant_sub_direct_control",
    updateType: "update_assistant_sub_direct_control",
    deleteType: "delete_assistant_sub_direct_control",
    hasStatus: true,
  },
  directTemplate: {
    key: "directTemplate",
    label: "Шаблон прямой команды",
    kind: "template",
    shortType: "get_assistant_sub_direct_control_samples_short",
    detailType: "get_assistant_sub_direct_control_sample",
    saveType: "save_assistant_sub_direct_control_sample",
    updateType: "update_assistant_sub_direct_control_sample",
    deleteType: "delete_assistant_sub_direct_control_sample",
    hasStatus: false,
  },
  settings: {
    key: "settings",
    label: "Настройки команды",
    kind: "assistantSettings",
    shortType: "get_assistant_settings_short",
    detailType: "get_assistant_setting",
    saveType: "save_assistant_setting",
    updateType: "update_assistant_setting",
    deleteType: "delete_assistant_setting",
    hasStatus: false,
  },
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

const createEmptyCommand = (config: EndpointConfig): CommandDetails => {
  if (config.kind === "dialog") {
    return {
      status: true,
      title: "",
      [config.componentKey ?? "componentDialog"]: {
        ...createComponent(),
        ...(config.hasForwardText ? { forwardText: false } : {}),
      },
    };
  }

  if (config.kind === "direct") {
    return {
      status: true,
      title: "",
      directControl: {
        mappingType: "",
        valueType: "all",
        voiceCommands: [],
        manual: false,
        subDirectControl: "",
      },
    };
  }

  if (config.kind === "assistantSettings") {
    return {
      title: "",
      actionType: "",
      message: null,
      endStatus: false,
    };
  }

  return {
    title: "",
    subDirectControl: [{ subMappingType: "", title: null, subVoiceCommands: "" }],
  };
};

const normalizeShortResponse = (response: any): ShortResponse => ({
  data: Array.isArray(response?.data) ? response.data : [],
  page: response?.page ?? 1,
  page_size: response?.page_size ?? 10,
  total_pages: response?.total_pages ?? 1,
  total_items: response?.total_items ?? 0,
});

interface CommandEditorPageProps {
  configKey: "primary" | "secondary" | "directMain" | "directTemplate" | "settings";
}

export const CommandEditorPage = ({ configKey }: CommandEditorPageProps) => {
  const isMobile = useIsMobile();
  const api = useDialogApi();
  const navigate = useNavigate();
  const [activeDirectMode, setActiveDirectMode] = useState<DirectMode>(configKey === "directTemplate" ? "template" : "main");
  const [commands, setCommands] = useState<ShortResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState<CommandDetails>(() => createEmptyCommand(configs[configKey]));
  const [actionsCommand, setActionsCommand] = useState<ShortCommand | null>(null);

  const activeConfig = useMemo(() => {
    if (configKey === "directMain" || configKey === "directTemplate") {
      return activeDirectMode === "main" ? configs.directMain : configs.directTemplate;
    }

    return configs[configKey];
  }, [activeDirectMode, configKey]);

  const component = useMemo(() => {
    if (activeConfig.kind !== "dialog") return undefined;

    return formData[activeConfig.componentKey ?? "componentDialog"] as ComponentDialog | undefined;
  }, [activeConfig, formData]);

  const directControl = formData.directControl;
  const templateItems = Array.isArray(formData.subDirectControl) ? formData.subDirectControl : [];
  const directItems = Array.isArray(directControl?.subDirectControl) ? directControl.subDirectControl : [];

  const loadCommands = async (page = 1) => {
    setLoading(true);

    try {
      const response = await api._getShort(activeConfig.shortType, page);
      setCommands(normalizeShortResponse(response));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCommands();
  }, [activeConfig]);

  const openCreateModal = () => {
    setIsEdit(false);
    setFormData(createEmptyCommand(activeConfig));
    setModalOpen(true);
  };

  const openEditModal = async (command: ShortCommand) => {
    setIsEdit(true);

    const response: any = await api._getDetail(command.uuid, activeConfig.detailType);

    setFormData(response.data);
    setModalOpen(true);
  };

  const updateComponent = (patch: Record<string, any>) => {
    const componentKey = activeConfig.componentKey ?? "componentDialog";

    setFormData((current) => ({
      ...current,
      [componentKey]: {
        ...(current[componentKey] ?? createComponent()),
        ...patch,
      },
    }));
  };

  const updateDirectControl = (patch: Record<string, any>) => {
    setFormData((current) => ({
      ...current,
      directControl: {
        ...(current.directControl ?? createEmptyCommand(configs.directMain).directControl),
        ...patch,
      },
    }));
  };

  const saveCommand = async () => {
    if (isEdit && formData.uuid) {
      const { uuid, ...payload } = formData;
      await api._update(uuid, activeConfig.updateType, payload);
    } else {
      await api._save(formData, activeConfig.saveType);
    }

    setModalOpen(false);
    await loadCommands(commands?.page ?? 1);
  };

  const deleteCommand = async (uuid: string) => {
    await api._delete(uuid, activeConfig.deleteType);
    setActionsCommand(null);
    await loadCommands(commands?.page ?? 1);
  };

  const enableCommand = async (command: ShortCommand) => {
    await api._update(command.uuid, activeConfig.updateType, { status: true });
    setActionsCommand(null);
    await loadCommands(commands?.page ?? 1);
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

  const updateSubDirectItem = (source: "direct" | "template", index: number, patch: Partial<SubDirectControlItem>) => {
    const list = source === "direct" ? [...directItems] : [...templateItems];
    list[index] = { ...list[index], ...patch };

    if (source === "direct") {
      updateDirectControl({ subDirectControl: list });
    } else {
      setFormData((current) => ({ ...current, subDirectControl: list }));
    }
  };

  const addSubDirectItem = (source: "direct" | "template") => {
    const item = { subMappingType: "", title: null, subVoiceCommands: "" };

    if (source === "direct") {
      updateDirectControl({ subDirectControl: [...directItems, item] });
    } else {
      setFormData((current) => ({ ...current, subDirectControl: [...templateItems, item] }));
    }
  };

  const removeSubDirectItem = (source: "direct" | "template", index: number) => {
    const filtered = (source === "direct" ? directItems : templateItems).filter((_, itemIndex) => itemIndex !== index);

    if (source === "direct") {
      updateDirectControl({ subDirectControl: filtered });
    } else {
      setFormData((current) => ({ ...current, subDirectControl: filtered }));
    }
  };

  const modalTitle = `${isEdit ? "Редактировать" : "Создать"}: ${activeConfig.label}`;

  return (
    <>
    <MobileHeader />
      
    <div className={styles.page}>
      { !isMobile ? <NavigationTabs /> : <></>}

      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.heading}>
            <h1 className={styles.title}>{activeConfig.label}</h1>
            <p className={styles.description}>Создавайте и редактируйте голосовые команды ассистента.</p>
          </div>

          <Button onClick={openCreateModal}>Создать команду</Button>
        </div>

        {(configKey === "directMain" || configKey === "directTemplate") && (
          <div className={styles.innerTabs}>
            {directModes.map((mode) => (
              <button
                key={mode.key}
                type="button"
                className={`${styles.innerTab} ${activeDirectMode === mode.key ? styles.activeInnerTab : ""}`}
                onClick={() => {
                  setActiveDirectMode(mode.key);
                  navigate(`/commands/direct/${mode.key === "main" ? "main" : "template"}`);
                }}
              >
                {mode.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {loading && <div className={styles.state}>Загрузка...</div>}

      <div className={styles.commandList}>
        {commands?.data.map((command) => (
          <div key={command.uuid} className={styles.commandTab}>
            <button type="button" className={styles.commandButton} onClick={() => openEditModal(command)}>
              <span>{command.title}</span>
              {activeConfig.hasStatus && <small>{command.status === false ? "Выключена" : "Включена"}</small>}
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

      <Pagination
        page={commands?.page || 1}
        totalPages={commands?.total_pages || 1}
        onChange={loadCommands}
      />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        footer={<Button onClick={saveCommand}>Сохранить</Button>}
      >
        <div className={styles.form}>
          {activeConfig.hasStatus && (
            <ToggleSwitch label="Команда включена" checked={formData.status ?? true} onChange={(event) => setFormData({ ...formData, status: event.target.checked })} />
          )}

          <Input label="Название команды" value={formData.title} onChange={(event) => setFormData({ ...formData, title: event.target.value })} />

          {activeConfig.kind === "dialog" && component && (
            <>
              <ToggleSwitch label="Завершать диалог" checked={component.endStatus} onChange={(event) => updateComponent({ endStatus: event.target.checked })} />

              {activeConfig.hasForwardText && (
                <ToggleSwitch label="forwardText" checked={Boolean(component.forwardText)} onChange={(event) => updateComponent({ forwardText: event.target.checked })} />
              )}

              <Input label="actionType" value={component.actionType ?? ""} onChange={(event) => updateComponent({ actionType: event.target.value })} />
              <SelectInput label="answerType" value={component.answerType ?? ""} options={ANSWER_TYPE_OPTIONS} onChange={(event) => updateComponent({ answerType: event.target.value })} />

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
                    <SelectInput label="actionTypeComponent" value={item.actionTypeComponent ?? ""} options={ACTION_TYPE_COMPONENT_OPTIONS} onChange={(event) => updateComponentArray("nextAction", index, { actionTypeComponent: event.target.value })} />
                    <Input label="actionType" value={item.actionType ?? ""} onChange={(event) => updateComponentArray("nextAction", index, { actionType: event.target.value })} />
                    <Input label="uuid" value={item.uuid ?? ""} onChange={(event) => updateComponentArray("nextAction", index, { uuid: event.target.value })} />
                    <Button type="button" variant="ghost" onClick={() => removeComponentArrayItem("nextAction", index)}>Удалить</Button>
                  </div>
                ))}
                <Button type="button" variant="secondary" onClick={() => addComponentArrayItem("nextAction", { actionTypeComponent: "", actionType: "", uuid: "" })}>Добавить ещё</Button>
              </Accordion>
            </>
          )}

          {activeConfig.kind === "direct" && directControl && (
            <>
              <Input label="directControl.mappingType" value={directControl.mappingType ?? ""} onChange={(event) => updateDirectControl({ mappingType: event.target.value })} />
              <SelectInput label="directControl.valueType" value={directControl.valueType ?? ""} options={VALUE_TYPE_OPTIONS} onChange={(event) => updateDirectControl({ valueType: event.target.value })} />

              <div className={styles.field}>
                <label>voiceCommands</label>
                <textarea
                  className={styles.textarea}
                  value={Array.isArray(directControl.voiceCommands) ? directControl.voiceCommands.join("\n") : ""}
                  onChange={(event) => updateDirectControl({ voiceCommands: event.target.value.split("\n").filter(Boolean) })}
                  rows={5}
                />
              </div>

              <ToggleSwitch
                label="manual"
                checked={Boolean(directControl.manual)}
                onChange={(event) => updateDirectControl({ manual: event.target.checked, subDirectControl: event.target.checked ? [] : "" })}
              />

              {directControl.manual ? (
                <Accordion title="directControl.subDirectControl" defaultOpen>
                  {directItems.map((item, index) => (
                    <div key={index} className={styles.arrayItem}>
                      <Input label="subMappingType" value={item.subMappingType ?? ""} onChange={(event) => updateSubDirectItem("direct", index, { subMappingType: event.target.value })} />
                      <div className={styles.field}>
                        <label>subVoiceCommands</label>
                        <textarea className={styles.textarea} value={item.subVoiceCommands ?? ""} onChange={(event) => updateSubDirectItem("direct", index, { subVoiceCommands: event.target.value })} rows={3} />
                      </div>
                      <Button type="button" variant="ghost" onClick={() => removeSubDirectItem("direct", index)}>Удалить</Button>
                    </div>
                  ))}
                  <Button type="button" variant="secondary" onClick={() => addSubDirectItem("direct")}>Добавить ещё</Button>
                </Accordion>
              ) : (
                <CommandSearchInput label="directControl.subDirectControl" value={typeof directControl.subDirectControl === "string" ? directControl.subDirectControl : ""} selectedTitle={directControl.subDirectControlTitle} searchSource="sub_direct_control_samples" onChange={(value) => updateDirectControl({ subDirectControl: value })} onSelect={(option) => updateDirectControl({ subDirectControl: option.uuid, subDirectControlTitle: option.title ?? "" })} />
              )}
            </>
          )}

          {activeConfig.kind === "assistantSettings" && (
            <>
              <Input label="actionType" value={formData.actionType ?? ""} onChange={(event) => setFormData({ ...formData, actionType: event.target.value })} />

              <div className={styles.field}>
                <label>message</label>
                <textarea
                  className={styles.textarea}
                  value={formData.message ?? ""}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value || null })}
                  rows={4}
                />
              </div>

              <ToggleSwitch label="endStatus" checked={Boolean(formData.endStatus)} onChange={(event) => setFormData({ ...formData, endStatus: event.target.checked })} />
            </>
          )}

          {activeConfig.kind === "template" && (
            <Accordion title="subDirectControl" defaultOpen>
              {templateItems.map((item, index) => (
                <div key={index} className={styles.arrayItem}>
                  <Input label="subMappingType" value={item.subMappingType ?? ""} onChange={(event) => updateSubDirectItem("template", index, { subMappingType: event.target.value })} />
                  <div className={styles.field}>
                    <label>subVoiceCommands</label>
                    <textarea className={styles.textarea} value={item.subVoiceCommands ?? ""} onChange={(event) => updateSubDirectItem("template", index, { subVoiceCommands: event.target.value })} rows={3} />
                  </div>
                  <Button type="button" variant="ghost" onClick={() => removeSubDirectItem("template", index)}>Удалить</Button>
                </div>
              ))}
              <Button type="button" variant="secondary" onClick={() => addSubDirectItem("template")}>Добавить ещё</Button>
            </Accordion>
          )}
        </div>
      </Modal>

      {actionsCommand && (
        <div className={styles.sheetOverlay} onClick={() => setActionsCommand(null)}>
          <div className={styles.bottomSheet} onClick={(event) => event.stopPropagation()}>
            <div className={styles.sheetHandle} />
            <h3>{actionsCommand.title}</h3>
            {activeConfig.hasStatus && actionsCommand.status === false && (
              <Button fullWidth onClick={() => enableCommand(actionsCommand)}>Включить</Button>
            )}
            <Button fullWidth variant="ghost" onClick={() => deleteCommand(actionsCommand.uuid)}>Удалить</Button>
          </div>
        </div>
      )}
    </div>
     <MobileNavigation />
    </>
  );
};
