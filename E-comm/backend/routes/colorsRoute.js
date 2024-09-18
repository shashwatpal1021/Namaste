import express from "express";
import { createColorCtrl, deleteColorByIdCtrl, getColorByIdCtrl, getColorsCtrl, updateColorByIdCtrl } from "../controllers/colorsCtrl.js";
import { isLoggedIn } from "../middleware/isLoggedIn.js";


const colorsRoute = express.Router()


colorsRoute.post("/", isLoggedIn, createColorCtrl)
colorsRoute.get("/", getColorsCtrl)
colorsRoute.get("/:id", getColorByIdCtrl)
colorsRoute.put("/:id", isLoggedIn, updateColorByIdCtrl)
colorsRoute.delete("/:id/delete", isLoggedIn, deleteColorByIdCtrl)


export default colorsRoute
