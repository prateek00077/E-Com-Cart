import { Product } from "../models/products.model.js"
import mongoose from "mongoose";

export const getAllProducts = async(req, res)=> {
    try {
        // Check if database is connected
        if (mongoose.connection.readyState !== 1) {
            return res.status(503).json({ 
                message: 'Database not connected',
                error: 'Please check your database connection' 
            });
        }
        
        const products = await Product.find();
        return res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        return res.status(500).json({ 
            message: 'Failed to fetch products',
            error: error.message 
        });
    }
}