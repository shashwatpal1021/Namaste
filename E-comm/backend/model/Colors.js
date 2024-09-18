import mongoose from "mongoose";
const { Schema, model } = mongoose;

const colorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true
  },
  products: [
    {
    type: Schema.Types.ObjectId,
    ref: "Product",
    },
  ],
}, {
  timestamps: true,
});

const Color = model("Color", colorSchema)

export default Color