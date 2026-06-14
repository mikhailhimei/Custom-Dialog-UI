import React, { useState } from 'react';

import { NavigationTabs } from '../../components/NavigationTabs/NavigationTabs';

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

import { useScenarios } from '../../hooks/useScenarios';

export const ScriptsPage = () => {
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

    getScriptAction,
    deleteScenario,
  } = useScenarios();

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

  return (
    <div className={styles.page}>
  <NavigationTabs />

  <div className={styles.header}>
    <div className={styles.heading}>
      <div className={styles.label}>
        Сценарии
      </div>

      <h1 className={styles.title}>
        Управление сценариями
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
        {scripts?.map((script) => (
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
        onChange={(page) => {
          console.log(page);
        }}
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

                  await deleteScenario(
                    selectedScript.uuid
                  );

                  setModalOpen(false);
                }}
              >
                Удалить
              </Button>
            )}

            <Button
              variant="secondary"
              onClick={() =>
                setModalOpen(false)
              }
            >
              Отмена
            </Button>

            <Button
              onClick={() => {
                console.log(formData);
              }}
            >
              Сохранить
            </Button>
          </>
        }
      >
        <ScriptForm
          initialData={selectedScript}
          isEdit={isEdit}
          onChange={setFormData}
        />
      </Modal>
    </div>
  );
};