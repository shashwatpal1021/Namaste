import express from 'express';

import { createReviewCtrl, deleteReviewByIdCtrl, getReviewByIdCtrl, getReviewsCtrl, updateReviewByIdCtrl } from '../controllers/reviewCtrl.js';
import { isLoggedIn } from '../middleware/isLoggedIn.js';


const reviewRoutes = express.Router()


reviewRoutes.post("/:productID", isLoggedIn, createReviewCtrl)
reviewRoutes.get("/", getReviewsCtrl)
reviewRoutes.get("/:id", getReviewByIdCtrl)
reviewRoutes.put("/:id", isLoggedIn, updateReviewByIdCtrl)
reviewRoutes.delete("/:id/delete", isLoggedIn, deleteReviewByIdCtrl)


export default reviewRoutes;