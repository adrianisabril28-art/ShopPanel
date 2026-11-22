function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-search">
        <span>⌕</span>
        <input
          type="text"
          placeholder="Buscar productos..."
          disabled
        />
      </div>

      <div className="topbar-profile">
        <div className="profile-avatar">U</div>
        <div className="profile-info">
          <strong>Mi cuenta</strong>
          <small>Usuario</small>
        </div>
      </div>
    </header>
  )
}

export default Topbar
