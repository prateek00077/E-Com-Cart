import { Cart } from "../models/cart.model.js";

export const getCartItems = async(req, res) => {
    try {
        const cartItems = await Cart.find().populate('productId');
        
        const total = cartItems.reduce((sum, item) => {
            const price = item.productId?.price || 0;
            const qty = item.qty || 0;
            return sum + (price * qty);
        }, 0);

        return res.status(200).json({
            cartItems,
            total: Number(total.toFixed(2))
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const addCartItem = async(req, res) => {
    try {
        const { productId, qty } = req.body;

        if (!productId || !qty) {
            return res.status(400).json({ message: "productId and qty are required" });
        }

        const itemExist = await Cart.findOne({ productId });

        if(itemExist) {
            await Cart.updateOne({ productId }, { $inc: { qty } });
        } else {
            await Cart.create({ productId, qty });
        }
        
        return res.status(201).json({ message: "Item added successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteItem = async(req, res)=> {
    try {
        const { id } = req.params;
        await Cart.findByIdAndDelete(id);
        return res.status(200).json({ message: 'Item removed successfully'});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}