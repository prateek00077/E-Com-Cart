# React Frontend (Pure JS + Tailwind) for E-Com Cart

## Structure
```
src/
  main.jsx
  index.css
  App.jsx
  services/
    api.js
  components/
    ProductGrid.jsx
    ProductCard.jsx
    Cart.jsx
    CheckoutForm.jsx
    Receipt.jsx
.env
index.html
package.json
tailwind.config.cjs
postcss.config.cjs
vite.config.js
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file with:
```
VITE_API_BASE_URL=http://localhost:5000
```

3. Run development server:
```bash
npm run dev
```

## Features

- Pure JavaScript React (no TypeScript)
- Tailwind CSS for styling
- Axios for API calls
- Dark mode toggle
- Responsive design
- Product grid with add to cart
- Cart management
- Checkout form
- Receipt display

## API Integration

- GET `/api/products` - Fetch products
- GET `/api/cart` - Get cart items and total
- POST `/api/cart` - Add item to cart
- DELETE `/api/cart/:id` - Remove item from cart
- POST `/api/checkout` - Process checkout

