import React, { useEffect, useMemo, useState } from "react";
import { Speaker, Trash2 } from "lucide-react";

import { useTimerAlarmRequests } from "../../hooks/useTimerAlarmRequests";
import { Modal } from "@/components/ui/Modal/Modal";
import { Button } from "@/components/ui/Button/Button";
import { NavigationTabs } from "@/components/NavigationTabs/NavigationTabs";
import { MobileNavigation } from "@/components/MobileNavigation/MobileNavigation";
import { MobileHeader } from "@/components/MobileHeader/MobileHeader";
import { Loader } from "@/components/ui/Loader";
import { useIsMobile } from "@/hooks/useIsMobile";
import { BottomSlideButton } from "@/components/ui/BottomSlideButton/BottomSlideButton";

import pageStyles from "./TimerAlarmPages.module.scss";
import styles from "../GlobalsPage.module.scss"

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
  const isMobile = useIsMobile();
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
          <div className={styles.heading}>
            {!isMobile ?
              <h1 className={styles.title}>
                Таймер
              </h1> : <></>
            }

            <p className={styles.description}>
              Создавайте таймеры через модальное окно и отслеживайте запущенные отсчеты.
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
          {timers.length ? timers.map((timer) => {
            const initialSeconds = toTimerSeconds(timer.timer_time);
            return (
              <div className={pageStyles.card} key={timer.uuid}>
                <div className={pageStyles.cardHeader}>
                  <div className={pageStyles.cardLead}>
                    <Speaker className={pageStyles.cardIcon} size={26} />
                    <div>
                      <h2 className={pageStyles.cardTitle}>{formatLeft(remainingById[timer.uuid] ?? initialSeconds)}</h2>
                      <div className={pageStyles.meta}>Заведен на {formatLeft(initialSeconds)} • {deviceName.get(timer.device_id) || timer.device_id}</div>
                    </div>
                  </div>
                  <Button variant="ghost" onClick={() => stopTimer(timer)}><Trash2 size={16} /></Button>
                </div>
              </div>
            );
          }) : <div className={pageStyles.empty}>Нет запущенных таймеров.</div>}
        </div>

        <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Создать таймер" footer={<Button onClick={submit} disabled={!deviceId}>Создать</Button>}>
          <div className={pageStyles.form}>
            <div className={pageStyles.wheelPicker} aria-label="Длительность таймера">
              {(["hours", "minutes", "seconds"] as const).map((unit) => (
                <label className={pageStyles.wheelColumn} key={unit}>
                  <span className={pageStyles.label}>{unit === "hours" ? "чч" : unit === "minutes" ? "мм" : "сс"}</span>
                  <select className={pageStyles.wheelSelect} value={duration[unit]} onChange={(event) => setDuration((current) => ({ ...current, [unit]: Number(event.target.value) }))}>
                    {Array.from({ length: unit === "hours" ? 24 : 60 }, (_, value) => <option key={value} value={value}>{String(value).padStart(2, "0")}</option>)}
                  </select>
                </label>
              ))}
            </div>

            <div className={pageStyles.field}>
              <span className={pageStyles.label}>Быстрое создание</span>
              <div className={pageStyles.quickTabs}>
                {QUICK_MINUTES.map((value) => <button key={value} type="button" className={`${pageStyles.quickTab} ${totalSeconds === value * 60 ? pageStyles.activeQuickTab : ""}`} onClick={() => setQuickMinutes(value)}>{value} мин</button>)}
              </div>
            </div>

            <label className={pageStyles.field}><span className={pageStyles.label}>Устройство воспроизведения</span><select className={pageStyles.select} value={deviceId} onChange={(event) => setDeviceId(event.target.value)}><option value="">Выберите устройство</option>{devices.map((device) => <option key={device.id} value={device.id}>{device.name}</option>)}</select></label>
            <label className={pageStyles.field}><span className={pageStyles.label}>Стартовая громкость</span><input className={pageStyles.input} type="range" min="0" max="1" step="0.05" value={volumeStart} onChange={(event) => setVolumeStart(Number(event.target.value))} /><span className={pageStyles.meta}>{Math.round(volumeStart * 100)}%</span></label>
          </div>
        </Modal>

        <MobileNavigation />
      </div>
    </>
  );
};
