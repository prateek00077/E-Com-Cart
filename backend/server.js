import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
import productRouter from "./routes/product.route.js";
import cartRouter from "./routes/cart.route.js";
import checkoutRouter from "./routes/checkout.route.js";

dotenv.config();

const app = express();

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/checkout", checkoutRouter);

const PORT = process.env.PORT || 5000;

// Start server after database connection
async function startServer() {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is listening on port : ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

startServer();