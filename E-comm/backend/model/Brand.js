// Brand Schema

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const brandSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    }
  ]
}, {
  timestamps: true,
});

const Brand = model("Brand", brandSchema)

export default Brand;