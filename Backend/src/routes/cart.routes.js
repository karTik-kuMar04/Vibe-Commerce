import express from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
  checkout,
} from "../controllers/cart.controller.js";

const cartRoutes = express.Router();

cartRoutes.post("/cart", addToCart);
cartRoutes.get("/cart", getCart);
cartRoutes.delete("/cart/:id", removeFromCart);
cartRoutes.post("/checkout", checkout);

export default cartRoutes;
