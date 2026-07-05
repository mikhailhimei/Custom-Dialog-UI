import React, { useEffect, useMemo, useRef, useState } from "react";

import { useDialogApi } from "../context/DialogContext";
import { Input } from "./ui/Input/Input";

import styles from "./CommandSearchInput.module.scss";

type CommandSearchOption = {
  title: string;
  uuid: string;
  actionType?: string;
};

type Props = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  onSelect?: (option: CommandSearchOption) => void;
};

export const CommandSearchInput = ({
  label = "uuid",
  value,
  onChange,
  onSelect,
}: Props) => {
  const api = useDialogApi();
  const [options, setOptions] = useState<CommandSearchOption[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const requestIdRef = useRef(0);

  const query = useMemo(() => value.trim(), [value]);

  useEffect(() => {
    if (query.length < 2) {
      setOptions([]);
      setOpen(false);
      return;
    }

    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;
    const timeoutId = window.setTimeout(async () => {
      setLoading(true);
      try {
        const response: any = await api.searchAssistantCommands(query);
        if (requestIdRef.current !== requestId) return;

        const data = Array.isArray(response?.data) ? response.data : [];
        setOptions(data);
        setOpen(data.length > 0);
      } finally {
        if (requestIdRef.current === requestId) {
          setLoading(false);
        }
      }
    }, 250);

    return () => window.clearTimeout(timeoutId);
  }, [api, query]);

  const handleSelect = (option: CommandSearchOption) => {
    onChange(option.uuid);
    onSelect?.(option);
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <Input
        label={label}
        value={value}
        autoComplete="off"
        placeholder="Начните вводить title или uuid"
        onBlur={() => window.setTimeout(() => setOpen(false), 150)}
        onFocus={() => setOpen(options.length > 0)}
        onChange={(event) => onChange(event.target.value)}
      />

      {open && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <button
              key={option.uuid}
              type="button"
              className={styles.option}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => handleSelect(option)}
            >
              <span className={styles.title}>{option.title || "Без названия"}</span>
              <span className={styles.uuid}>{option.uuid}</span>
            </button>
          ))}
        </div>
      )}

      {loading && <span className={styles.hint}>Поиск...</span>}
    </div>
  );
};
