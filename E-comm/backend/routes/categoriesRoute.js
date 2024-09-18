import express from "express";

import { createCategoryCtrl, deleteCategoryByIdCtrl, getCategoryByIdCtrl, updateCategoryByIdCtrl, getAllCategoriesCtrl } from "../controllers/categoriesCtrl.js";
import { isLoggedIn } from "../middleware/isLoggedIn.js";

const categoryRoutes = express.Router()


categoryRoutes.post("/", isLoggedIn, createCategoryCtrl)
categoryRoutes.get("/", getAllCategoriesCtrl)
categoryRoutes.get("/:id", getCategoryByIdCtrl)
categoryRoutes.put("/:id", isLoggedIn, updateCategoryByIdCtrl)
categoryRoutes.delete("/:id/delete", isLoggedIn, deleteCategoryByIdCtrl)


export default categoryRoutes;
