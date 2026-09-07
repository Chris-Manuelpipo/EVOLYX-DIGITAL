import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './lib/i18n.js'
import App from './App.jsx'

// Les états initiaux des animations sont conditionnés à cette classe : si ce
// script n'atteint jamais le navigateur, la page reste entièrement lisible.
document.documentElement.classList.add('js-anim')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
