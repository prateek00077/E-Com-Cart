import { Product } from "../models/products.model.js"

export const getAllProducts = async(req, res)=> {
    try {
        const products = await Product.find();
        return res.status(200).json({ message : "Products fetched successfully", products});
    } catch (error) {
        console.log(`Error while fetching products ${error.message}`);
        return res.status(500).json({ message : error.message });
    }
}