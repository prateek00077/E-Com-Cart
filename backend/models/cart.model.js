import mongoose from "mongoose";

export const cartSchema = new mongoose.Schema({
    prductId: {
        type: mongoose.Schema.Types.ObjectId
    },
    qty: {
        type: Number,
        default: 0
    }
})