import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Login() {
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage('')

    if (!email.trim() || !password) {
      setErrorMessage('Por favor, completa todos los campos.')
      return
    }

    try {
      setIsSubmitting(true)

      const result = await signIn(email.trim(), password)

      if (result.error) {
        const message = result.error.toLowerCase()

        if (message.includes('invalid login credentials')) {
          setErrorMessage('El correo o la contraseña son incorrectos.')
        } else if (message.includes('email not confirmed')) {
          setErrorMessage('Debes confirmar tu correo electrónico.')
        } else {
          setErrorMessage('No fue posible iniciar sesión. Inténtalo nuevamente.')
        }

        return
      }

      navigate('/', { replace: true })
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
      setErrorMessage('Ocurrió un problema de conexión.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main
      className="min-vh-100 d-flex align-items-center justify-content-center p-3"
      style={{
        background: 'linear-gradient(135deg, #15172e, #6755dc)',
      }}
    >
      <div
        className="card border-0 shadow-lg"
        style={{
          width: '100%',
          maxWidth: '420px',
          borderRadius: '18px',
        }}
      >
        <div className="card-body p-4 p-md-5">
          <div className="text-center mb-4">
            <h1 className="fw-bold mb-2" style={{ color: '#6755dc' }}>
              ShopPanel
            </h1>
            <p className="text-muted">
              Panel de gestión comercial
            </p>
          </div>

          <h2 className="h4 fw-semibold mb-2">Bienvenido</h2>
          <p className="text-muted mb-4">
            Ingresa tus credenciales para continuar.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                required
                disabled={isSubmitting}
              />
            </div>

            {errorMessage && (
              <div className="alert alert-danger py-2" role="alert">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary w-100 py-2 fw-semibold"
              style={{
                backgroundColor: '#6755dc',
                borderColor: '#6755dc',
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </button>
          </form>

          <p className="text-muted small text-center mt-4 mb-0">
            Acceso mediante Supabase Authentication
          </p>
        </div>
      </div>
    </main>
  )
}

export default Login
