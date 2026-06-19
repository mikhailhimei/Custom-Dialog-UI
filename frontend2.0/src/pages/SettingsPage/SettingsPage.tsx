import React, { useEffect, useState } from "react";

import { NavigationTabs } from "../../components/NavigationTabs/NavigationTabs";
import { Accordion } from "../../components/Accordion/Accordion";
import { Button } from "../../components/ui/Button/Button";
import { SettingsForm } from "../../components/SettingsForm/SettingsForm";

import styles from "./SettingsPage.module.scss";

import { Settings, YandexTTS } from "../../types/scripts";
import { useSettings } from "../../hooks/settings/useSettings";

const EMPTY_SETTINGS: Settings = {
  yandex_tts: {
    api_key: "",
    folderId: "",
    voice: "",
    speed: undefined,
    language: "",
    codec: undefined,
    emotion: undefined,
  },
};

// 🔥 DIFF функция (отправляет только изменения)
const getDiff = (current: Settings, initial: Settings) => {
  const result: any = {};

  const currentTTS = current.yandex_tts;
  const initialTTS = initial.yandex_tts;

  const diffTTS: any = {};

  Object.keys(currentTTS).forEach((key) => {
    const k = key as keyof typeof currentTTS;

    if (currentTTS[k] !== initialTTS[k]) {
      diffTTS[k] = currentTTS[k];
    }
  });

  if (Object.keys(diffTTS).length > 0) {
    result.yandex_tts = diffTTS;
  }

  return result;
};

export const SettingsPage = () => {
  const [yandexTTSData, setYandexTTSData] = useState<Settings>(EMPTY_SETTINGS);
  const [initialData, setInitialData] = useState<Settings>(EMPTY_SETTINGS);

  const { settings, saveSettings } = useSettings();

  // загрузка данных
  useEffect(() => {
    if (!settings) return;

    const normalize = normalizeTTS(settings.yandex_tts)   
    
    console.log(normalize)

    setYandexTTSData(normalize);
    setInitialData(settings);
  }, [settings]);

  // сохранение
  const handleSave = () => {
    const data: Settings = {"yandex_tts": yandexTTSData}
    const payload = getDiff(data, initialData);

    saveSettings(payload);
  };

  const normalizeTTS = (tts?: Partial<YandexTTS>): YandexTTS => {
      return {
        api_key: tts?.api_key ?? "",
        folderId: tts?.folderId ?? "",
        voice: tts?.voice ?? "",
        speed: tts?.speed ?? undefined,
        language: tts?.language ?? "",
        codec: tts?.codec ?? undefined,
        emotion: tts?.emotion ?? undefined,
      };
    };

  return (
    <div className={styles.page}>
      <NavigationTabs />

      <h1>Настройки</h1>

      <Accordion title="Яндекс TTS">
        <SettingsForm
          data={yandexTTSData}
          onChange={setYandexTTSData}
        />
      </Accordion>

      <Button onClick={handleSave}>
        Сохранить
      </Button>
    </div>
  );
};