import React, { useEffect, useState } from 'react';

import { NavigationTabs } from '../../components/NavigationTabs/NavigationTabs';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/ui/Button/Button';
import { Input } from '../../components/ui/Input/Input';

import styles from "./CommandPage.module.scss";

import {
  AssistantCommandDetails,
  AssistantCommandShort,
  NextActionItem,
  NextDirectControlItem,
  VoiceResponseItem,
} from '../../types/assistantCommands';

import { useAssistantCommands } from '../../hooks/assistantCommands/useAssistantCommands';

const emptyCommand = (): AssistantCommandDetails => ({
  status: true,
  title: '',
  componentDialog: {
    endStatus: true,
    actionType: '',
    answerType: '',
    voiceCommands: [],
    nextDirectControl: [],
    voiceResponseArray: [],
    nextAction: [],
  },
});

const normalizeCommand = (
  command?: AssistantCommandDetails
): AssistantCommandDetails => ({
  ...emptyCommand(),
  ...command,
  componentDialog: {
    ...emptyCommand().componentDialog,
    ...(command?.componentDialog ?? {}),
    voiceCommands: command?.componentDialog?.voiceCommands ?? [],
    nextDirectControl: command?.componentDialog?.nextDirectControl ?? [],
    voiceResponseArray: command?.componentDialog?.voiceResponseArray ?? [],
    nextAction: command?.componentDialog?.nextAction ?? [],
  },
});

interface FormProps {
  value: AssistantCommandDetails;
  onChange: (value: AssistantCommandDetails) => void;
}

const AssistantCommandForm = ({
  value,
  onChange,
}: FormProps) => {
  const update = (
    patch: Partial<AssistantCommandDetails>
  ) => onChange({ ...value, ...patch });

  const updateDialog = (
    patch: Partial<AssistantCommandDetails['componentDialog']>
  ) => onChange({
    ...value,
    componentDialog: {
      ...value.componentDialog,
      ...patch,
    },
  });

  const updateDirectControl = (
    index: number,
    patch: Partial<NextDirectControlItem>
  ) => {
    const items = [...value.componentDialog.nextDirectControl];
    items[index] = { ...items[index], ...patch };
    updateDialog({ nextDirectControl: items });
  };

  const updateVoiceResponse = (
    index: number,
    patch: Partial<VoiceResponseItem>
  ) => {
    const items = [...value.componentDialog.voiceResponseArray];
    items[index] = { ...items[index], ...patch };
    updateDialog({ voiceResponseArray: items });
  };

  const updateNextAction = (
    index: number,
    patch: Partial<NextActionItem>
  ) => {
    const items = [...value.componentDialog.nextAction];
    items[index] = { ...items[index], ...patch };
    updateDialog({ nextAction: items });
  };

  return (
    <div className={styles.form}>
      <Input
        label="Название команды"
        value={value.title}
        onChange={(event) => update({ title: event.target.value })}
      />

      <label className={styles.checkboxRow}>
        <input
          type="checkbox"
          checked={value.status}
          onChange={(event) => update({ status: event.target.checked })}
        />
        Команда включена
      </label>

      <label className={styles.checkboxRow}>
        <input
          type="checkbox"
          checked={value.componentDialog.endStatus}
          onChange={(event) => updateDialog({ endStatus: event.target.checked })}
        />
        endStatus
      </label>

      <div className={styles.grid}>
        <Input
          label="actionType"
          value={value.componentDialog.actionType}
          onChange={(event) => updateDialog({ actionType: event.target.value })}
        />

        <Input
          label="answerType"
          value={value.componentDialog.answerType}
          onChange={(event) => updateDialog({ answerType: event.target.value })}
        />
      </div>

      <label className={styles.fieldLabel}>
        voiceCommands
      </label>
      <textarea
        className={styles.textarea}
        value={value.componentDialog.voiceCommands.join('\n')}
        onChange={(event) => updateDialog({
          voiceCommands: event.target.value
            .split('\n')
            .map((item) => item.trim())
            .filter(Boolean),
        })}
        placeholder={'Удали таймер ${count}\nУдали таймер'}
      />

      <details className={styles.accordion} open>
        <summary>nextDirectControl</summary>
        {value.componentDialog.nextDirectControl.map((item, index) => (
          <div className={styles.accordionItem} key={index}>
            <Input
              label="uuid"
              value={item.uuid}
              onChange={(event) => updateDirectControl(index, { uuid: event.target.value })}
            />
            <Button
              variant="ghost"
              type="button"
              onClick={() => updateDialog({
                nextDirectControl: value.componentDialog.nextDirectControl.filter((_, itemIndex) => itemIndex !== index),
              })}
            >
              Удалить
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="secondary"
          onClick={() => updateDialog({
            nextDirectControl: [
              ...value.componentDialog.nextDirectControl,
              { uuid: '' },
            ],
          })}
        >
          Добавить ещё
        </Button>
      </details>

      <details className={styles.accordion} open>
        <summary>voiceResponseArray</summary>
        {value.componentDialog.voiceResponseArray.map((item, index) => (
          <div className={styles.accordionItem} key={index}>
            <Input
              label="actionType"
              value={item.actionType}
              onChange={(event) => updateVoiceResponse(index, { actionType: event.target.value })}
            />
            <Input
              label="voiceResponse"
              value={item.voiceResponse}
              onChange={(event) => updateVoiceResponse(index, { voiceResponse: event.target.value })}
            />
            <Button
              variant="ghost"
              type="button"
              onClick={() => updateDialog({
                voiceResponseArray: value.componentDialog.voiceResponseArray.filter((_, itemIndex) => itemIndex !== index),
              })}
            >
              Удалить
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="secondary"
          onClick={() => updateDialog({
            voiceResponseArray: [
              ...value.componentDialog.voiceResponseArray,
              { actionType: '', voiceResponse: '' },
            ],
          })}
        >
          Добавить ещё
        </Button>
      </details>

      <details className={styles.accordion} open>
        <summary>nextAction</summary>
        {value.componentDialog.nextAction.map((item, index) => (
          <div className={styles.accordionItem} key={index}>
            <Input
              label="actionTypeComponent"
              value={item.actionTypeComponent}
              onChange={(event) => updateNextAction(index, { actionTypeComponent: event.target.value })}
            />
            <Input
              label="actionType"
              value={item.actionType}
              onChange={(event) => updateNextAction(index, { actionType: event.target.value })}
            />
            <Input
              label="uuid"
              value={item.uuid}
              onChange={(event) => updateNextAction(index, { uuid: event.target.value })}
            />
            <Button
              variant="ghost"
              type="button"
              onClick={() => updateDialog({
                nextAction: value.componentDialog.nextAction.filter((_, itemIndex) => itemIndex !== index),
              })}
            >
              Удалить
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="secondary"
          onClick={() => updateDialog({
            nextAction: [
              ...value.componentDialog.nextAction,
              { actionTypeComponent: '', actionType: '', uuid: '' },
            ],
          })}
        >
          Добавить ещё
        </Button>
      </details>
    </div>
  );
};

export const CommandsPage = () => {
  const [selectedCommand, setSelectedCommand] =
    useState<AssistantCommandDetails>(emptyCommand());
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [actionCommand, setActionCommand] =
    useState<AssistantCommandShort | null>(null);

  const {
    loading,
    commands,
    getCommand,
    saveCommand,
    updateCommand,
    deleteCommand,
    enableCommand,
  } = useAssistantCommands();

  useEffect(() => {
    if (!modalOpen) {
      setSelectedCommand(emptyCommand());
    }
  }, [modalOpen]);

  const openCreateModal = () => {
    setSelectedCommand(emptyCommand());
    setIsEdit(false);
    setModalOpen(true);
  };

  const openEditModal = async (
    command: AssistantCommandShort
  ) => {
    setIsEdit(true);
    const data = await getCommand(command.uuid);
    setSelectedCommand(normalizeCommand(data));
    setModalOpen(true);
  };

  const handleSave = async () => {
    const payload = normalizeCommand(selectedCommand);

    if (isEdit && payload.uuid) {
      const { uuid, ...data } = payload;
      await updateCommand(uuid, data);
    } else {
      const { uuid, ...data } = payload;
      await saveCommand(data as AssistantCommandDetails);
    }

    setModalOpen(false);
  };

  return (
    <div className={styles.page}>
      <NavigationTabs />

      <div className={styles.headerTop}>
        <div>
          <h1 className={styles.title}>
            Assistant commands
          </h1>

          <p className={styles.description}>
            Создавайте и редактируйте команды ассистента
          </p>
        </div>

        <Button onClick={openCreateModal}>
          Создать команду
        </Button>
      </div>

      {loading && <div className={styles.state}>Загрузка...</div>}

      <div className={styles.commandTabs}>
        {commands?.data?.map((command) => (
          <div
            className={`${styles.commandTab} ${!command.status ? styles.disabled : ''}`}
            key={command.uuid}
          >
            <button
              type="button"
              className={styles.commandTitle}
              onClick={() => openEditModal(command)}
            >
              {command.title}
            </button>

            <button
              type="button"
              className={styles.kebab}
              onClick={() => setActionCommand(command)}
              aria-label="Открыть действия команды"
            >
              ⋯
            </button>
          </div>
        ))}
      </div>

      {actionCommand && (
        <div
          className={styles.sheetOverlay}
          onClick={() => setActionCommand(null)}
        >
          <div
            className={styles.bottomSheet}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.sheetHandle} />
            <h3>{actionCommand.title}</h3>

            {!actionCommand.status && (
              <Button
                fullWidth
                onClick={async () => {
                  await enableCommand(actionCommand.uuid);
                  setActionCommand(null);
                }}
              >
                Включить
              </Button>
            )}

            <Button
              fullWidth
              variant="ghost"
              onClick={async () => {
                await deleteCommand(actionCommand.uuid);
                setActionCommand(null);
              }}
            >
              Удалить
            </Button>
          </div>
        </div>
      )}

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={isEdit ? 'Данные команды' : 'Создать команду'}
        footer={
          <>
            {isEdit && selectedCommand.uuid && (
              <Button
                variant="ghost"
                onClick={async () => {
                  await deleteCommand(selectedCommand.uuid!);
                  setModalOpen(false);
                }}
              >
                Удалить
              </Button>
            )}

            <Button onClick={handleSave}>
              Сохранить
            </Button>
          </>
        }
      >
        <AssistantCommandForm
          value={selectedCommand}
          onChange={setSelectedCommand}
        />
      </Modal>
    </div>
  );
};
