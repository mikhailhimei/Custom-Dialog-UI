import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { useDialogApi } from "../../context/DialogContext";
import { Input } from "../ui/Input/Input";

import styles from "./SearchInput.module.scss";

export type CommandSearchOption = {
  title: string;
  uuid: string;
  actionType?: string;
  mappingType?: string;
};

type SearchSource = "assistant_commands" | "assistant_sub_commands" | "sub_direct_controls" | "sub_direct_control_samples";

type Props = {
  label?: string;
  value: string;
  selectedTitle?: string;
  searchSource?: SearchSource;
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
  searchSource = "assistant_commands",
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
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const requestIdRef = useRef(0);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const query = useMemo(() => value.trim(), [value]);

  useEffect(() => {
    if (query.length < minQueryLength) {
      setOptions([]);
      setOpen(false);
      return;
    }

    if(!isFocused) return
    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;
    const timeoutId = window.setTimeout(async () => {
      setLoading(true);
      try {
        const response: any = await api.searchAssistantCommands(query, searchSource)

        const data = Array.isArray(response?.data) ? response.data : [];

        const isSame =
          data.length === options.length &&
          data.every((item, index) => item.uuid === options[index].uuid);

        if (isSame) return;

        setOptions(data);
        setOpen(data.length > 0);
      } finally {
        if (requestIdRef.current === requestId) {
          setLoading(false);
        }
      }
    }, 250);

    return () => window.clearTimeout(timeoutId);
  }, [api, query, searchSource, minQueryLength]);

  const handleSelect = (option: CommandSearchOption) => {
    const selectedValue = getSelectedValue
      ? getSelectedValue(option)
      : option.uuid;
    onChange(selectedValue);
    onSelect?.(option);
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const updateRect = () => {
      if (wrapperRef.current) setRect(wrapperRef.current.getBoundingClientRect());
    };
    updateRect();
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect, true);
    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect, true);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.labelRow}>
        <span className={styles.label}>{label}</span>
        {selectedTitle && <span className={styles.selectedTitle}>{selectedTitle}</span>}
      </div>

      <Input
        value={value}
        autoComplete="off"
        placeholder="Начните вводить title или uuid"
        error={error}
        onBlur={() => window.setTimeout(() => setOpen(false), 150)}
        onFocus={() => { 
          setIsFocused(true);
          setOpen(options.length > 0) 
        }}
        onChange={(event) => onChange(event.target.value)}
      />

      {open && rect && createPortal(
        <div
          className={styles.dropdown}
          style={{
            position: "fixed",
            left: rect.left,
            top: rect.bottom + 6,
            width: rect.width,
            zIndex: 200001,
          }}
        >
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
              {option.mappingType && <span className={styles.uuid}>mappingType: {option.mappingType}</span>}
            </button>
          ))}
        </div>,
        document.body
      )}

      {loading && <span className={styles.hint}>Поиск...</span>}
    </div>
  );
};
