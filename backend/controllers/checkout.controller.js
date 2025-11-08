export const checkOut = async (req, res) => {
  try {
    const { cartItems } = req.body;
    
    if (!cartItems || !cartItems.length) {
      return res.status(400).json({ message: "Cart items are required" });
    }

    const total = Number(
      cartItems.reduce((sum, item) => {
        const price = item.price || 0;
        const qty = item.qty || 0;
        return sum + price * qty;
      }, 0).toFixed(2)
    );

    const timestamp = new Date();

    return res.json({ 
      total,
      timestamp
    });
  } catch (err) {
    return res.status(500).json({ message: "Checkout failed", error: err.message });
  }
};
