import express from "express";

import { createBrandCtrl, deleteBrandByIdCtrl, getBrandByIdCtrl, getBrandsCtrl, updateBrandByIdCtrl } from "../controllers/brandsCtrl.js";
import { isLoggedIn } from "../middleware/isLoggedIn.js";

const brandsRoute = express.Router()


brandsRoute.post("/", isLoggedIn, createBrandCtrl)
brandsRoute.get("/", getBrandsCtrl)
brandsRoute.get("/:id", getBrandByIdCtrl)
brandsRoute.put("/:id", isLoggedIn, updateBrandByIdCtrl)
brandsRoute.delete("/:id/delete", isLoggedIn, deleteBrandByIdCtrl)

export default brandsRoute