import { Cart } from "../models/cart.model.js";

export const getCartItems = async(req, res) => {
    try {
        const cartItems = await Cart.find();
        return res.status(200).json({messsage : "cart fetched successfully!", cartItems});
    } catch (error) {
        console.log(`Error while fetching cartItems ${error}`);
        return res.status(500).json({messsage : errormessage});
    }
};

export const addCartItem = async(req, res) => {
    try {
        const productId = req.body.productId;

        // check if item already exist in the cart or not
        const itemExist = await Cart.findOne({ productId });

        let newItem;
        if(!itemExist) {
            // we have to add this item
            newItem = await Cart.create({ productId, qty : 1});
        } else {
            // if item already exist in the cart then we will just increase the quantity
            await Cart.updateOne({ productId }, {$inc: {qty:1}});
        }
        return res.status(201).json({ message : "item added successfully !", newItem});
    } catch (error) {
        console.log(`Error while adding an item ${error.message}`);
        res.status(500).json({ message : error.message });
    }
}

export const deleteItem = async(req, res)=> {
    try {
        const { id } = req.params;
        // remove the this item
        await Cart.findOneAndDelete({_id : id});
        return res.status(200).json({ message : 'Item removed successfully!'});
    } catch (error) {
        console.log(`Error while removing the item!`);
        return res.status(500).json({ message : error.message });
    }
}