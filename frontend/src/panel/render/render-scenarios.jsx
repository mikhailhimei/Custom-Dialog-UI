import React from 'react';
import { EXAMPLE_PAYLOAD } from '../constants.jsx';
import ScenarioCard from './ScenarioCard.jsx';

export const renderScenarios = (ctx) => {
  const scripts = ctx._scripts();
  const allScenarios = Array.isArray(ctx._config.scenarios) ? ctx._config.scenarios : [];
  const pageSize = Math.max(1, Number(ctx._scenariosPageSize) || 20);
  const totalScenarios = allScenarios.length;
  const totalPages = Math.max(1, Math.ceil(totalScenarios / pageSize));
  const requestedPage = Number(ctx._scenariosPage) || 1;
  const currentPage = Math.min(Math.max(1, Math.trunc(requestedPage)), totalPages);
  if (ctx._scenariosPage !== currentPage) {
    ctx._scenariosPage = currentPage;
  }
  const startIndex = (currentPage - 1) * pageSize;
  const visibleScenarios = allScenarios.slice(startIndex, startIndex + pageSize);
  const pageStart = Math.max(1, currentPage - 2);
  const pageEnd = Math.min(totalPages, pageStart + 4);
  const pageButtons = [];
  for (let page = pageStart; page <= pageEnd; page += 1) {
    pageButtons.push(
      <button
        key={page}
        type="button"
        className={page === currentPage ? 'primary compact-button' : 'ghost compact-button'}
        onClick={() => ctx.setScenariosPage(page)}
        disabled={page === currentPage}
      >
        {page}
      </button>
    );
  }

  const scenarioElements = visibleScenarios.length
    ? visibleScenarios.map((scenario, index) => (
        <ScenarioCard
          key={scenario.id}
          scenario={scenario}
          index={index}
          startIndex={startIndex}
          scripts={scripts}
          isExpanded={ctx._expandedScenarios.has(scenario.id)}
          expandedConditions={ctx._expandedConditions}
          onToggleScenario={ctx.toggleScenario}
          onUpdateScenario={ctx.updateScenario}
          onRemoveScenario={ctx.removeScenario}
          onAddCondition={ctx.addCondition}
          onRemoveCondition={ctx.removeCondition}
          onUpdateCondition={ctx.updateCondition}
          onEnableChildrenType={ctx.enableConditionChildrenType}
          onDisableChildrenType={ctx.disableConditionChildrenType}
          onEnableChildrenDirectType={ctx.enableConditionChildrenDirectType}
          onDisableChildrenDirectType={ctx.disableConditionChildrenDirectType}
          onToggleCondition={ctx.toggleCondition}
        />
      ))
    : <div className="empty">Сценарии пока не добавлены. Нажмите плюс и создайте первое правило маршрутизации.</div>;

  const paginationMarkup = totalScenarios > pageSize ? (
    <>
      <section className="scenarios-pagination">
        <button
          type="button"
          className="ghost compact-button"
          onClick={() => ctx.setScenariosPage(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          Назад
        </button>
        <div className="scenarios-pagination-pages">
          {pageButtons}
        </div>
        <button
          type="button"
          className="ghost compact-button"
          onClick={() => ctx.setScenariosPage(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          Вперед
        </button>
      </section>
      <div className="scenarios-pagination-meta">
        Показано {visibleScenarios.length} из {totalScenarios} • Страница {currentPage} из {totalPages}
      </div>
    </>
  ) : null;

  return (
    <>
      <section className="hero-card">
        <h1>Scenarios</h1>
        <p>Здесь редактируются правила сценариев. Подключение вынесено во вкладку настроек.</p>
        <div className="toolbar">
          <button type="button" className="secondary" onClick={ctx.addScenario}>+ Добавить сценарий</button>
          <button type="button" className="primary" onClick={ctx.saveConfig} disabled={ctx._saving}>
            {ctx._saving ? 'Сохранение...' : 'Сохранить'}
          </button>
        </div>
        {ctx._error && <div className="status error">{ctx._error}</div>}
        {ctx._status && <div className="status ok">{ctx._status}</div>}
      </section>
      <div className="scenario-list">{scenarioElements}</div>
      {paginationMarkup}
      <section className="help-card">
        <div><strong>Внешний запрос</strong></div>
        <pre><code>{`curl -X POST http://localhost:8000/api/dialog/command-check \\
  -H "Content-Type: application/json" \\
  -d '{"clientId":"user-123"}'`}</code></pre>
        <div style={{ marginTop: '12px' }}><strong>Что передается в скрипт</strong></div>
        <div>При совпадении правила вызывается выбранный <code>script.*</code> и получает переменные: <code>dialog_payload</code>, <code>dialog_children_type</code>, <code>dialog_children_direct_type</code>, <code>dialog_type</code>, <code>dialog_parent_type</code>, <code>dialog_value</code>, <code>dialog_client_id</code>, <code>dialog_device_id</code>.</div>
        <pre><code>{EXAMPLE_PAYLOAD}</code></pre>
      </section>
    </>
  );
};

