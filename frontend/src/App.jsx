import React, { useEffect, useState } from 'react'
import { fetchProducts, fetchCart, addToCart, removeCartItem, checkout } from './services/api'
import ProductGrid from './components/ProductGrid'
import Cart from './components/Cart'
import CheckoutForm from './components/CheckoutForm'
import Receipt from './components/Receipt'

export default function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({ cartItems: [], total: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [view, setView] = useState('products')
  const [receipt, setReceipt] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  const handleViewChange = (newView) => {
    if (newView !== 'receipt') {
      setReceipt(null)
    }
    setView(newView)
  }

  useEffect(() => {
    load()
  }, [])

  async function load() {
    try {
      setLoading(true)
      setError(null)
      const prods = await fetchProducts()
      // Ensure products is always an array
      setProducts(Array.isArray(prods) ? prods : [])
      try {
        const c = await fetchCart()
        setCart(c || { cartItems: [], total: 0 })
      } catch (cartError) {
        console.error('Error loading cart:', cartError)
        setCart({ cartItems: [], total: 0 })
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to load data'
      setError(`Failed to load products: ${errorMessage}`)
      console.error('Error loading products:', err.response?.data || err)
      setProducts([]) // Set empty array on error
    } finally {
      setLoading(false)
    }
  }

  async function handleAddToCart(product) {
    await addToCart(product._id || product.id, 1)
    const c = await fetchCart()
    setCart(c)
  }

  async function handleRemove(id) {
    await removeCartItem(id)
    const c = await fetchCart()
    setCart(c)
  }

  async function handleSubmitCheckout({ name, email }) {
    try {
      const cartItems = cart.cartItems.map(item => ({
        name: item.productId?.name || 'Product',
        price: item.productId?.price || 0,
        qty: item.qty
      }))
      
      const res = await checkout({ cartItems })
      setReceipt({ total: res.total, timestamp: res.timestamp, name, email })
      setCart({ cartItems: [], total: 0 })
      setView('receipt')
    } catch (error) {
      alert('Checkout failed. Please try again.')
      console.error(error)
    }
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white`}>
      <header className="shadow p-4 flex justify-between items-center bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-semibold">Vibe Commerce</h1>
        <div className="flex gap-3 items-center">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded text-2xl"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button 
            onClick={() => handleViewChange('products')} 
            className={`px-3 py-1 rounded ${view === 'products' ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            Products
          </button>
          <button 
            onClick={() => handleViewChange('cart')} 
            className={`px-3 py-1 rounded ${view === 'cart' ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            Cart ({cart.cartItems?.length || 0})
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {view === 'products' && (
          <ProductGrid 
            products={products} 
            loading={loading} 
            error={error} 
            onAddToCart={handleAddToCart} 
          />
        )}

        {view === 'cart' && (
          <Cart 
            cartItems={cart.cartItems || []} 
            total={cart.total || 0}
            onRemove={handleRemove} 
            onCheckout={() => handleViewChange('checkout')} 
          />
        )}

        {view === 'checkout' && (
          <CheckoutForm 
            total={cart.total || 0} 
            onSubmit={handleSubmitCheckout}
            onCancel={() => handleViewChange('cart')}
          />
        )}

        {view === 'receipt' && receipt && (
          <Receipt 
            receipt={receipt}
            onClose={() => {
              setReceipt(null)
              handleViewChange('products')
            }}
          />
        )}
      </main>
    </div>
  )
}

