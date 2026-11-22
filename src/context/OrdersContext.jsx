import { createContext, useContext, useEffect, useState } from 'react'

const OrdersContext = createContext()

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    try {
      const savedOrders = localStorage.getItem('shoppanel_orders')
      return savedOrders ? JSON.parse(savedOrders) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('shoppanel_orders', JSON.stringify(orders))
  }, [orders])

  const createOrder = (product) => {
    const newOrder = {
      id: Date.now(),
      productId: product.id,
      productName: product.title,
      productImage: product.thumbnail,
      price: product.price,
      quantity: 1,
      total: product.price,
      status: 'Pendiente',
      date: new Date().toISOString(),
    }

    setOrders((previousOrders) => [
      newOrder,
      ...previousOrders,
    ])

    return newOrder
  }

  const updateOrderStatus = (orderId, newStatus) => {
    const validStatuses = [
      'Pendiente',
      'Confirmado',
      'Enviado',
      'Cancelado',
    ]

    if (!validStatuses.includes(newStatus)) return

    setOrders((previousOrders) =>
      previousOrders.map((order) =>
        order.id === orderId
          ? { ...order, status: newStatus }
          : order
      )
    )
  }

  const deleteOrder = (orderId) => {
    setOrders((previousOrders) =>
      previousOrders.filter((order) => order.id !== orderId)
    )
  }

  return (
    <OrdersContext.Provider
      value={{
        orders,
        createOrder,
        updateOrderStatus,
        deleteOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}

export function useOrders() {
  const context = useContext(OrdersContext)

  if (!context) {
    throw new Error(
      'useOrders debe utilizarse dentro de OrdersProvider'
    )
  }

  return context
}
