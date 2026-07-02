export function renderLayout() {
  return `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-logo">TT</div>
          <div>
            <h1>Templo Tatuy</h1>
            <span>Gestão Ritualística</span>
          </div>
        </div>

        <nav class="menu">
          <button class="menu-item active" data-route="dashboard">
            <i data-lucide="home"></i> Início
          </button>

          <button class="menu-item" data-route="rituais">
            <i data-lucide="calendar-days"></i> Rituais
          </button>

          <button class="menu-item" data-route="biblioteca">
            <i data-lucide="book-open"></i> Biblioteca
          </button>

          <button class="menu-item" data-route="materiais">
            <i data-lucide="package"></i> Materiais
          </button>

          <button class="menu-item" data-route="relatorios">
            <i data-lucide="bar-chart-3"></i> Relatórios
          </button>

          <button class="menu-item" data-route="configuracoes">
            <i data-lucide="settings"></i> Configurações
          </button>
        </nav>
      </aside>

      <main class="main-content">
        <header class="topbar">
          <button class="icon-button mobile-menu">
            <i data-lucide="menu"></i>
          </button>

          <div>
            <h2 id="page-title">Início</h2>
            <p>Organização é também um ato de fé e respeito.</p>
          </div>
        </header>

        <section id="page-content" class="page-content"></section>
      </main>
    </div>
  `
}