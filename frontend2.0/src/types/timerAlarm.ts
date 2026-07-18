export type AlarmRepeat = "once" | "daily" | "weekdays" | "weekends" | "custom";

export interface TimerRequest {
  uuid: string;
  name: string;
  action_type: "create_timer" | "delete_timer";
  device_id: string;
  timer_time: string | { count_timer?: string; date_end?: string };
  volume_start?: number;
}

export interface AlarmRequest {
  uuid: string;
  name: string;
  action_type: "create_alarm" | "delete_alarm" | "edit_alarm";
  device_id: string;
  status: string;
  time: string;
  volume_start?: number;
  repeat_type?: AlarmRepeat;
  repeat_days?: string[];
}

export interface AlarmTimeWidget {
  uuid: string;
  name: string;
  action_type: "create_time_widget" | "edit_time_widget" | "delete_time_widget";
  time: string[];
}

export interface TimerAlarmShortItem {
  uuid: string;
  title: string;
  action_type: string;
}

export interface TimerAlarmShortResponse {
  data: TimerAlarmShortItem[];
  page: number;
  page_size: number;
  total_pages: number;
  total_items: number;
}

export interface TimerAlarmDevice {
  id: string;
  name: string;
}
