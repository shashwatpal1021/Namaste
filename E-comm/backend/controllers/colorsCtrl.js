import asyncHandler from "express-async-handler";
import Color from "../model/Color.js";

// @desc Create new color
// @route POST /api/v1/colors
// @access Private/Admin


export const createColorCtrl = asyncHandler(async (req, res) => {
  const { name } = req.body;
  //color exists
  const colorExists = await Color.findOne({ name });
  if (colorExists) {
    throw new Error("Color Already Exists");
  }
  // create the color
  const color = await Color.create({
    name: name.toLowerCase(),
    user: req.userAuthId
  })
  res.status(201).json({
    status: "success",
    message: "Color created successfully",
    color,
  })
})


// @desc Get all color
// @route GET /api/v1/colors
// @access Public


export const getAllColorsCtrl = asyncHandler(async (req, res) => {
  const colors = await Color.find();
  res.status(200).json({
    status: "success",
    message: "Colors fetched successfully",
    colors
  })
})


// @desc Get color
// @route GET /api/v1/colors/:id
// @access Public


export const getColorByIdCtrl = asyncHandler(async (req, res) => {
  const color = await Color.findById(req.params.id);
  if (!color) {
    throw new Error("Color not found")
  }
  res.status(200).json({
    status: "success",
    message: "Color fetched successfully",
    color
  })
})


// @desc Update color
// @route PUT /api/v1/colors/:id
// @access Private/Admin


export const updateColorCtrl = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const color = await Color.findByIdAndUpdate(req.params.id, {
    name
  }, {
    new: true
  })
  res.status(200).json({
    status: "success",
    message: "Color updated successfully",
    color
  })
})

// @desc Delete color
// @route DELETE /api/v1/colors/:id
// @access Private/Admin


export const deleteColorCtrl = asyncHandler(async (req, res) => {
  await Color.findByIdAndDelete(req.params.id)
  
  res.status(200).json({
    status: "success",
    message: "Color deleted successfully",
  })
})

