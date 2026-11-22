
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function ProtectedRoute() {
  const { user, loading } = useAuth()
  const location = useLocation()

  // Mientras Supabase verifica la sesión
  if (loading) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3 text-muted">
            Verificando sesión...
          </p>
        </div>
      </div>
    )
  }

  // Si no hay sesión, regresar al inicio de sesión
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    )
  }

  // Si hay sesión, mostrar la página solicitada
  return <Outlet />
}

export default ProtectedRoute
