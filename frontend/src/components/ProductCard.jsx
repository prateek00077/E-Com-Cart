import React, { useState } from 'react'

export default function ProductCard({ product, onAddToCart }) {
  const [adding, setAdding] = useState(false)

  const handleAdd = async () => {
    setAdding(true)
    try {
      await onAddToCart(product)
    } catch (e) {
      alert('Failed to add to cart')
    } finally {
      setAdding(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col hover:shadow-lg transition-shadow">
      <div className="h-40 bg-gray-100 rounded flex items-center justify-center mb-3">
        <span className="text-gray-400 text-4xl">📦</span>
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-sm mb-2">{product.name}</h3>
        <p className="text-indigo-600 font-semibold text-lg">${product.price}</p>
      </div>
      <button
        onClick={handleAdd}
        disabled={adding}
        className="mt-3 w-full px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {adding ? 'Adding...' : 'Add to Cart'}
      </button>
    </div>
  )
}

