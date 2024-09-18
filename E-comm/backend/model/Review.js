import mongoose from "mongoose";
const { Schema, model } = mongoose;

const reviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true,"Review must belong to a user"]
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: [true,"Review must belong to a product"]
  },
  message: {
    type: String,
    required: [true,"Please add a message"]
  },
  rating: {
    type: Number,
    required: [true, "Please add a rating"],
    min: 1,
    max: 5
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
});

const Review = model("Review", reviewSchema)

export default Review;
