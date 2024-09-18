import asyncHandler from "express-async-handler";
import Category from "../model/Category";

// @desc Create new category
// @route POST /api/v1/categories
// @access Private/Admin

export const createCategoryCtrl = asyncHandler(async (req, res) => {
  const { name } = req.body;
  //category exists
  const categoryExists = await Category.findOne({ name });
  if (categoryExists) {
    throw new Error("Category Already Exists");
  }
  // create the category
  const category = await Category.create({
    name: name.toLowerCase(),
    user: req.userAuthId
  })
  res.status(201).json({
    status: "success",
    message: "Category created successfully",
    category,
  })
})


// @desc Get all category
// @route GET /api/v1/categories
// @access Public


export const getAllCategoriesCtrl = asyncHandler(async (req, res) => {
  const categories = await Category.find();
  res.status(200).json({
    status: "success",
    message: "Categories fetched successfully",
    categories
  })
})


// @desc Get category
// @route GET /api/v1/categories/:id
// @access Public


export const getCategoryByIdCtrl = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    throw new Error("Category not found")
  }
  res.status(200).json({
    status: "success",
    message: "Category fetched successfully",
    category
  })
})


// @desc Update category
// @route PUT /api/v1/categories/:id
// @access Private/Admin


export const updateCategoryByIdCtrl = asyncHandler(async (req, res) => {

  const { name } = req.body
  const category = await Category.findByIdAndUpdate(req.params.id, {
    name
  }, {
    new: true,
  })
  if (!category) {
    throw new Error("Category not found")
  }
  res.status(200).json({
    status: "success",
    message: "Category updated successfully",
    category
  })
})

// @desc Delete category
// @route DELETE /api/v1/categories/:id
// @access Private/Admin


export const deleteCategoryByIdCtrl = asyncHandler(async (req, res) => {
  await Category.findByIdAndDelete(req.params.id)

  res.status(200).json({
    status: "success",
    message: "Category deleted successfully",
  })
})