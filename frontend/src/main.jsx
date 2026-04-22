import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import ResumoPage from './pages/ResumoPage.jsx'
import PlanoPage from './pages/PlanoPage.jsx'
import QuestoesPage from './pages/QuestoesPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resumo" element={<ResumoPage />} />
        <Route path="/plano-estudo" element={<PlanoPage />} />
        <Route path="/questoes" element={<QuestoesPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)