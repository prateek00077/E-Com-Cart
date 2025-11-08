import dotenv from "dotenv";
import { Product } from "../models/products.model.js";
import { connectDB } from "../config/connectDB.js";

dotenv.config();
connectDB();

const mockProducts = [
    { name: "Wireless Headphones", price: 79.99 },
    { name: "Smart Watch", price: 199.99 },
    { name: "Laptop Stand", price: 49.99 },
    { name: "Mechanical Keyboard", price: 129.99 },
    { name: "USB-C Hub", price: 39.99 },
    { name: "Wireless Mouse", price: 29.99 },
    { name: "Monitor Stand", price: 59.99 },
    { name: "Desk Mat", price: 24.99 },
    { name: "Webcam HD", price: 89.99 },
    { name: "USB Flash Drive 128GB", price: 19.99 }
];

const seedProducts = async () => {
    try {
        // Clear existing products
        await Product.deleteMany({});
        console.log("Cleared existing products");

        // Insert mock products
        const products = await Product.insertMany(mockProducts);
        console.log(`Seeded ${products.length} products successfully!`);
        
        process.exit(0);
    } catch (error) {
        console.error("Error seeding products:", error);
        process.exit(1);
    }
};

// Wait for DB connection then seed
setTimeout(() => {
    seedProducts();
}, 2000);

