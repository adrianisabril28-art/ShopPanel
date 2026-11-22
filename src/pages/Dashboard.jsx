function Dashboard() {
  const statistics = [
    {
      title: 'Productos disponibles',
      value: '—',
      icon: '▦',
      description: 'Catálogo de productos',
    },
    {
      title: 'Pedidos realizados',
      value: '0',
      icon: '🛍',
      description: 'Pedidos registrados',
    },
    {
      title: 'Pedidos pendientes',
      value: '0',
      icon: '◷',
      description: 'Por confirmar',
    },
    {
      title: 'Pedidos enviados',
      value: '0',
      icon: '✓',
      description: 'Pedidos completados',
    },
  ]

  return (
    <main className="dashboard-content">
      <header className="dashboard-header">
        <div>
          <h1>Panel principal</h1>
          <p>Bienvenido a ShopPanel. Gestiona tus productos y pedidos.</p>
        </div>

        <div className="header-date">
          <span>●</span> Panel de usuario
        </div>
      </header>

      <section className="welcome-card">
        <div>
          <span className="welcome-label">SHOPPANEL</span>
          <h2>¡Bienvenido a tu espacio de compras!</h2>
          <p>
            Explora nuestro catálogo, selecciona tus productos
            favoritos y administra tus pedidos desde un solo lugar.
          </p>
        </div>

        <div className="welcome-decoration">S</div>
      </section>

      <section className="statistics-section">
        <div className="section-heading">
          <h3>Resumen general</h3>
          <span>Actividad de tu cuenta</span>
        </div>

        <div className="row g-3">
          {statistics.map((item) => (
            <div className="col-12 col-sm-6 col-xl-3" key={item.title}>
              <article className="stat-card">
                <div className="stat-icon">{item.icon}</div>
                <p>{item.title}</p>
                <h2>{item.value}</h2>
                <small>{item.description}</small>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="activity-card">
        <div className="section-heading">
          <h3>Actividad reciente</h3>
          <span>Últimos movimientos</span>
        </div>

        <div className="empty-activity">
          <div className="empty-icon">▤</div>
          <h4>Aún no tienes actividad</h4>
          <p>
            Cuando realices pedidos, podrás consultar aquí
            sus movimientos y estados.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
