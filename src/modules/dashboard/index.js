export function renderDashboard() {
  return `
    <section class="hero-card">
      <div>
        <span class="eyebrow">Sistema Templo Tatuy</span>
        <h3>Bem-vindo ao painel principal.</h3>
        <p>Crie rituais, consulte materiais e acompanhe suas listas com facilidade.</p>
      </div>

      <button class="primary-button" data-route="rituais">
        <i data-lucide="plus-circle"></i>
        Criar Ritual
      </button>
    </section>
  `
}