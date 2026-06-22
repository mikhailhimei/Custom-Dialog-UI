import React, { useEffect, useMemo, useState } from "react";

import { Modal } from "../../components/Modal/Modal";
import { NavigationTabs } from "../../components/NavigationTabs/NavigationTabs";
import { Button } from "../../components/ui/Button/Button";
import { useTimerAlarmRequests } from "../../hooks/useTimerAlarmRequests";

import styles from "./TimerAlarmPages.module.scss";

const QUICK_MINUTES = [5, 10, 15, 30, 60];

const formatLeft = (seconds: number) => {
  const safe = Math.max(0, seconds);
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const secs = safe % 60;

  return [hours, minutes, secs].map((part) => String(part).padStart(2, "0")).join(":");
};

export const TimerPage = () => {
  const { createTimer, devices, loading, stopTimer, timers, toTimerSeconds } = useTimerAlarmRequests();
  const [modalOpen, setModalOpen] = useState(false);
  const [deviceId, setDeviceId] = useState("");
  const [minutes, setMinutes] = useState(5);
  const [remainingById, setRemainingById] = useState<Record<string, number>>({});

  useEffect(() => {
    setRemainingById((current) => Object.fromEntries(timers.map((timer) => [timer.uuid, current[timer.uuid] ?? toTimerSeconds(timer.timer_time)])));
  }, [timers, toTimerSeconds]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRemainingById((current) => Object.fromEntries(Object.entries(current).map(([uuid, seconds]) => [uuid, Math.max(0, seconds - 1)])));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const deviceName = useMemo(() => new Map(devices.map((device) => [device.id, device.name])), [devices]);

  const submit = async () => {
    if (!deviceId) return;

    await createTimer(deviceId, minutes);
    setModalOpen(false);
  };

  return (
    <div className={styles.page}>
      <NavigationTabs />

      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Таймер</h1>
          <p className={styles.description}>Создавайте таймеры для выбранных устройств и отслеживайте обратный отсчет.</p>
        </div>
        <Button onClick={() => setModalOpen(true)}>Создать</Button>
      </div>

      {loading && <div>Загрузка...</div>}

      <div className={styles.grid}>
        {timers.length ? timers.map((timer) => (
          <div className={styles.card} key={timer.uuid}>
            <div className={styles.cardHeader}>
              <div>
                <h2 className={styles.cardTitle}>{timer.name || "Таймер"}</h2>
                <div className={styles.meta}>Устройство: {deviceName.get(timer.device_id) || timer.device_id}</div>
              </div>
              <Button variant="ghost" onClick={() => stopTimer(timer)}>Стоп</Button>
            </div>
            <div className={styles.time}>{formatLeft(remainingById[timer.uuid] ?? toTimerSeconds(timer.timer_time))}</div>
          </div>
        )) : <div className={styles.empty}>Нет запущенных таймеров.</div>}
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Создать таймер" footer={<Button onClick={submit} disabled={!deviceId}>Создать</Button>}>
        <div className={styles.form}>
          <label className={styles.field}>
            <span className={styles.label}>Устройство</span>
            <select className={styles.select} value={deviceId} onChange={(event) => setDeviceId(event.target.value)}>
              <option value="">Выберите устройство</option>
              {devices.map((device) => <option key={device.id} value={device.id}>{device.name}</option>)}
            </select>
          </label>

          <div className={styles.field}>
            <span className={styles.label}>Быстрый старт</span>
            <div className={styles.quickTabs}>
              {QUICK_MINUTES.map((value) => (
                <button key={value} type="button" className={`${styles.quickTab} ${minutes === value ? styles.activeQuickTab : ""}`} onClick={() => setMinutes(value)}>
                  {value} мин
                </button>
              ))}
            </div>
          </div>

          <label className={styles.field}>
            <span className={styles.label}>Свое значение, минут</span>
            <input className={styles.input} type="number" min="1" value={minutes} onChange={(event) => setMinutes(Number(event.target.value) || 1)} />
          </label>
        </div>
      </Modal>
    </div>
  );
};
