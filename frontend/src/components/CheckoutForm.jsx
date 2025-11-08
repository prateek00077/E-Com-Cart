import React, { useState } from 'react'

export default function CheckoutForm({ total = 0, onSubmit, onCancel }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handle = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await onSubmit({ name, email })
    } catch (e) {
      alert('Checkout failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handle} className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-gray-800 dark:text-white">
      <h2 className="text-xl font-semibold mb-4">Checkout</h2>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Name</label>
        <input 
          value={name} 
          onChange={e => setName(e.target.value)} 
          required 
          className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
          className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
        />
      </div>
      <div className="flex items-center justify-between font-semibold mb-3 p-3 bg-gray-50 dark:bg-gray-700 rounded">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="flex gap-3">
        <button 
          type="button"
          onClick={onCancel}
          className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          Cancel
        </button>
        <button 
          disabled={loading} 
          className="flex-1 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Place Order'}
        </button>
      </div>
    </form>
  )
}

