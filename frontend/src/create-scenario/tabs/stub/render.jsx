import { escapeHtml } from '../../utils.jsx';

export const renderStub = (title, description) => `
  <section class="hero-card">
    <h2>${escapeHtml(title)}</h2>
    <p>${escapeHtml(description)}</p>
  </section>
  <section class="help-card">
    <div class="empty">Раздел подготовлен.</div>
  </section>
`;
