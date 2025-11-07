import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    prductId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    qty: {
        type: Number,
        default: 0
    }
});

export const Cart = mongoose.model('Cart', cartSchema);