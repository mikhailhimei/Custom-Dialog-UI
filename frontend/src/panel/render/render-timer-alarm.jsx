export const renderTimerAlarm = (ctx) => {
  if (!ctx._timerAlarmLoaded) {
    if (!ctx._timerAlarmLoading) {
      ctx._ensureTimerAlarmModule();
    }

    return `
        <section class="hero-card">
          <h1>Timer / Alarm</h1>
          <div class="status ok">Модуль timer/alarm загружается...</div>
        </section>
      `;
  }

  return `
      <section class="hero-card">
        <h1>Timer / Alarm</h1>
      </section>
      <dialog-custom-ui-timer-alarm></dialog-custom-ui-timer-alarm>
    `;
};
