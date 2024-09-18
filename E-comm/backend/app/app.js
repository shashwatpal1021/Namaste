import dotenv from "dotenv"
dotenv.config()
import express from "express";
import dbConnect from "../config/dbConnect.js";
import userRoutes from "../routes/userRoute.js";
import { globalErrHandler, notFound } from "../middleware/globalErrHandler.js";
import productRoute from "../routes/productRoute.js";
import categoryRoutes from "../routes/categoriesRoute.js";
import brandsRoute from "../routes/brandRoute.js";
import colorsRoute from "../routes/colorsRoute.js";
import orderRoute from "../routes/orderRoute.js";

dbConnect()
const app = express();

// pass incoming 
app.use(express.json())

// routers
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/products', productRoute)
app.use('/api/v1/categories', categoryRoutes)
app.use('/api/v1/brands', brandsRoute)
app.use('/api/v1/colors', colorsRoute)
app.use('/api/v1/orders', orderRoute)


// err middleware
app.use(notFound)
app.use(globalErrHandler)
 

export default app;
