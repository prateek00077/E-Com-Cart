import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    // I will add schema for product
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
    }
});