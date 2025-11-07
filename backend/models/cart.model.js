import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    prductId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    qty: {
        type: Number,
        default: 0
    }
},
{
    timestamps : true
});

export const Cart = mongoose.model('Cart', cartSchema);