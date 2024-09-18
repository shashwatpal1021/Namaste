import express from 'express';

import { createProductCtrl, deleteProductByIdCtrl, getProductByIdCtrl, getProductsCtrl, updateProductByIdCtrl } from '../controllers/productsCtrl.js';
import { isLoggedIn } from '../middleware/isLoggedIn.js';

const productRoute = express.Router()

productRoute.post("/", isLoggedIn, createProductCtrl)
productRoute.get("/", getProductsCtrl)
productRoute.get("/:id", getProductByIdCtrl)
productRoute.put("/:id", isLoggedIn, updateProductByIdCtrl)
productRoute.delete("/:id/delete", isLoggedIn, deleteProductByIdCtrl)



export default productRoute;