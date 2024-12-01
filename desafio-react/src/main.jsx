import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CadastroDeIngressantes from './CadastroDeIngressantes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CadastroDeIngressantes />
  </StrictMode>,
)
