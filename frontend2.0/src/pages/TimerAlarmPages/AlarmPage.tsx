import React, { useMemo, useState } from "react";
import { Speaker, Trash2 } from "lucide-react";

import { AlarmRepeat, useTimerAlarmRequests } from "../../hooks/useTimerAlarmRequests";
import { Modal } from "../../components/ui/Modal/Modal";
import { Button } from "../../components/ui/Button/Button";
import { NavigationTabs } from "../../components/NavigationTabs/NavigationTabs";
import { MobileNavigation } from "@/components/MobileNavigation/MobileNavigation";

import styles from "./TimerAlarmPages.module.scss";

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

  const toggleDay = (day: string) => setRepeatDays((current) => current.includes(day) ? current.filter((item) => item !== day) : [...current, day]);

  return (
    <div className={styles.page}>
      <NavigationTabs />
      <div className={styles.header}><div><h1 className={styles.title}>Будильник</h1><p className={styles.description}>Создавайте будильники, настраивайте повторы, устройство и громкость.</p></div><Button onClick={() => setModalOpen(true)}>Создать</Button></div>
      {loading && <div>Загрузка...</div>}

      <div className={styles.grid}>
        {alarms.length ? alarms.map((alarm) => (
          <button className={`${styles.card} ${styles.cardButton}`} key={alarm.uuid} type="button" onClick={() => setDetailsAlarmId(alarm.uuid)}>
            <div className={styles.cardHeader}>
              <div className={styles.cardLead}><Speaker className={styles.cardIcon} size={26} /><div><h2 className={styles.cardTitle}>{alarm.time}</h2><div className={styles.meta}>{repeatText(alarm.repeat_type, alarm.repeat_days)} • {deviceName.get(alarm.device_id) || alarm.device_id}</div></div></div>
              <input className={styles.switch} type="checkbox" checked={alarm.status !== "off"} onClick={(event) => event.stopPropagation()} onChange={(event) => updateAlarm(alarm, { status: event.target.checked ? "on" : "off" })} />
            </div>
          </button>
        )) : <div className={styles.empty}>Нет будильников.</div>}
      </div>

      <Modal open={modalOpen} onClose={() => { setModalOpen(false); setEditingAlarmId(null); }} title={editingAlarmId ? "Редактировать будильник" : "Создать будильник"} footer={<Button onClick={submit} disabled={!deviceId || !time}>Сохранить</Button>}>
        <div className={styles.form}>
          <label className={styles.wheelColumn}><span className={styles.label}>Круговая чч мм</span><input className={`${styles.input} ${styles.timeInput}`} type="time" value={time} onChange={(event) => setTime(event.target.value)} /></label>
          <div className={styles.field}><span className={styles.label}>Ранее заводимые</span><div className={styles.quickTabs}>{quickTimes.length ? quickTimes.map((value) => <button key={value} type="button" className={`${styles.quickTab} ${time === value ? styles.activeQuickTab : ""}`} onClick={() => setTime(value)}>{value}</button>) : <span className={styles.meta}>Нет быстрых значений.</span>}</div></div>
          <label className={styles.field}><span className={styles.label}>Повторы</span><button type="button" className={styles.selectButton} onClick={() => setRepeatOpen(true)}>{repeatText(repeat, repeatDays)}</button></label>
          <label className={styles.field}><span className={styles.label}>Устройство воспроизведения</span><select className={styles.select} value={deviceId} onChange={(event) => setDeviceId(event.target.value)}><option value="">Выберите устройство</option>{devices.map((device) => <option key={device.id} value={device.id}>{device.name}</option>)}</select></label>
          <label className={styles.field}><span className={styles.label}>Стартовая громкость</span><input className={styles.input} type="range" min="0" max="1" step="0.05" value={volumeStart} onChange={(event) => setVolumeStart(Number(event.target.value))} /><span className={styles.meta}>{Math.round(volumeStart * 100)}%</span></label>
        </div>
      </Modal>

      <Modal open={repeatOpen} onClose={() => setRepeatOpen(false)} title="Повторы" footer={<Button onClick={() => setRepeatOpen(false)}>Готово</Button>}>
        <div className={styles.form}>{REPEAT_OPTIONS.map((option) => <button key={option.value} type="button" className={`${styles.quickTab} ${repeat === option.value ? styles.activeQuickTab : ""}`} onClick={() => setRepeat(option.value)}>{option.label}</button>)}{repeat === "custom" && <div className={styles.quickTabs}>{WEEK_DAYS.map((day) => <button key={day.key} type="button" className={`${styles.quickTab} ${repeatDays.includes(day.key) ? styles.activeQuickTab : ""}`} onClick={() => toggleDay(day.key)}>{day.label}</button>)}</div>}</div>
      </Modal>

      <Modal open={Boolean(selectedAlarm)} onClose={() => setDetailsAlarmId(null)} title="Будильник">
        {selectedAlarm && <div className={styles.form}><div className={styles.time}>{selectedAlarm.time}</div><div className={styles.meta}>{repeatText(selectedAlarm.repeat_type, selectedAlarm.repeat_days)} • {deviceName.get(selectedAlarm.device_id) || selectedAlarm.device_id}</div><label className={`${styles.row} ${styles.meta}`}><input className={styles.switch} type="checkbox" checked={selectedAlarm.status !== "off"} onChange={(event) => updateAlarm(selectedAlarm, { status: event.target.checked ? "on" : "off" })} />{selectedAlarm.status !== "off" ? "Включен" : "Выключен"}</label><Button onClick={() => { setTime(selectedAlarm.time); setDeviceId(selectedAlarm.device_id); setVolumeStart(selectedAlarm.volume_start ?? 0.3); setRepeat(selectedAlarm.repeat_type ?? "once"); setRepeatDays(selectedAlarm.repeat_days ?? []); setEditingAlarmId(selectedAlarm.uuid); setDetailsAlarmId(null); setModalOpen(true); }}>Редактировать</Button><Button variant="ghost" onClick={() => { deleteAlarm(selectedAlarm); setDetailsAlarmId(null); }}><Trash2 size={16} /> Удалить</Button></div>}
      </Modal>
      <MobileNavigation />
    </div>
  );
};
