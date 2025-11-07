import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
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

export const Product = mongoose.model('product', productSchema);