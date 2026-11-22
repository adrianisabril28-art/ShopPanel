import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../services/productService'

import {
  formatPrice,
  translateCategory,
  translateAvailability,
} from '../services/formatService'

import {
  translateProductTitle,
  translateProductDescription,
} from '../services/translationService'

import { useOrders } from '../context/OrdersContext'

function ProductDetail() {
  const { id } = useParams()
  const { createOrder } = useOrders()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [orderMessage, setOrderMessage] = useState('')

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true)
        setError('')
        const data = await getProductById(id)
        setProduct(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [id])

  const handleCreateOrder = () => {
    createOrder(product)
    setOrderMessage('¡Pedido creado correctamente!')
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner-border text-primary" />
        <p>Cargando detalle del producto...</p>
      </div>
    )
  }

  if (error || !product) {
    return (
      <main className="dashboard-content">
        <div className="alert alert-danger">
          {error || 'No encontramos el producto solicitado.'}
        </div>
        <Link to="/productos" className="btn btn-primary">
          Volver al catálogo
        </Link>
      </main>
    )
  }

  return (
    <main className="dashboard-content">
      <Link to="/productos" className="back-link">
        ← Volver al catálogo
      </Link>

      <section className="detail-card">
        <div className="detail-image">
          <img
            src={product.thumbnail}
            alt={translateProductTitle(product.title)}
          />
        </div>

        <div className="detail-information">
          <span className="product-category">
            {translateCategory(product.category)}
          </span>

          <h1>{translateProductTitle(product.title)}</h1>

          <p>
            {translateProductDescription(
              product.title,
              product.description
            )}
          </p>

          <div className="detail-rating">
            ★ {product.rating} / 5
          </div>

          <div className="detail-price">
            {formatPrice(product.price)}
          </div>

          <p>
            Disponibilidad:{' '}
            {translateAvailability(product.availabilityStatus)}
          </p>

          <p>
            Marca: {product.brand || 'No especificada'}
          </p>

          <button
            className="btn btn-primary mt-3"
            onClick={handleCreateOrder}
          >
            Crear pedido
          </button>

          {orderMessage && (
            <div className="alert alert-success mt-3">
              {orderMessage}
              <br />
              <Link to="/pedidos">
                Ver mis pedidos
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default ProductDetail
