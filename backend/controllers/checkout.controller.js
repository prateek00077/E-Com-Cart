import { Cart } from "../models/cart.model.js";
import Order from "../models/checkout.model.js";

export const checkOut = async (req, res) => {
  try {
    let { cartItems } = req.body;

    // fallback to server-side cart if frontend didn't send items
    if (!cartItems || !cartItems.length) {
      const serverCart = await Cart.find().populate("productId");
      if (serverCart?.length) {
        cartItems = serverCart.map(ci => ({
          price: ci.productId?.price ?? 0,
          qty: ci.qty ?? 0,
          name: ci.productId?.name
        }));
      }
    }

    if (!cartItems || !cartItems.length) {
      return res.status(400).json({ message: "Cart items are required" });
    }

    const total = Number(
      cartItems.reduce((sum, item) => sum + (item.price || 0) * (item.qty || 0), 0).toFixed(2)
    );

    const order = await Order.create({
      items: cartItems.map(i => ({ productName: i.name || "", qty: i.qty || 0, price: i.price || 0 })),
      total
    });

    // clear server cart
    await Cart.deleteMany({});

    return res.json({ total, timestamp: new Date(), orderId: order._id });
  } catch (err) {
    return res.status(500).json({ message: "Checkout failed", error: err.message });
  }
};
