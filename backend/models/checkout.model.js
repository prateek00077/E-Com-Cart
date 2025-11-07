import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [
    {
      productName: String,
      qty: Number,
      price: Number
    }
  ],
  total: Number,
}, {timestamps : true});

export default mongoose.model("Order", orderSchema);