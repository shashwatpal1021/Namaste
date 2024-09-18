import Brand from "../model/Brand";
import asyncHandler from "express-async-handler";


// @desc Create new brand
// @route POST /api/v1/brands
// @access Private/Admin

export const createBrandCtrl = asyncHandler(async (req, res) => {
  const { name } = req.body;
  //brand exists
  const brandExists = await Brand.findOne({ name });
  if (brandExists) {
    throw new Error("Brand Already Exists");
  }
  // create the brand
  const brand = await Brand.create({
    name: name.toLowerCase(),
    user: req.userAuthId
  })
  res.status(201).json({
    status: "success",
    message: "Brand created successfully",
    brand,
  })
})


// @desc Get all brand
// @route GET /api/v1/brands
// @access Public


export const getAllBrandsCtrl = asyncHandler(async (req, res) => {
  const brands = await Brand.find();
  res.status(200).json({
    status: "success",
    message: "Brands fetched successfully",
    brands
  })
})


// @desc Get brand
// @route GET /api/v1/brands/:id
// @access Public


export const getBrandByIdCtrl = asyncHandler(async (req, res) => {
  const brand = await Brand.findById(req.params.id);
  if (!brand) {
    throw new Error("Brand not found")
  }
  res.status(200).json({
    status: "success",
    message: "Brand fetched successfully",
    brand
  })
})


// @desc Update brand
// @route PUT /api/v1/brands/:id
// @access Private/Admin


export const updateBrandCtrl = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const brand = await Brand.findByIdAndUpdate(req.params.id,{name},{new:true});
  if (!brand) {
    throw new Error("Brand not found")
  }
  res.status(200).json({
    status: "success",
    message: "Brand updated successfully",
    brand
  }) 
})


// @desc Delete brand
// @route DELETE /api/v1/brands/:id
// @access Private/Admin


export const deleteBrandCtrl = asyncHandler(async (req, res) => {
  await Brand.findByIdAndDelete(req.params.id);
  
  res.status(200).json({
    status: "success",
    message: "Brand deleted successfully",
  })
})
