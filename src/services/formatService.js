const USD_TO_COP = 4000

export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(price * USD_TO_COP)
}

const categories = {
  beauty: 'Belleza',
  fragrances: 'Fragancias',
  furniture: 'Muebles',
  groceries: 'Mercado',
  'home-decoration': 'Decoración del hogar',
  'kitchen-accessories': 'Accesorios de cocina',
  laptops: 'Computadores',
  'mens-shirts': 'Camisas para hombre',
  'mens-shoes': 'Calzado para hombre',
  'mens-watches': 'Relojes para hombre',
  'mobile-accessories': 'Accesorios para celulares',
  motorcycle: 'Motocicletas',
  'skin-care': 'Cuidado de la piel',
  smartphones: 'Celulares',
  'sports-accessories': 'Accesorios deportivos',
  sunglasses: 'Gafas de sol',
  tablets: 'Tabletas',
  tops: 'Prendas superiores',
  vehicle: 'Vehículos',
  'womens-bags': 'Bolsos para mujer',
  'womens-dresses': 'Vestidos para mujer',
  'womens-jewellery': 'Joyas para mujer',
  'womens-shoes': 'Calzado para mujer',
  'womens-watches': 'Relojes para mujer',
}

export const translateCategory = (category) => {
  return categories[category] || category
}

export const translateAvailability = (status) => {
  const translations = {
    'In Stock': 'Disponible',
    'Low Stock': 'Pocas unidades disponibles',
    'Out of Stock': 'Agotado',
  }

  return translations[status] || status
}
