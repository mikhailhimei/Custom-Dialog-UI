import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

import { NavigationTabs } from "@/components/NavigationTabs/NavigationTabs";
import { MobileNavigation } from "@/components/MobileNavigation/MobileNavigation";
import { MobileHeader } from "@/components/MobileHeader/MobileHeader";
import { Pagination } from "@/components/Pagination/Pagination";
import { Button } from "@/components/ui/Button/Button";
import { BottomSlideButton } from "@/components/BottomSlideButton/BottomSlideButton";
import { CommandDirectTemplateModal } from "@/components/CommandDirectTemplateModal/CommandDirectTemplateModal";
import { CommandActionsSheet } from "@/components/CommandActionsSheet/CommandActionsSheet";

import { useApiCommands } from "@/hooks/command/useApiCommands";
import { useIsMobile } from "@/hooks/useIsMobile";

import {
  ShortCommand,
  CommandDetails,
} from "@/types/commandTypes";

import styles from "../CommandEditorPage.module.scss";

const createEmptyCommand = (): CommandDetails => ({
  status: false,
  title: "",
  directTemplate: {
    subDirectControl: [],
  },
});

export const CommandDirectTemplatePage = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] =
    useState<CommandDetails>(createEmptyCommand);

  const [actionsCommand, setActionsCommand] =
    useState<ShortCommand | null>(null);

  const [activeDirectMode, setActiveDirectMode] =
    useState("template");

  const [canLoadMore, setCanLoadMore] =
    useState(false);

  const directModes = [
    {
      key: "main",
      label: "Основной",
    },
    {
      key: "template",
      label: "Шаблон",
    },
  ];

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
  } = useApiCommands(
    "get_assistant_sub_direct_control_samples_short"
  );

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

    loadCommands(
      "get_assistant_sub_direct_control_samples_short",
      commands.page + 1,
      true
    );
  }, [
    canLoadMore,
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

  const openEditModal = async (
    command: ShortCommand
  ) => {
    setIsEdit(true);

    const response =
      await detailInformationCommand(
        "get_assistant_sub_direct_control_sample",
        command.uuid
      );

    setFormData(response.data);

    setModalOpen(true);
  };

  const handlerEditStatus = async (
    uuid: string,
    status: boolean
  ) => {
    await editStatusCommand(
      "update_assistant_sub_direct_control",
      uuid,
      status
    );

    loadCommands(
      "get_assistant_sub_direct_control_samples_short"
    );
  };

  const handlerDeleteCommand = async (
    uuid: string
  ) => {
    await deleteCommand(
      "delete_assistant_sub_direct_control_sample",
      uuid
    );

    loadCommands(
      "get_assistant_sub_direct_control_samples_short"
    );
  };

  const handlerSaveCommand = async () => {
    await saveCommand(
      "save_assistant_sub_direct_control_sample",
      formData
    );

    setModalOpen(false);

    loadCommands(
      "get_assistant_sub_direct_control_samples_short"
    );
  };

  const handlerUpdateCommand = async () => {
    await updateCommand(
      "update_assistant_sub_direct_control_sample",
      formData
    );

    setModalOpen(false);

    loadCommands(
      "get_assistant_sub_direct_control_samples_short"
    );
  };

  return (
    <>
      <MobileHeader />

      <div className={styles.page}>
        {!isMobile && <NavigationTabs />}

        {loading && (
          <div className={styles.state}>
            Загрузка...
          </div>
        )}

        <div className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.innerTabs}>
              {directModes.map((mode) => (
                <button
                  key={mode.key}
                  type="button"
                  className={`${styles.innerTab} ${
                    activeDirectMode === mode.key
                      ? styles.activeInnerTab
                      : ""
                  }`}
                  onClick={() => {
                    setActiveDirectMode(mode.key);

                    navigate(
                      `/commands/direct/${
                        mode.key === "main"
                          ? "main"
                          : "template"
                      }`
                    );
                  }}
                >
                  {mode.label}
                </button>
              ))}
            </div>

            <div className={styles.heading}>
              <p className={styles.description}>
                Создавайте и редактируйте
                голосовые команды ассистента.
              </p>
            </div>

            {!isMobile ? (
              <Button
                onClick={openCreateModal}
              >
                Добавить сценарий
              </Button>
            ) : (
              <BottomSlideButton>
                <Button
                  onClick={openCreateModal}
                >
                  Добавить сценарий
                </Button>
              </BottomSlideButton>
            )}
          </div>
        </div>

        <div className={styles.commandList}>
          {commands?.data.map((command) => (
            <div
              key={command.uuid}
              className={styles.commandTab}
            >
              <button
                type="button"
                className={styles.commandButton}
                onClick={() =>
                  openEditModal(command)
                }
              >
                <span>{command.title}</span>

                <small>
                  {command.status === false
                    ? "Выключена"
                    : "Включена"}
                </small>
              </button>

              <button
                type="button"
                className={styles.moreButton}
                onClick={() =>
                  setActionsCommand(command)
                }
              >
                ⋯
              </button>
            </div>
          ))}
        </div>

        {!isMobile ? (
          <Pagination
            page={commands?.page ?? 1}
            totalPages={
              commands?.total_pages ?? 1
            }
            onChange={(page) =>
              loadCommands(
                "get_assistant_sub_direct_control_samples_short",
                page
              )
            }
          />
        ) : (
          <div
            ref={ref}
            style={{ height: 1 }}
          />
        )}

        <CommandDirectTemplateModal
          open={modalOpen}
          onClose={() =>
            setModalOpen(false)
          }
          title={
            isEdit
              ? "Редактировать"
              : "Создать"
          }
          formData={formData}
          setFormData={setFormData}
          onSave={
            isEdit
              ? handlerUpdateCommand
              : handlerSaveCommand
          }
        />

        <CommandActionsSheet
          open={!!actionsCommand}
          command={actionsCommand}
          onClose={() =>
            setActionsCommand(null)
          }
          onToggleStatus={handlerEditStatus}
          onDelete={handlerDeleteCommand}
        />
      </div>

      <MobileNavigation />
    </>
  );
};