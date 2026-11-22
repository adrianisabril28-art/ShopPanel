
import {
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import ProtectedRoute from './components/ProtectedRoute'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Orders from './pages/Orders'

import { useAuth } from './context/AuthContext'

import './App.css'

// Evita que usuarios autenticados vuelvan al inicio de sesión
function LoginRoute() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    )
  }

  if (user) {
    return <Navigate to="/" replace />
  }

  return <Login />
}

// Estructura principal del panel
function MainLayout() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-layout">
        <Topbar />
        <Outlet />
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      {/* Ruta pública */}
      <Route path="/login" element={<LoginRoute />} />

      {/* Rutas protegidas */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />

          <Route path="/productos" element={<Products />} />

          <Route
            path="/productos/:id"
            element={<ProductDetail />}
          />

          <Route path="/pedidos" element={<Orders />} />

          <Route
            path="/configuracion"
            element={
              <main className="dashboard-content">
                <h1>Configuración</h1>
                <p>Configuración de ShopPanel.</p>
              </main>
            }
          />

          <Route
            path="/ayuda"
            element={
              <main className="dashboard-content">
                <h1>Centro de ayuda</h1>
              </main>
            }
          />

          <Route
            path="*"
            element={
              <main className="dashboard-content">
                <h1>Página no encontrada</h1>
              </main>
            }
          />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
