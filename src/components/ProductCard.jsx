import { Link } from 'react-router-dom'
import {
  formatPrice,
  translateCategory,
} from '../services/formatService'

import {
  translateProductTitle,
  translateProductDescription,
} from '../services/translationService'

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image-container">
        <img
          src={product.thumbnail}
          alt={translateProductTitle(product.title)}
          className="product-image"
          loading="lazy"
        />

        <span className="product-category">
          {translateCategory(product.category)}
        </span>
      </div>

      <div className="product-card-body">
        <h3>{translateProductTitle(product.title)}</h3>

        <p className="product-description">
          {translateProductDescription(
            product.title,
            product.description
          )}
        </p>

        <div className="product-rating">
          ★ {product.rating} / 5
        </div>

        <div className="product-card-footer">
          <strong>{formatPrice(product.price)}</strong>

          <Link
            to={`/productos/${product.id}`}
            className="product-button"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard

