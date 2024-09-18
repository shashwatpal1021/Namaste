import mongoose from "mongoose";
const { Schema, model } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true
  },
  products: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
 
  images: [
    {
      type: String,
      default: "https://via.placeholder.com/150",
    },
  ],
  
}, {
  timestamps: true,
});


const Category = model("Category", categorySchema)

export default Category;