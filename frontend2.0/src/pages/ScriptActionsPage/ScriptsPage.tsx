import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import {
  ScriptAction,
  ScriptActionDetails,
} from '@/types/scripts';

import { useIsMobile } from "@/hooks/useIsMobile";
import { useApiScripts } from '@/hooks/scriptActions/useApiScripts';

import { Card } from '@/components/Card/Card';
import { Button } from '@/components/ui/Button/Button';
import { Pagination } from '@/components/ui/Pagination/Pagination';
import { ScriptActionsSheet } from "@/components/ScriptActionsSheet/ScriptActionsSheet";
import { ScriptFormModal } from '@/components/ScriptFormModal/ScriptFormModal';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import { NavigationTabs } from '@/components/NavigationTabs/NavigationTabs';
import { MobileNavigation } from "@/components/MobileNavigation/MobileNavigation";
import { Loader } from "@/components/ui/Loader";
import { BottomSlideButton } from "@/components/ui/BottomSlideButton/BottomSlideButton"
import styles from "../GlobalsPage.module.scss";


export const ScriptsPage = () => {
  const isMobile = useIsMobile();

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px",
  });

  const [selectedScript, setSelectedScript] =
    useState<ScriptActionDetails>();

  const [modalOpen, setModalOpen] =
    useState(false);

  const [modalSheet, setModalSheet] =
    useState(false)

  const [formInfo, setFormInfo] =
    useState({})

  const [isEdit, setIsEdit] =
    useState(false);

  const [canLoadMore, setCanLoadMore] = useState(false);

  const {
    loading,
    scripts,

    scriptData,

    loadScripts,

    saveScript,
    updateScript,

    getScriptAction,
    deleteScriptAction,
  } = useApiScripts();

  useEffect(() => {
    if (
      !canLoadMore ||
      !isMobile ||
      !inView ||
      loading ||
      !scripts ||
      scripts.page >= scripts.total_pages
    ) {
      return;
    }

    loadScripts(scripts.page + 1, true);
  }, [
    inView,
    isMobile,
    loading,
    scripts,
    loadScripts,
  ]);

  useEffect(() => {
    if (
      !loading &&
      scripts &&
      scripts.page === 1
    ) {
      setCanLoadMore(true);
    }
  }, [loading, scripts]);

  const openCreateModal = () => {
    setSelectedScript(undefined);

    setIsEdit(false);

    setModalOpen(true);
  };

  const openSheet = (script: ScriptAction) => {
    setModalSheet(true)
    setFormInfo(script)
  }

  const openEditModal = async (
    uuid
  ) => {
    setIsEdit(true);

    const data = await getScriptAction(
      uuid
    );

    setSelectedScript(data);

    setModalOpen(true);
  };

  const handlerUpdateSaveScript = async (data) => {
    if (isEdit) {

      if (!data.uuid) return;

      const { uuid, ...payload } = data;

      await updateScript(data.uuid, payload)
    } else {

      await saveScript(data)

    }

    setModalOpen(false)
  }

  const handlerDeleteScript = async (uuid) => {
    if (!uuid) return

    await deleteScriptAction(uuid)
  }

  return (
    <>

      {loading && <Loader />}
      <MobileHeader 
        title={"Скрипты"}
      />
      <div className={styles.page}>
        <NavigationTabs />

        <div className={styles.header}>
          <div className={styles.heading}>
            {!isMobile ?
              <h1 className={styles.title}>
                Сценарии
              </h1> : <></>
            }

            <p className={styles.description}>
              Создавайте автоматизации для управления устройствами
              и объединяйте действия в единые сценарии.
            </p>

          </div>

          <div className={styles.actions}>
            {!isMobile ? (
              <>
                <Button
                  variant="primary"
                  onClick={openCreateModal}
                >
                  🞢 Добавить сценарий
                </Button>
              </>
            ) : (
              <BottomSlideButton>
                <Button
                  variant="primary"
                  onClick={openCreateModal}
                >
                  Добавить сценарий
                </Button>
              </BottomSlideButton>
            )}
          </div>
        </div>

        <div className={styles.list}>
          {scripts?.script_actions.map((script) => (
            <Card
              key={script.uuid}
              title={script.title}
              subTitle="Нажмите для редактирования"
              onClick={() =>
                openSheet(script)
              }
            />
          ))}
          {isMobile ? <div ref={ref} style={{ height: 1 }} /> : <></>}
        </div>

        {!isMobile ?
          <Pagination
            page={scripts?.page || 1}
            totalPages={scripts?.total_pages || 1}
            onChange={loadScripts}
          /> : <></>
        }

        <ScriptActionsSheet
          uuid={formInfo.uuid}
          open={modalSheet}
          title={formInfo.title}
          onClose={() => setModalSheet(false)}
          onEdit={openEditModal}
          onDelete={handlerDeleteScript}
        />

        <ScriptFormModal
          open={modalOpen}
          initialData={selectedScript}
          isEdit={isEdit}
          isOptionData={scriptData()}
          loading={loading}
          onCancel={() => setModalOpen(false)}
          onSave={async (data) => {
            await handlerUpdateSaveScript(data);
          }}
        />
      </div>
      <MobileNavigation />
    </>
  );
};
