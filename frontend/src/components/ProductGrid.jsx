import React from 'react'

export default function ProductGrid({ products = [], loading, error, onAddToCart }) {
  if (loading) return <div className="text-center py-10 text-gray-700 dark:text-gray-200">Loading...</div>
  if (error) return <div className="text-center py-10 text-red-600 dark:text-red-400">{error}</div>

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map(p => (
        <div
          key={p._id || p.id}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm text-gray-800 dark:text-white flex flex-col"
        >
          <div className="h-40 bg-gray-100 dark:bg-gray-700 rounded mb-3 flex items-center justify-center">
            {/* optional: replace with <img /> */}
            <span className="text-gray-500 dark:text-gray-300">{p.name}</span>
          </div>

          <div className="flex-1">
            <h3 className="font-medium mb-1">{p.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">${(p.price || 0).toFixed(2)}</p>
          </div>

          <button
            onClick={() => onAddToCart(p)}
            className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded"
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  )
}

