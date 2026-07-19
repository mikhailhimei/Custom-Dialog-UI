import React, { useEffect, useState } from 'react';

import { useIsMobile } from "@/hooks/useIsMobile";
import { ShortCommand } from '@/types/commandTypes';
import { useInView } from "react-intersection-observer";
import { useApiCommands } from '@/hooks/command/useApiCommands';

import { Card } from "@/components/Card/Card"
import { Pagination } from '@/components/ui/Pagination/Pagination';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader'
import { NavigationTabs } from '@/components/NavigationTabs/NavigationTabs';
import { MobileNavigation } from '@/components/MobileNavigation/MobileNavigation';
import { CommandSettingEditorModal } from '@/components/CommandSettingEditorModal/CommandSettingEditorModal';

import styles from "@/pages/GlobalsPage.module.scss";

export const CommandSettingsPage = () => {
  const isMobile = useIsMobile();
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState();

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px",
  });

  const {
    loading,
    loadCommands,
    detailInformationCommand,
    updateCommand,
    commands

  } = useApiCommands("get_assistant_settings_short")

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

    loadCommands("get_assistant_settings_short", commands.page + 1, true);
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

  const openEditModal = async (command: ShortCommand) => {
    setIsEdit(true);

    const response = await detailInformationCommand("get_assistant_setting", command.uuid)

    setFormData(response.data);

    setModalOpen(true);
  };

  const handlerUpdateCommand = async () => {
    const result = await updateCommand("update_assistant_setting", formData)
    setModalOpen(false);
  }

  return (
    <>
      <MobileHeader 
        title={"Настройки команд"}
      />

      <div className={styles.page}>
        {!isMobile ? <NavigationTabs /> : <></>}

        {loading && <div className={styles.state}>Загрузка...</div>}

        <div className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.heading}>
              <p className={styles.description}>Создавайте и редактируйте голосовые команды ассистента.</p>
            </div>
          </div>
        </div>

        <div className={styles.list}>
          {commands?.data.map((command) => (
            <Card
              key={command.uuid}
              title={command.title}
              subTitle={command.actionType}
              onClick={() => openEditModal(command)}
            />
          ))}
        </div>


        {!isMobile ?
          <Pagination
            page={commands?.page || 1}
            totalPages={commands?.total_pages || 1}
            onChange={(page) => loadCommands("get_assistant_settings_short", page)}
          /> :
          <div ref={ref} style={{ height: 1 }} />
        }

        <CommandSettingEditorModal
          open={modalOpen}
          isEdit={isEdit}
          formData={formData}
          setFormData={setFormData}
          onClose={() => setModalOpen(false)}
          onUpdate={handlerUpdateCommand}
        />

      </div>
      <MobileNavigation />
    </>
  );
};
