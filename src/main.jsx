import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { PrimeReactProvider } from 'primereact/api'
import  SanQuintaProvider  from './providers/SanQuintaProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider>
      <SanQuintaProvider>
        <App />
      </SanQuintaProvider>
    </PrimeReactProvider>
  </StrictMode>,
)
