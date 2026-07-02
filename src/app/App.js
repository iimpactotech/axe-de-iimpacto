import { createIcons, icons } from 'lucide'
import { renderLayout } from '../layouts/MainLayout.js'
import { setupRouter } from './Router.js'

export function startApp() {
  const app = document.querySelector('#app')
  app.innerHTML = renderLayout()

createIcons({ icons })
  setupRouter()
}