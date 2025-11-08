import React from 'react'

export default function Receipt({ receipt, onClose }) {
  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-gray-800 dark:text-white">
      <h2 className="text-xl font-semibold mb-4">Order Receipt</h2>
      <div className="space-y-2 mb-4">
        <p><strong>Name:</strong> {receipt.name}</p>
        <p><strong>Email:</strong> {receipt.email}</p>
        <p><strong>Total:</strong> ${receipt.total}</p>
        <p><strong>Date:</strong> {new Date(receipt.timestamp).toLocaleString()}</p>
      </div>
      <button 
        onClick={onClose}
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
      >
        Close
      </button>
    </div>
  )
}

