import React, { useState } from 'react';

import { NavigationTabs } from '../../components/NavigationTabs/NavigationTabs';

import { Modal } from '../../components/Modal/Modal';
import { Pagination } from '../../components/Pagination/Pagination';
import { ScriptForm } from '../../components/ScriptForm/ScriptForm';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/ui/Button/Button';

import styles from "./CommandPage.module.scss";

import {
  ScriptAction,
  ScriptActionDetails,
} from '../../types/scripts';

import { useSettings } from '../../hooks/settings/useSettings';

export const CommandsPage = () => {
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
    
  } = useSettings();

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

      <h1 className={styles.title}>
        Комманды
      </h1>

      <p className={styles.description}>
        Создавайте и редактируйте
        автоматизации и условия
      </p>
    </div>
    </div>
    </div>
  );
};