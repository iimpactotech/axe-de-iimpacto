import { createIcons, icons } from 'lucide'
import { renderDashboard } from '../modules/dashboard/index.js'
import { renderRituais } from '../modules/rituais/index.js'
import { renderBiblioteca } from '../modules/biblioteca/index.js'
import { renderMateriais } from '../modules/materiais/index.js'
import { renderRelatorios } from '../modules/relatorios/index.js'
import { renderConfiguracoes } from '../modules/configuracoes/index.js'

const routes = {
  dashboard: { title: 'Início', view: renderDashboard },
  rituais: { title: 'Rituais', view: renderRituais },
  biblioteca: { title: 'Biblioteca Ritualística', view: renderBiblioteca },
  materiais: { title: 'Materiais', view: renderMateriais },
  relatorios: { title: 'Relatórios', view: renderRelatorios },
  configuracoes: { title: 'Configurações', view: renderConfiguracoes },
}

export function navigateTo(routeName = 'dashboard') {
  const route = routes[routeName] || routes.dashboard

  document.querySelector('#page-title').textContent = route.title
  document.querySelector('#page-content').innerHTML = route.view()

  document.querySelectorAll('.menu-item').forEach((item) => {
    item.classList.toggle('active', item.dataset.route === routeName)
  })
  document.querySelectorAll('#page-content [data-route]').forEach((element) => {
    element.addEventListener('click', () => {
      navigateTo(element.dataset.route)
    })
  })
createIcons({ icons })
}

export function setupRouter() {
  document.querySelectorAll('[data-route]').forEach((button) => {
    button.addEventListener('click', () => {
      navigateTo(button.dataset.route)
    })
  })

  navigateTo('dashboard')
}