import React, { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";

import { useIsMobile } from "@/hooks/useIsMobile";
import { useApiCommands } from "@/hooks/command/useApiCommands";

import { Card } from "@/components/Card/Card";
import { Button } from "@/components/ui/Button/Button";
import { Pagination } from "@/components/ui/Pagination/Pagination";
import { MobileHeader } from "@/components/MobileHeader/MobileHeader";
import { NavigationTabs } from "@/components/NavigationTabs/NavigationTabs";
import { MobileNavigation } from "@/components/MobileNavigation/MobileNavigation";
import { CommandEditorModal } from "@/components/CommandEditorModal/CommandEditorModal";
import { BottomSlideButton } from "@/components/ui/BottomSlideButton/BottomSlideButton";
import { CommandActionsSheet } from "@/components/CommandActionsSheet/CommandActionsSheet";

import {
  ShortCommand,
  CommandDetails,
  ComponentDialog,
} from "@/types/commandTypes";

import styles from "@/pages/GlobalsPage.module.scss";

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
    status: false,
    title: "",
    ["componentDialog"]: {
      ...createComponent(),
      ...{ forwardText: false },
    },
  };
};

export const CommandMainPage = () => {
  const isMobile = useIsMobile();
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState<CommandDetails>(() =>
    createEmptyCommand(),
  );
  const [actionsCommand, setActionsCommand] = useState<ShortCommand | null>(
    null,
  );

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
    commands,
  } = useApiCommands("get_assistant_commands_short");

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
  }, [inView, isMobile, loading, commands, loadCommands]);

  useEffect(() => {
    if (!loading && commands && commands.page === 1) {
      setCanLoadMore(true);
    }
  }, [loading, commands]);

  const openCreateModal = () => {
    setIsEdit(false);
    setFormData(createEmptyCommand());
    setModalOpen(true);
  };

  const openEditModal = async (uuid) => {
    setIsEdit(true);

    const response = await detailInformationCommand(
      "get_assistant_command",
      uuid,
    );

    setFormData(response.data);

    setModalOpen(true);
  };

  const handlerEditStatus = async (uuid: string, status: boolean) => {
    console.log(uuid, status);
    const result = await editStatusCommand(
      "update_assistant_command_status",
      uuid,
      status,
    );
    loadCommands("get_assistant_commands_short");
  };

  const handlerDeleteCommand = async (uuid: string) => {
    const result = await deleteCommand("delete_assistant_command", uuid);
    loadCommands("get_assistant_commands_short");
  };

  const handlerSaveCommand = async () => {
    const result = await saveCommand("save_assistant_command", formData);
    setModalOpen(false);
  };

  const handlerUpdateCommand = async () => {
    const result = await updateCommand("update_assistant_command", formData);
    setModalOpen(false);
  };

  return (
    <>
      {loading && <div>Загрузка...</div>}
      <MobileHeader 
        title={"Комманды"}
      />
      <div className={styles.page}>
        <NavigationTabs />

        <div className={styles.header}>
          <div className={styles.heading}>
            {!isMobile ? <h1 className={styles.title}>Комманды</h1> : <></>}

            <p className={styles.description}>
              Создавайте команды для управления устройствами и объединяйте
              действия в единые сценарии.
            </p>
          </div>

          <div className={styles.actions}>
            {!isMobile ? (
              <Button variant="primary" onClick={openCreateModal}>
                🞢 Добавить сценарий
              </Button>
            ) : (
              <BottomSlideButton>
                <Button variant="primary" onClick={openCreateModal}>
                  Добавить сценарий
                </Button>
              </BottomSlideButton>
            )}
          </div>
        </div>

        <div className={styles.list}>
          {commands?.data.map((command) => (
            <Card
              key={command.uuid}
              title={command.title}
              subTitle={command.status === false ? "Выключена" : "Включена"}
              onClick={() => setActionsCommand(command)}
            />
          ))}
        </div>

        {!isMobile ? (
          <Pagination
            page={commands?.page || 1}
            totalPages={commands?.total_pages || 1}
            onChange={(page) =>
              loadCommands("get_assistant_commands_short", page)
            }
          />
        ) : (
          <div ref={ref} style={{ height: 1 }} />
        )}

        <CommandEditorModal
          open={modalOpen}
          isEdit={isEdit}
          formData={formData}
          formatData={"componentDialog"}
          setFormData={setFormData}
          onClose={() => setModalOpen(false)}
          onSave={handlerSaveCommand}
          onUpdate={handlerUpdateCommand}
        />

        <CommandActionsSheet
          open={!!actionsCommand}
          command={actionsCommand}
          onClose={() => setActionsCommand(null)}
          onToggleStatus={handlerEditStatus}
          onDelete={handlerDeleteCommand}
          onEdit={(uuid) => openEditModal(uuid)}
        />
      </div>
      <MobileNavigation />
    </>
  );
};
