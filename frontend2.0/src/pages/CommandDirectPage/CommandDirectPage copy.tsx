import React, { useEffect, useMemo, useState } from 'react';
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

import { NavigationTabs } from '../../components/NavigationTabs/NavigationTabs';
import { MobileNavigation } from '../../components/MobileNavigation/MobileNavigation';
import { MobileHeader } from '../../components/MobileHeader/MobileHeader'
import { Pagination } from '../../components/Pagination/Pagination';
import { Button } from '../../components/ui/Button/Button';
import { BottomSlideButton } from '../../components/BottomSlideButton/BottomSlideButton';
import { useIsMobile } from "../../hooks/useIsMobile";
import { CommandEditorModal } from '../../components/CommandEditorModal/CommandEditorModal';
import { CommandActionsSheet } from '../../components/CommandActionsSheet/CommandActionsSheet';
import { useApiCommands } from '../../hooks/command/useApiCommands';
import { ShortCommand, CommandDetails, ComponentDialog } from '../../types/commandTypes';


import styles from "../CommandShared/CommandEditorPage.module.scss";

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
    ["subComponentDialog"]: {
      ...createComponent(),
      ...({ forwardText: false }),
    },
  };
};

export const CommandDirectPage = () => {
  const isMobile = useIsMobile();
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState<CommandDetails>(() => createEmptyCommand());
  const [actionsCommand, setActionsCommand] = useState<ShortCommand | null>(null);

  const directControl = formData.directControl;
  const templateItems = Array.isArray(formData.subDirectControl) ? formData.subDirectControl : [];
  const directItems = Array.isArray(directControl?.subDirectControl) ? directControl.subDirectControl : [];
  const directModes: Array<{ key: string; label: string }> = [
    { key: "main", label: "Основной" },
    { key: "template", label: "Шаблон" },
  ];
  const [activeDirectMode, setActiveDirectMode] = useState<string>("main");

  const navigate = useNavigate();


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

  } = useApiCommands("get_assistant_sub_direct_controls_short")

  //   key: "directMain",
  // label: "Прямая команда",
  // kind: "direct",
  // shortType: "get_assistant_sub_direct_controls_short",
  // detailType: "get_assistant_sub_direct_control",
  // saveType: "save_assistant_sub_direct_control",
  // updateType: "update_assistant_sub_direct_control",
  // deleteType: "delete_assistant_sub_direct_control",
  // hasStatus: true,

  //   if (config.kind === "direct") {
  //   return {
  //     status: true,
  //     title: "",
  //     directControl: {
  //       mappingType: "",
  //       valueType: "all",
  //       voiceCommands: [],
  //       manual: false,
  //       subDirectControl: "",
  //     },
  //   };
  // }

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

    loadCommands("get_assistant_sub_direct_controls_short", commands.page + 1, true);
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

  const openCreateModal = () => {
    setIsEdit(false);
    setFormData(createEmptyCommand());
    setModalOpen(true);
  };

  const openEditModal = async (command: ShortCommand) => {
    setIsEdit(true);

    const response = await detailInformationCommand("get_assistant_sub_direct_control", command.uuid)

    setFormData(response.data);

    setModalOpen(true);
  };

  const handlerEditStatus = async (uuid: string, status: boolean) => {
    const result = await editStatusCommand("update_assistant_sub_direct_control", uuid, status)
    loadCommands("get_assistant_sub_direct_controls_short")
  }

  const handlerDeleteCommand = async (uuid: string) => {
    const result = await deleteCommand("delete_assistant_sub_direct_control", uuid)
    loadCommands("get_assistant_sub_direct_controls_short")
  }

  const handlerSaveCommand = async () => {
    const result = await saveCommand("save_assistant_sub_direct_control", formData)
    setModalOpen(false);
  }

  const handlerUpdateCommand = async () => {
    const result = await updateCommand("update_assistant_sub_direct_control", formData)
    setModalOpen(false);
  }

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
            onChange={(page) => loadCommands("get_assistant_sub_direct_controls_short", page)}
          /> :
          <div ref={ref} style={{ height: 1 }} />
        }

        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title={modalTitle}
          footer={<Button onClick={saveCommand}>Сохранить</Button>}
        >
          <div className={styles.form}>
            
            <Input label="Название команды" value={formData.title} onChange={(event) => setFormData({ ...formData, title: event.target.value })} />
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
          </div>
        </Modal>


        <CommandActionsSheet
          open={!!actionsCommand}
          command={actionsCommand}
          onClose={() => setActionsCommand(null)}
          onToggleStatus={handlerEditStatus}
          onDelete={handlerDeleteCommand}
        />

      </div>
      <MobileNavigation />
    </>
  );
};
