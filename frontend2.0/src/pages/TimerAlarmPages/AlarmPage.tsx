import React, { useMemo, useState } from "react";

import { Modal } from "../../components/ui/Modal/Modal";
import { NavigationTabs } from "../../components/NavigationTabs/NavigationTabs";
import { useIsMobile } from "@/hooks/useIsMobile";
import { MobileNavigation } from "@/components/MobileNavigation/MobileNavigation"
import { Button } from "../../components/ui/Button/Button";
import { useTimerAlarmRequests } from "../../hooks/useTimerAlarmRequests";

import styles from "./TimerAlarmPages.module.scss";

export const AlarmPage = () => {
  const isMobile = useIsMobile();
  const { alarmTimeWidgets, alarms, createAlarm, deleteAlarm, devices, loading, updateAlarm } = useTimerAlarmRequests();
  const [modalOpen, setModalOpen] = useState(false);
  const [deviceId, setDeviceId] = useState("");
  const [time, setTime] = useState("08:00");
  const [volumeStart, setVolumeStart] = useState(0.3);

  const quickTimes = useMemo(() => {
    const values = alarmTimeWidgets.flatMap((widget) => widget.time || []);
    return Array.from(new Set(values)).filter(Boolean);
  }, [alarmTimeWidgets]);

  const deviceName = useMemo(() => new Map(devices.map((device) => [device.id, device.name])), [devices]);

  const submit = async () => {
    if (!deviceId || !time) return;

    await createAlarm(deviceId, time, volumeStart);
    setModalOpen(false);
  };

  return (
    <div className={styles.page}>
      <NavigationTabs />

      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Будильник</h1>
          <p className={styles.description}>Управляйте будильниками, временем срабатывания, устройством и состоянием.</p>
        </div>
        <Button onClick={() => setModalOpen(true)}>Создать</Button>
      </div>

      {loading && <div>Загрузка...</div>}

      <div className={styles.grid}>
        {alarms.length ? alarms.map((alarm) => (
          <div className={styles.card} key={alarm.uuid}>
            <div className={styles.cardHeader}>
              <div>
                <h2 className={styles.cardTitle}>{alarm.name || "Будильник"}</h2>
                <div className={styles.meta}>Устройство: {deviceName.get(alarm.device_id) || alarm.device_id}</div>
              </div>
              <Button variant="ghost" onClick={() => deleteAlarm(alarm)}>Удалить</Button>
            </div>

            <label className={`${styles.row} ${styles.meta}`}>
              <input className={styles.switch} type="checkbox" checked={alarm.status !== "off"} onChange={(event) => updateAlarm(alarm, { status: event.target.checked ? "on" : "off" })} />
              {alarm.status !== "off" ? "Включен" : "Выключен"}
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Время</span>
              <input className={styles.input} type="time" value={alarm.time} onChange={(event) => updateAlarm(alarm, { time: event.target.value })} />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Стартовая громкость</span>
              <input
                className={styles.input}
                type="number"
                min="0"
                max="1"
                step="0.05"
                value={alarm.volume_start ?? 0.3}
                onChange={(event) => updateAlarm(alarm, { volume_start: Number(event.target.value) })}
              />
            </label>
          </div>
        )) : <div className={styles.empty}>Нет запущенных будильников.</div>}
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Создать будильник" footer={<Button onClick={submit} disabled={!deviceId || !time}>Создать</Button>}>
        <div className={styles.form}>
          <div className={styles.field}>
            <span className={styles.label}>Быстрый старт</span>
            <div className={styles.quickTabs}>
              {quickTimes.length ? quickTimes.map((value) => (
                <button key={value} type="button" className={`${styles.quickTab} ${time === value ? styles.activeQuickTab : ""}`} onClick={() => setTime(value)}>
                  {value}
                </button>
              )) : <span className={styles.meta}>Нет быстрых значений из alarm_time_widget.</span>}
            </div>
          </div>

          <label className={styles.field}>
            <span className={styles.label}>Устройство</span>
            <select className={styles.select} value={deviceId} onChange={(event) => setDeviceId(event.target.value)}>
              <option value="">Выберите устройство</option>
              {devices.map((device) => <option key={device.id} value={device.id}>{device.name}</option>)}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Время</span>
            <input className={styles.input} type="time" value={time} onChange={(event) => setTime(event.target.value)} />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Стартовая громкость</span>
            <input
              className={styles.input}
              type="number"
              min="0"
              max="1"
              step="0.05"
              value={volumeStart}
              onChange={(event) => setVolumeStart(Number(event.target.value))}
            />
          </label>
        </div>
      </Modal>

      <MobileNavigation />
    </div>
  );
};
