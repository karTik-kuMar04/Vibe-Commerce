import products from "./product.controller.js";

let cart = [];


export const addToCart = (req, res) => {
  const { productId, qty } = req.body;
  const product = products.find((p) => p.id === productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const existing = cart.find((item) => item.productId === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ productId, name: product.name, price: product.price, qty });
  }

  res.status(201).json({ message: "Item added to cart", cart });
};


export const getCart = (req, res) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  res.json({ cart, total });
};


export const removeFromCart = (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter((item) => item.productId !== id);
  res.json({ message: "Item removed", cart });
};


export const checkout = (req, res) => {
  const { cartItems } = req.body;
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const receipt = {
    orderId: Math.floor(Math.random() * 1000000),
    total,
    timestamp: new Date().toISOString(),
  };
  cart = [];
  res.json({ message: "Checkout successful", receipt });
};
