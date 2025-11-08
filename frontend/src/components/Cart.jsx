import React from 'react'

export default function Cart({ cartItems = [], total = 0, onRemove, onCheckout }) {
  return (
    <div className="max-w-3xl mx-auto text-gray-900 dark:text-white">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-300 py-10">Cart is empty</div>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div
              key={item._id || item.id}
              className="flex items-center gap-3 border rounded-lg p-3 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            >
              <div className="h-16 w-16 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
              <div className="flex-1">
                <div className="font-medium">{item.productId?.name || item.name || 'Product'}</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">
                  ${((item.productId?.price ?? item.price) * (item.qty ?? 1)).toFixed(2)} × {item.qty ?? 1}
                </div>
              </div>
              <button
                onClick={() => onRemove(item._id || item.id)}
                className="px-3 py-1 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="pt-3 border-t flex items-center justify-between font-semibold text-lg bg-white dark:bg-gray-700 p-3 rounded-lg border-gray-200 dark:border-gray-700">
            <div>Total</div>
            <div>${(total ?? 0).toFixed(2)}</div>
          </div>

          <button
            onClick={onCheckout}
            className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white py-2 rounded font-medium"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  )
}

