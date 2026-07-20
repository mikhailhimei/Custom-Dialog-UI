import React, { useMemo, useState } from "react";
import { Speaker, Trash2 } from "lucide-react";

import { AlarmRepeat, useTimerAlarmRequests } from "../../hooks/useTimerAlarmRequests";
import { Modal } from "../../components/ui/Modal/Modal";
import { Button } from "../../components/ui/Button/Button";
import { NavigationTabs } from "../../components/NavigationTabs/NavigationTabs";
import { ToggleSwitch } from "@/components/ui/ToggleSwitch";
import { MobileNavigation } from "@/components/MobileNavigation/MobileNavigation";
import { MobileHeader } from "@/components/MobileHeader/MobileHeader";
import { Loader } from "@/components/ui/Loader";
import { BottomSlideButton } from "@/components/ui/BottomSlideButton/BottomSlideButton";
import { useIsMobile } from "@/hooks/useIsMobile";
import { AlarmActionsSheet } from "@/components/ModalEditAlarm/AlarmActionsSheet"

import pageStyles from "./TimerAlarmPages.module.scss";
import styles from "../GlobalsPage.module.scss"

const WEEK_DAYS = [
  { key: "mon", label: "Пн" }, { key: "tue", label: "Вт" }, { key: "wed", label: "Ср" }, { key: "thu", label: "Чт" }, { key: "fri", label: "Пт" }, { key: "sat", label: "Сб" }, { key: "sun", label: "Вс" },
];
const REPEAT_OPTIONS: { value: AlarmRepeat; label: string }[] = [
  { value: "once", label: "Однократно" }, { value: "daily", label: "Ежедневно" }, { value: "weekdays", label: "По будням" }, { value: "weekends", label: "По выходным" }, { value: "custom", label: "Кастом" },
];

const repeatText = (repeat: AlarmRepeat = "once", days: string[] = []) => {
  if (repeat === "daily") return "ежедневно";
  if (repeat === "weekdays") return "по будням";
  if (repeat === "weekends") return "по выходным";
  if (repeat === "custom") return days.length ? days.map((day) => WEEK_DAYS.find((item) => item.key === day)?.label || day).join(", ") : "кастом";
  return "однократно";
};

export const AlarmPage = () => {
  const isMobile = useIsMobile();

  const { alarmTimeWidgets, alarms, createAlarm, deleteAlarm, devices, loading, updateAlarm } = useTimerAlarmRequests();
  const [modalOpen, setModalOpen] = useState(false);
  const [repeatOpen, setRepeatOpen] = useState(false);
  const [detailsAlarmId, setDetailsAlarmId] = useState<string | null>(null);
  const [editingAlarmId, setEditingAlarmId] = useState<string | null>(null);
  const [deviceId, setDeviceId] = useState("");
  const [time, setTime] = useState("08:00");
  const [volumeStart, setVolumeStart] = useState(0.3);
  const [repeat, setRepeat] = useState<AlarmRepeat>("once");
  const [repeatDays, setRepeatDays] = useState<string[]>([]);

  const quickTimes = useMemo(() => Array.from(new Set(alarmTimeWidgets.flatMap((widget) => widget.time || []))).filter(Boolean), [alarmTimeWidgets]);
  const deviceName = useMemo(() => new Map(devices.map((device) => [device.id, device.name])), [devices]);
  const selectedAlarm = alarms.find((alarm) => alarm.uuid === detailsAlarmId) || null;

  const submit = async () => {
    if (!deviceId || !time) return;

    const editingAlarm = alarms.find((alarm) => alarm.uuid === editingAlarmId);
    if (editingAlarm) {
      await updateAlarm(editingAlarm, { device_id: deviceId, time, volume_start: volumeStart, repeat_type: repeat, repeat_days: repeatDays });
    } else {
      await createAlarm(deviceId, time, volumeStart, repeat, repeatDays);
    }
    setEditingAlarmId(null);
    setModalOpen(false);
  };

  const handleOpenEditModal = (command) => {
    setTime(command.time);
    setDeviceId(command.device_id);
    setVolumeStart(command.volume_start ?? 0.3);
    setRepeat(command.repeat_type ?? "once");
    setRepeatDays(command.repeat_days ?? []);
    setEditingAlarmId(command.uuid);
    setDetailsAlarmId(null);
    setModalOpen(true);
  }

  const toggleDay = (day: string) => setRepeatDays((current) => current.includes(day) ? current.filter((item) => item !== day) : [...current, day]);

  return (
    <>
      <MobileHeader title="Будильник" />
      <div className={styles.page}>
        <NavigationTabs />
        <div className={styles.header}>
          <div className={styles.heading}>
            {!isMobile ?
              <h1 className={styles.title}>
                Будильник
              </h1> : <></>
            }

            <p className={styles.description}>
              Создавайте будильники, настраивайте повторы, устройство и громкость.
            </p>

          </div>

          <div className={styles.actions}>
            {!isMobile ? (
              <Button
                variant="primary"
                onClick={() => setModalOpen(true)}
              >
                🞢 Создать
              </Button>
            ) : (
              <BottomSlideButton startVisible={true}>
                <Button
                  variant="primary"
                  onClick={() => setModalOpen(true)}
                >
                  Добавить сценарий
                </Button>
              </BottomSlideButton>
            )}
          </div>
        </div>

        {loading && <Loader />}

        <div className={pageStyles.grid}>
          {alarms.length ? alarms.map((alarm) => (
            <button className={`${pageStyles.card} ${pageStyles.cardButton}`} key={alarm.uuid} type="button" onClick={() => setDetailsAlarmId(alarm.uuid)}>
              <div className={pageStyles.cardHeader}>
                <div className={pageStyles.cardLead}><Speaker className={pageStyles.cardIcon} size={26} /><div><h2 className={pageStyles.cardTitle}>{alarm.time}</h2><div className={pageStyles.meta}>{repeatText(alarm.repeat_type, alarm.repeat_days)} • {deviceName.get(alarm.device_id) || alarm.device_id}</div></div></div>
                <div
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}>
                  <ToggleSwitch label="" checked={alarm.status !== "off"} onClick={(event) => event.stopPropagation()} onChange={(event) => updateAlarm(alarm, { status: event.currentTarget.checked ? "on" : "off" })} />
                </div>
              </div>
            </button>
          )) : <div className={pageStyles.empty}>Нет будильников.</div>}
        </div>

        <Modal open={modalOpen} onClose={() => { setModalOpen(false); setEditingAlarmId(null); }} title={editingAlarmId ? "Редактировать будильник" : "Создать будильник"} footer={<Button onClick={submit} disabled={!deviceId || !time}>Сохранить</Button>}>
          <div className={pageStyles.form}>
            <label className={pageStyles.wheelColumn}><span className={pageStyles.label}>Круговая чч мм</span><input className={`${pageStyles.input} ${pageStyles.timeInput}`} type="time" value={time} onChange={(event) => setTime(event.target.value)} /></label>
            <div className={pageStyles.field}><span className={pageStyles.label}>Ранее заводимые</span><div className={pageStyles.quickTabs}>{quickTimes.length ? quickTimes.map((value) => <button key={value} type="button" className={`${pageStyles.quickTab} ${time === value ? pageStyles.activeQuickTab : ""}`} onClick={() => setTime(value)}>{value}</button>) : <span className={pageStyles.meta}>Нет быстрых значений.</span>}</div></div>
            <label className={pageStyles.field}><span className={pageStyles.label}>Повторы</span><button type="button" className={pageStyles.selectButton} onClick={() => setRepeatOpen(true)}>{repeatText(repeat, repeatDays)}</button></label>
            <label className={pageStyles.field}><span className={pageStyles.label}>Устройство воспроизведения</span><select className={pageStyles} value={deviceId} onChange={(event) => setDeviceId(event.target.value)}><option value="">Выберите устройство</option>{devices.map((device) => <option key={device.id} value={device.id}>{device.name}</option>)}</select></label>
            <label className={pageStyles.field}><span className={pageStyles.label}>Стартовая громкость</span><input className={pageStyles.input} type="range" min="0" max="1" step="0.05" value={volumeStart} onChange={(event) => setVolumeStart(Number(event.target.value))} /><span className={pageStyles.meta}>{Math.round(volumeStart * 100)}%</span></label>
          </div>
        </Modal>

        <Modal open={repeatOpen} onClose={() => setRepeatOpen(false)} title="Повторы" footer={<Button onClick={() => setRepeatOpen(false)}>Готово</Button>}>
          <div className={pageStyles.form}>{REPEAT_OPTIONS.map((option) => <button key={option.value} type="button" className={`${pageStyles.quickTab} ${repeat === option.value ? pageStyles.activeQuickTab : ""}`} onClick={() => setRepeat(option.value)}>{option.label}</button>)}{repeat === "custom" && <div className={pageStyles.quickTabs}>{WEEK_DAYS.map((day) => <button key={day.key} type="button" className={`${pageStyles.quickTab} ${repeatDays.includes(day.key) ? pageStyles.activeQuickTab : ""}`} onClick={() => toggleDay(day.key)}>{day.label}</button>)}</div>}</div>
        </Modal>

        <AlarmActionsSheet
          open={Boolean(selectedAlarm)}
          onClose={() => setDetailsAlarmId(null)}
          command={selectedAlarm}
          onEdit={(command) => handleOpenEditModal(command)}
          onToggleStatus={(command, status) => updateAlarm(command, { status: status })}
          onDelete={(command) => { deleteAlarm(command); setDetailsAlarmId(null) }}
        />
        
        <MobileNavigation />
      </div>
    </>
  );
};
