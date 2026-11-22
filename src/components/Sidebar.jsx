import { NavLink } from 'react-router-dom'

function Sidebar() {
  const getNavClass = ({ isActive }) =>
    `nav-item ${isActive ? 'active' : ''}`

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">S</div>
        <span>ShopPanel</span>
      </div>

      <div className="sidebar-section">
        <small>MENÚ PRINCIPAL</small>

        <nav className="sidebar-nav">
          <NavLink to="/" end className={getNavClass}>
            <span>⌂</span> Panel principal
          </NavLink>

          <NavLink to="/productos" className={getNavClass}>
            <span>▣</span> Productos
          </NavLink>

          <NavLink to="/pedidos" className={getNavClass}>
            <span>▤</span> Mis pedidos
          </NavLink>
        </nav>
      </div>

      <div className="sidebar-bottom">
        <NavLink to="/configuracion" className={getNavClass}>
          <span>⚙</span> Configuración
        </NavLink>

        <NavLink to="/ayuda" className={getNavClass}>
          <span>ⓘ</span> Ayuda
        </NavLink>
      </div>

      <div className="sidebar-user">
        <div className="user-avatar">U</div>
        <div>
          <strong>Usuario ShopPanel</strong>
          <small>Cuenta de usuario</small>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

