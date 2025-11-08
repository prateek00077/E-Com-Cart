# E-Com Cart

## 📦 Project Overview

A basic full-stack e-commerce cart app using **React**, **Node.js/Express**, and **MongoDB**. Handles product listing, cart management, and mock checkout.

---

## 📁 Folder Structure

```
E-Com-Cart/
├── backend/
│   ├── config/
│   ├── models/
|   ├── controllers/
│   ├── routes/
│   ├── scripts/
│   ├── server.js
│   └── .env
└── frontend/
    ├── src/
    ├── public/
    └── package.json
```

---

## ⚙️ Setup Steps

### 1️⃣ Clone the Repo

```bash
git clone <repo-url>
cd E-Com-Cart
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_uri
PORT=8000
```

### 3️⃣ Seed Dummy Products

```bash
npm run seed
```

(This populates sample products in MongoDB.)

### 4️⃣ Run Backend Server

```bash
npm run dev
```

Server runs at `http://localhost:8000`

### 5️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`

---

## 🧪 Test API Endpoints

| Method | Endpoint      | Description           |
| ------ | ------------- | --------------------- |
| GET    | /api/products | Fetch all products    |
| POST   | /api/cart     | Add item to cart      |
| GET    | /api/cart     | View cart & total     |
| DELETE | /api/cart/:id | Remove item           |
| POST   | /api/checkout | Mock checkout receipt |

---

## ✅ Final Check

* Visit the frontend URL → Add items → View cart → Checkout.
* Products loaded = seeding successful.

That’s it — E-Com Cart is live 🎉
