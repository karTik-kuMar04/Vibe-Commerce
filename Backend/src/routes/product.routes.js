import express from "express";
import { getProducts } from "../controllers/product.controller.js";

const productRoutes = express.Router();

productRoutes.get("/products", getProducts);

export default productRoutes;
