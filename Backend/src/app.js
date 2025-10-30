import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cartRoutes from './routes/cart.routes.js';
import productRoutes from './routes/product.routes.js';

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());


// Routes
app.use('/api', cartRoutes)
app.use('/api', productRoutes)



export default app;