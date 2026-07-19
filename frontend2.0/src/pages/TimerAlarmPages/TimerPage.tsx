import React, { useEffect, useMemo, useState } from "react";
import { Speaker, Trash2 } from "lucide-react";

import { useTimerAlarmRequests } from "../../hooks/useTimerAlarmRequests";
import { Modal } from "@/components/ui/Modal/Modal";
import { Button } from "@/components/ui/Button/Button";
import { NavigationTabs } from "@/components/NavigationTabs/NavigationTabs";
import { MobileNavigation } from "@/components/MobileNavigation/MobileNavigation";
import { MobileHeader } from "@/components/MobileHeader/MobileHeader";
import { Loader } from "@/components/ui/Loader";

import styles from "./TimerAlarmPages.module.scss";

const QUICK_MINUTES = [5, 10, 15, 30, 45, 60];

const formatLeft = (seconds: number) => {
  const safe = Math.max(0, seconds);
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const secs = safe % 60;

  return [hours, minutes, secs].map((part) => String(part).padStart(2, "0")).join(":");
};

const parseTotalSeconds = (hours: number, minutes: number, seconds: number) => Math.max(1, hours * 3600 + minutes * 60 + seconds);

const toParts = (totalSeconds: number) => ({
  hours: Math.floor(totalSeconds / 3600),
  minutes: Math.floor((totalSeconds % 3600) / 60),
  seconds: totalSeconds % 60,
});

export const TimerPage = () => {
  const { createTimer, devices, loading, stopTimer, timers, toTimerSeconds } = useTimerAlarmRequests();
  const [modalOpen, setModalOpen] = useState(false);
  const [deviceId, setDeviceId] = useState("");
  const [volumeStart, setVolumeStart] = useState(0.3);
  const [duration, setDuration] = useState({ hours: 0, minutes: 5, seconds: 0 });
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
  const totalSeconds = parseTotalSeconds(duration.hours, duration.minutes, duration.seconds);

  const submit = async () => {
    if (!deviceId) return;

    await createTimer(deviceId, totalSeconds, volumeStart);
    setModalOpen(false);
  };

  const setQuickMinutes = (minutes: number) => setDuration(toParts(minutes * 60));

  return (
    <>
      <MobileHeader title="Таймер" />
      <div className={styles.page}>
      <NavigationTabs />

      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Таймер</h1>
          <p className={styles.description}>Создавайте таймеры через модальное окно и отслеживайте запущенные отсчеты.</p>
        </div>
        <Button onClick={() => setModalOpen(true)}>Создать</Button>
      </div>

      {loading && <Loader />}

      <div className={styles.grid}>
        {timers.length ? timers.map((timer) => {
          const initialSeconds = toTimerSeconds(timer.timer_time);
          return (
            <div className={styles.card} key={timer.uuid}>
              <div className={styles.cardHeader}>
                <div className={styles.cardLead}>
                  <Speaker className={styles.cardIcon} size={26} />
                  <div>
                    <h2 className={styles.cardTitle}>{formatLeft(remainingById[timer.uuid] ?? initialSeconds)}</h2>
                    <div className={styles.meta}>Заведен на {formatLeft(initialSeconds)} • {deviceName.get(timer.device_id) || timer.device_id}</div>
                  </div>
                </div>
                <Button variant="ghost" onClick={() => stopTimer(timer)}><Trash2 size={16} /></Button>
              </div>
            </div>
          );
        }) : <div className={styles.empty}>Нет запущенных таймеров.</div>}
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Создать таймер" footer={<Button onClick={submit} disabled={!deviceId}>Создать</Button>}>
        <div className={styles.form}>
          <div className={styles.wheelPicker} aria-label="Длительность таймера">
            {(["hours", "minutes", "seconds"] as const).map((unit) => (
              <label className={styles.wheelColumn} key={unit}>
                <span className={styles.label}>{unit === "hours" ? "чч" : unit === "minutes" ? "мм" : "сс"}</span>
                <select className={styles.wheelSelect} value={duration[unit]} onChange={(event) => setDuration((current) => ({ ...current, [unit]: Number(event.target.value) }))}>
                  {Array.from({ length: unit === "hours" ? 24 : 60 }, (_, value) => <option key={value} value={value}>{String(value).padStart(2, "0")}</option>)}
                </select>
              </label>
            ))}
          </div>

          <div className={styles.field}>
            <span className={styles.label}>Быстрое создание</span>
            <div className={styles.quickTabs}>
              {QUICK_MINUTES.map((value) => <button key={value} type="button" className={`${styles.quickTab} ${totalSeconds === value * 60 ? styles.activeQuickTab : ""}`} onClick={() => setQuickMinutes(value)}>{value} мин</button>)}
            </div>
          </div>

          <label className={styles.field}><span className={styles.label}>Устройство воспроизведения</span><select className={styles.select} value={deviceId} onChange={(event) => setDeviceId(event.target.value)}><option value="">Выберите устройство</option>{devices.map((device) => <option key={device.id} value={device.id}>{device.name}</option>)}</select></label>
          <label className={styles.field}><span className={styles.label}>Стартовая громкость</span><input className={styles.input} type="range" min="0" max="1" step="0.05" value={volumeStart} onChange={(event) => setVolumeStart(Number(event.target.value))} /><span className={styles.meta}>{Math.round(volumeStart * 100)}%</span></label>
        </div>
      </Modal>

        <MobileNavigation />
      </div>
    </>
  );
};
