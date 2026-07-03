import React, { useState } from 'react';

import { NavigationTabs } from '../../components/NavigationTabs/NavigationTabs';
import { useIsMobile } from "../../hooks/useIsMobile";
import { MobileNavigation } from "../../components/MobileNavigation/MobileNavigation";

import { Modal } from '../../components/Modal/Modal';
import { Pagination } from '../../components/Pagination/Pagination';
import { ScriptForm } from '../../components/ScriptForm/ScriptForm';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/ui/Button/Button';

import styles from "./ScriptsPage.module.scss";

import {
  ScriptAction,
  ScriptActionDetails,
} from '../../types/scripts';

import { useApiScripts } from '../../hooks/scriptActions/useApiScripts';

export const ScriptsPage = () => {
  const isMobile = useIsMobile();

  const [formData, setFormData] =
  useState<ScriptActionDetails>();
  
  const [selectedScript, setSelectedScript] =
    useState<ScriptActionDetails>();

  const [modalOpen, setModalOpen] =
    useState(false);

  const [isEdit, setIsEdit] =
    useState(false);

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

  const openCreateModal = () => {
    setSelectedScript(undefined);

    setIsEdit(false);

    setModalOpen(true);
  };

  const openEditModal = async (
    script: ScriptAction
  ) => {
    setIsEdit(true);

    const data = await getScriptAction(
      script.uuid
    );

    setSelectedScript(data);

    setModalOpen(true);
  };

  const handlerUpdateSaveScript = async () =>{
    if (isEdit){
      const uuid = formData?.uuid;

      if (!uuid) return;

      const { uuid: _uuid, ...payload } = formData;

      await updateScript(uuid, payload)
    }else{

      await saveScript(formData)
      
    } 

    setModalOpen(false)
  }

  return (
    <div className={styles.page}>
  {isMobile ? <MobileNavigation /> : <NavigationTabs />}

  <div className={styles.header}>
    <div className={styles.heading}>

      <h1 className={styles.title}>
        Создание запускающих скриптов
      </h1>

      <p className={styles.description}>
        Создавайте и редактируйте
        автоматизации и условия
      </p>
    </div>

    <div className={styles.actions}>
      <Button
        variant="primary"
        onClick={openCreateModal}
      >
        Добавить сценарий
      </Button>
    </div>
  </div>

      {loading && (
        <div>Загрузка...</div>
      )}

      <div className={styles.list}>
        {scripts?.script_actions.map((script) => (
          <Card
            key={script.uuid}
            title={script.title}
            onClick={() =>
              openEditModal(script)
            }
          />
        ))}
      </div>

      <Pagination
        page={scripts?.page || 1}
        totalPages={scripts?.total_pages || 1}
        onChange={loadScripts}
      />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={
          isEdit
            ? "Редактировать сценарий"
            : "Создать сценарий"
        }
        footer={
          <>
            {isEdit && (
              <Button
                variant="ghost"
                onClick={async () => {
                  if (!selectedScript?.uuid)
                    return;

                  await deleteScriptAction(
                    selectedScript.uuid
                  );

                  setModalOpen(false);
                }}
              >
                Удалить
              </Button>
            )}

            <Button
              onClick={handlerUpdateSaveScript}
            >
              Сохранить
            </Button>
          </>
        }
      >
        <ScriptForm
          initialData={selectedScript}
          isEdit={isEdit}
          isOptionData = {scriptData()}
          onChange={setFormData}
        />
      </Modal>
    </div>
  );
};