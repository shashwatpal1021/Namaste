import Product from "../model/Product";
import Review from "../model/Review";
import asyncHandler from "express-async-handler";

// @desc Create new review
// @route POST /api/v1/reviews
// @access Private


export const createReviewCtrl = asyncHandler(async (req, res) => {
  let productId = req.params.id
  const {product, rating, message } = req.body;
  const productFound = await Product.findById(productId).populate("reviews");
  if(!productFound) {
    throw new Error("Product not found")
  }

  //check if user already reviewed this product
  // const alreadyReviewed = await Review.findOne({user: req.userAuthId, product: productFound._id});
  // if(alreadyReviewed) {
  //   throw new Error("You have already reviewed this product")
  // }
  const hasReviewed = productFound.reviews.find(r => r?.user.toString() === req?.userAuthId.toString());
  if(hasReviewed) {
    throw new Error("You have already reviewed this product")
  }
  //create review

  const review = await Review.create({
    user: req.userAuthId,
    product: productFound._id,
    rating,
    message
  });
  //push review into product found
  productFound.reviews.push(review._id);
  //save product
  await productFound.save();
  res.status(201).json({
    status: "success",
    message: "Review created successfully",
    review
  })
})