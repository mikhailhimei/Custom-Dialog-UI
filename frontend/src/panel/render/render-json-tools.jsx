import React from 'react';

export const renderJsonTools = (ctx) => {
  const payload = ctx._buildConfigPayload();

  return (
    <>
      <section className="hero-card">
        <h1>JSON</h1>
        <p>Можно скачать текущую конфигурацию в файл или загрузить свой JSON обратно в форму.</p>
        <div className="toolbar">
          <button type="button" className="secondary" onClick={() => ctx._downloadJson()}>Скачать JSON</button>
          <button type="button" className="primary" onClick={() => ctx._openJsonFilePicker()}>Загрузить JSON</button>
          <input type="file" accept=".json,application/json" onChange={(e) => ctx._importJsonFile(e.target.files[0])} hidden />
        </div>
        {ctx._error && <div className="status error">{ctx._error}</div>}
        {ctx._status && <div className="status ok">{ctx._status}</div>}
      </section>
      <section className="help-card">
        <div><strong>Предпросмотр текущего JSON</strong></div>
        <pre><code>{JSON.stringify(payload, null, 2)}</code></pre>
      </section>
    </>
  );
};
