import React, { useState } from 'react';

import { NavigationTabs } from '../../../NavigationTabs';

import { Modal } from '../../components/Modal/Modal';
import { Pagination } from '../../components/Pagination/Pagination';
import { ScriptForm } from '../../components/ScriptForm/ScriptForm';

import styles from "./ScriptsPage.module.scss";

import {
  ScriptAction,
  ScriptActionDetails,
} from '../../types/scripts';

import { useScenarios } from '../../hooks/useScenarios';

export const ScriptsPage = () => {
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
        <div>
          <h1>Сценарии</h1>

          <p>
            Управление сценариями
          </p>
        </div>

        <button onClick={openCreateModal}>
          Добавить
        </button>
      </div>

      {loading && (
        <div>Загрузка...</div>
      )}

      <div className={styles.list}>
        {scripts?.map((script) => (
          <button
            key={script.uuid}
            onClick={() =>
              openEditModal(script)
            }
          >
            {script.title}
          </button>
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
      >
        <ScriptForm
          initialData={selectedScript}
          isEdit={isEdit}
          onSave={(data) => {
            console.log(data);
          }}
          onDelete={async () => {
            if (!selectedScript?.uuid) return;

            await deleteScenario(
              selectedScript.uuid
            );

            setModalOpen(false);
          }}
        />
      </Modal>
    </div>
  );
};