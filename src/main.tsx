import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import { App } from './App'
import './index.css'

const useHashRouter = import.meta.env.PROD || window.location.protocol === 'file:'
const Router = useHashRouter ? HashRouter : BrowserRouter
const routerBasename = useHashRouter ? undefined : import.meta.env.BASE_URL

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router basename={routerBasename}>
      <App />
    </Router>
  </StrictMode>,
)
