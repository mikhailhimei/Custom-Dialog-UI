import React from "react";

import { YandexTTS } from "../../types/scripts";
import { Input } from "../ui/Input/Input";

interface Props {
  data: YandexTTS;
  onChange: (data: YandexTTS) => void;
}

export const SettingsForm = ({ data, onChange }: Props) => {
  const updateField = (
    key: keyof YandexTTS,
    value: any
  ) => {
    onChange({
      ...data,
      [key]: value,
    });
  };

  return (
    <div>
      <Input
        label="API Key"
        value={data.api_key ?? ""}
        onChange={(e) =>
          updateField("api_key", e.target.value)
        }
      />

      <Input
        label="Folder ID"
        value={data.folderId ?? ""}
        onChange={(e) =>
          updateField("folderId", e.target.value)
        }
      />

      <Input
        label="Voice"
        value={data.voice ?? ""}
        onChange={(e) =>
          updateField("voice", e.target.value)
        }
      />
    </div>
  );
};