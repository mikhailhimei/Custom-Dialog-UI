import React, { useEffect, useMemo, useRef, useState } from "react";

import { useDialogApi } from "../../context/DialogContext";
import { Input } from "../ui/Input/Input";

import styles from "./SearchInput.module.scss";

export type CommandSearchOption = {
  title: string;
  uuid: string;
  actionType?: string;
  mappingType?: string;
};

type SearchSource =
  | "assistant_commands"
  | "assistant_sub_commands"
  | "sub_direct_controls"
  | "sub_direct_control_samples";

type Props = {
  label?: string;
  value: string;
  selectedTitle?: string;
  searchSource?: SearchSource[];
  minQueryLength?: number;
  onChange: (value: string) => void;
  onSelect?: (option: CommandSearchOption) => void;
  getSelectedValue?: (option: CommandSearchOption) => string;
  error?: string;
};

export const SearchInput = ({
  label = "uuid",
  value,
  selectedTitle,
  searchSource = ["assistant_commands"],
  minQueryLength = 2,
  onChange,
  onSelect,
  getSelectedValue,
  error,
}: Props) => {
  const api = useDialogApi();

  const [options, setOptions] = useState<CommandSearchOption[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const requestIdRef = useRef(0);
  const lastSearchedQueryRef = useRef("");

  const query = useMemo(() => value.trim(), [value]);

  useEffect(() => {
    // Если поле очищено (pivot снят)
    // ничего не отправляем и разрешаем повторный поиск
    if (!query) {
      lastSearchedQueryRef.current = "";
      setOptions([]);
      setOpen(false);
      return;
    }

    if (query.length < minQueryLength) {
      setOptions([]);
      setOpen(false);
      return;
    }

    if (!isFocused) {
      return;
    }

    // Уже отправляли этот запрос
    if (lastSearchedQueryRef.current === query) {
      return;
    }

    lastSearchedQueryRef.current = query;

    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;

    const timeoutId = window.setTimeout(async () => {
      setLoading(true);

      try {
        let data: CommandSearchOption[] = [];

        for (const source of searchSource) {
          const response = await api.searchAssistantCommands(query, source);

          const dataResult = Array.isArray(response?.data)
            ? response.data
            : [];

          data.push(...dataResult);
        }

        if (requestIdRef.current !== requestId) {
          return;
        }

        setOptions(data);
        setOpen(data.length > 0);
      } finally {
        if (requestIdRef.current === requestId) {
          setLoading(false);
        }
      }
    }, 250);

    return () => window.clearTimeout(timeoutId);
  }, [api, query, searchSource, minQueryLength, isFocused]);

  const handleSelect = (option: CommandSearchOption) => {
    const selectedValue = getSelectedValue
      ? getSelectedValue(option)
      : option.uuid;

    onChange(selectedValue);
    onSelect?.(option);
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.labelRow}>
        <span className={styles.label}>{label}</span>
        {selectedTitle && (
          <span className={styles.selectedTitle}>{selectedTitle}</span>
        )}
      </div>

      <Input
        value={value}
        autoComplete="off"
        placeholder="Начните вводить title или uuid"
        error={error}
        onBlur={() => {
          setIsFocused(false);
          window.setTimeout(() => setOpen(false), 150);
        }}
        onFocus={() => {
          setIsFocused(true);
          setOpen(options.length > 0);
        }}
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
              <span className={styles.title}>
                {option.title || "Без названия"}
              </span>

              <span className={styles.uuid}>{option.uuid}</span>

              {option.mappingType && (
                <span className={styles.uuid}>
                  mappingType: {option.mappingType}
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {loading && <span className={styles.hint}>Поиск...</span>}
    </div>
  );
};