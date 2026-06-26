import { useCallback, useEffect, useMemo, useState } from "react";

import { useDialogApi } from "../context/DialogContext";
import { AlarmRequest, AlarmTimeWidget, TimerAlarmDevice, TimerAlarmShortItem, TimerRequest } from "../types/timerAlarm";

const unwrapData = <T,>(response: any): T => response?.result?.data ?? response?.result ?? response?.data ?? response;

const getUtcFinishDate = (minutes: number) => {
  const safeMinutes = Math.max(1, Number(minutes) || 1);

  return new Date(Date.now() + safeMinutes * 60 * 1000).toISOString();
};

const toTimerSeconds = (timerTime: TimerRequest["timer_time"]): number => {
  if (typeof timerTime === "number") return timerTime;

  if (typeof timerTime === "string") {
    const parts = timerTime.split(":").map((part) => Number(part));

    if (parts.length === 3) return (parts[0] || 0) * 3600 + (parts[1] || 0) * 60 + (parts[2] || 0);
    if (parts.length === 2) return (parts[0] || 0) * 60 + (parts[1] || 0);

    return Number(timerTime) || 0;
  }

  if (timerTime && typeof timerTime === "object") {
    if (timerTime.date_end) {
      const dateEnd = Date.parse(timerTime.date_end);

      if (!Number.isNaN(dateEnd)) {
        return Math.max(0, Math.ceil((dateEnd - Date.now()) / 1000));
      }
    }

    return Number(timerTime.total_seconds) || toTimerSeconds(timerTime.count_timer || "");
  }

  return 0;
};

const formatTimerTime = (minutes: number) => {
  const safeMinutes = Math.max(1, Number(minutes) || 1);
  const hours = Math.floor(safeMinutes / 60);
  const mins = safeMinutes % 60;

  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}:00`;
};

const getResponseItems = (response: any): TimerAlarmShortItem[] => {
  const data = unwrapData<any>(response);

  return Array.isArray(data) ? data : Array.isArray(data?.data) ? data.data : [];
};

export function useTimerAlarmRequests() {
  const api = useDialogApi();

  const [timers, setTimers] = useState<TimerRequest[]>([]);
  const [alarms, setAlarms] = useState<AlarmRequest[]>([]);
  const [alarmTimeWidgets, setAlarmTimeWidgets] = useState<AlarmTimeWidget[]>([]);
  const [loading, setLoading] = useState(true);

  const devices = useMemo<TimerAlarmDevice[]>(() => api.getDevices(), [api]);

  const loadTimers = useCallback(async () => {
    const shortResponse = await api._getShort("get_timer_requests_short", 1, 100);
    const details = await Promise.all(
      getResponseItems(shortResponse).map(async (item) => {
        const response = await api._getDetail(item.uuid, "get_timer_request");
        return unwrapData<{ data: TimerRequest }>(response)?.data ?? unwrapData<TimerRequest>(response);
      })
    );

    setTimers(details.filter((timer): timer is TimerRequest => Boolean(timer) && timer.action_type === "create_timer"));
  }, [api]);

  const loadAlarms = useCallback(async () => {
    const shortResponse = await api._getShort("get_alarm_requests_short", 1, 100);
    const details = await Promise.all(
      getResponseItems(shortResponse).map(async (item) => {
        const response = await api._getDetail(item.uuid, "get_alarm_request");
        return unwrapData<{ data: AlarmRequest }>(response)?.data ?? unwrapData<AlarmRequest>(response);
      })
    );

    setAlarms(details.filter((alarm): alarm is AlarmRequest => Boolean(alarm) && alarm.action_type !== "delete_alarm"));
  }, [api]);

  const loadAlarmTimeWidgets = useCallback(async () => {
    const shortResponse = await api._getShort("get_alarm_time_widgets_short", 1, 100);
    const details = await Promise.all(
      getResponseItems(shortResponse).map(async (item) => {
        const response = await api._getDetail(item.uuid, "get_alarm_time_widget");
        return unwrapData<{ data: AlarmTimeWidget }>(response)?.data ?? unwrapData<AlarmTimeWidget>(response);
      })
    );

    setAlarmTimeWidgets(details.filter(Boolean));
  }, [api]);

  const loadAll = useCallback(async () => {
    setLoading(true);

    try {
      await Promise.all([loadTimers(), loadAlarms(), loadAlarmTimeWidgets()]);
    } finally {
      setLoading(false);
    }
  }, [loadAlarms, loadAlarmTimeWidgets, loadTimers]);

  useEffect(() => {
    // Load timers/alarms once on mount to avoid continuous polling
    loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createTimer = async (deviceId: string, minutes: number) => {
    const timerTime = {
      count_timer: formatTimerTime(minutes),
      date_end: getUtcFinishDate(minutes),
      total_seconds: Math.max(1, Number(minutes) || 1) * 60,
    };

    await api._save({ name: `Таймер ${minutes} мин`, action_type: "create_timer", device_id: deviceId, timer_time: timerTime }, "save_timer_request");
    await loadTimers();
  };

  const stopTimer = async (timer: TimerRequest) => {
    await api._delete(timer.uuid, "delete_timer_request");
    await loadTimers();
  };

  const createAlarm = async (deviceId: string, time: string) => {
    await api._save({ name: `Будильник ${time}`, action_type: "create_alarm", device_id: deviceId, status: "on", time }, "save_alarm_request");
    await loadAlarms();
  };

  const updateAlarm = async (alarm: AlarmRequest, data: Partial<AlarmRequest>) => {
    await api._update(alarm.uuid, "update_alarm_request", { ...alarm, action_type: "edit_alarm", ...data });
    await loadAlarms();
  };

  const deleteAlarm = async (alarm: AlarmRequest) => {
    await api._delete(alarm.uuid, "delete_alarm_request");
    await loadAlarms();
  };

  return {
    alarmTimeWidgets,
    alarms,
    createAlarm,
    createTimer,
    deleteAlarm,
    devices,
    loading,
    stopTimer,
    timers,
    toTimerSeconds,
    updateAlarm,
  };
}
