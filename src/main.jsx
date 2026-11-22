import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Estilos globales
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

// Componentes y contextos
import App from './App.jsx'
import { OrdersProvider } from './context/OrdersContext'
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <OrdersProvider>
          <App />
        </OrdersProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
