const API_URL = 'https://dummyjson.com/products'

// Consultar todos los productos
export const getProducts = async () => {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('No fue posible consultar los productos.')
  }

  const data = await response.json()

  return data.products
}

// Consultar un producto por su identificador
export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`)

  if (response.status === 404) {
    throw new Error('El producto solicitado no existe.')
  }

  if (!response.ok) {
    throw new Error('No fue posible consultar el detalle del producto.')
  }

  return await response.json()
}

