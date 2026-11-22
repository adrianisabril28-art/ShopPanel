
import { useOrders } from '../context/OrdersContext'
import { formatPrice } from '../services/formatService'

function Orders() {
  const { orders, updateOrderStatus, deleteOrder } = useOrders()

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getStatusClass = (status) => {
    const classes = {
      Pendiente: 'warning',
      Confirmado: 'primary',
      Enviado: 'success',
      Cancelado: 'danger',
    }

    return classes[status] || 'secondary'
  }

  return (
    <main className="dashboard-content">
      <header className="dashboard-header">
        <div>
          <h1>Mis pedidos</h1>
          <p>Consulta y administra tus pedidos.</p>
        </div>
      </header>

      {orders.length === 0 ? (
        <div className="empty-activity">
          <h4>No tienes pedidos todavía</h4>
          <p>Cuando crees un pedido, aparecerá aquí.</p>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <article className="card mb-3 p-3" key={order.id}>
              <div className="row align-items-center g-3">
                <div className="col-md-2">
                  <img
                    src={order.productImage}
                    alt={order.productName}
                    className="img-fluid"
                    style={{
                      maxHeight: '100px',
                      objectFit: 'contain',
                    }}
                  />
                </div>

                <div className="col-md-4">
                  <h5>{order.productName}</h5>
                  <p className="mb-1">
                    Pedido #{order.id}
                  </p>
                  <small className="text-muted">
                    Fecha: {formatDate(order.date)}
                  </small>
                </div>

                <div className="col-md-2">
                  <strong>{formatPrice(order.total)}</strong>
                  <p className="mb-0">
                    Cantidad: {order.quantity}
                  </p>
                </div>

                <div className="col-md-2">
                  <span className={`badge text-bg-${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </div>

                <div className="col-md-2">
                  <select
                    className="form-select form-select-sm mb-2"
                    value={order.status}
                    onChange={(e) =>
                      updateOrderStatus(order.id, e.target.value)
                    }
                  >
                    <option value="Pendiente">Pendiente</option>
                    <option value="Confirmado">Confirmado</option>
                    <option value="Enviado">Enviado</option>
                    <option value="Cancelado">Cancelado</option>
                  </select>

                  <button
                    className="btn btn-outline-danger btn-sm w-100"
                    onClick={() => deleteOrder(order.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}

export default Orders
