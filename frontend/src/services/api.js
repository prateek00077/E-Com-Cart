import axios from 'axios'

const api = axios.create()

export async function fetchProducts() {
  try {
    const res = await api.get('/api/products')
    // Ensure we always return an array
    return Array.isArray(res.data) ? res.data : []
  } catch (error) {
    console.error('Error fetching products:', error.response?.data || error.message)
    throw error
  }
}

export async function fetchCart() {
  const res = await api.get('/api/cart')
  return res.data
}

export async function addToCart(productId, qty = 1) {
  const res = await api.post('/api/cart', { productId, qty })
  return res.data
}

export async function removeCartItem(itemId) {
  const res = await api.delete(`/api/cart/${itemId}`)
  return res.data
}

export async function checkout(cartItems) {
  const res = await api.post('/api/checkout', { cartItems })
  return res.data
}

export default api

