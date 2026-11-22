import { useEffect, useState } from 'react'
import { getProducts } from '../services/productService'
import ProductCard from '../components/ProductCard'

function Products() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        setError('')

        const data = await getProducts()
        setProducts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="dashboard-content">
      <header className="dashboard-header">
        <div>
          <h1>Catálogo de productos</h1>
          <p>
            Explora los productos disponibles en nuestra tienda.
          </p>
        </div>
      </header>

      <div className="catalog-toolbar">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar producto por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <span>
          {filteredProducts.length} productos encontrados
        </span>
      </div>

      {loading && (
        <div className="loading-container">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p>Cargando productos...</p>
        </div>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
          <button
            className="btn btn-outline-danger btn-sm ms-3"
            onClick={() => window.location.reload()}
          >
            Reintentar
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="empty-activity">
              <h4>No encontramos productos</h4>
              <p>Intenta buscar con otro nombre.</p>
            </div>
          )}
        </>
      )}
    </main>
  )
}

export default Products
