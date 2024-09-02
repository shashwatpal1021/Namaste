import express from "express";
import { hello } from "../Controller/shashwat.controller.js";

const shashwatRoutes = express.Router();


shashwatRoutes.get("/", hello)

export default shashwatRoutes