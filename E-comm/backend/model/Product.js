import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    ref: "Category",
    required: true
  },
  sized: {
    type: [String],
    enum: ["S", "M", "L", "XL", "XXL"],
    required: true,
  },
  colors: {
    type: [String],
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  images: [
    {
      type: String,
      default: "https://via.placeholder.com/150",
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  totalQty: {
    type: Number,
    required: true,
  },
  totalSold: {
    type: Number,
    required: true,
    default: 0,
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
});

// virtuals

//qty left

productSchema.virtual("qtyLeft").get(function () {
  const product = this;
  return product?.totalQty - product?.totalSold
});


// total rating

productSchema.virtual("totalRating").get(function () {
  const product = this;
  return product?.reviews?.length
});

// average rating

productSchema.virtual("averageRating").get(function () {
  const product = this;
  if (product?.reviews?.length === 0) {
    return 0
  }
  const totalRating = product?.reviews?.reduce((acc, review) => {
    return acc + review?.rating
  }, 0)
  return (totalRating / product?.reviews?.length).toFixed(1);
});

const Product = model("Product", productSchema)

export default Product;