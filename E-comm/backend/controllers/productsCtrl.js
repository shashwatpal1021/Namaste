import asyncHandler from "express-async-handler"
import Product from "../model/Product.js";
import Category from "../model/Category.js";
import Brand from "../model/Brand.js";

// @desc Create new product
// @route POST /api/v1/products
// @access Private/Admin

export const createProductCtrl = asyncHandler(async (req, res) => {
  const { name, description, category, sizes, colors, price, brand, totalQty } = req.body;

  // product exists
  const productExists = await Product.findOne({ name });
  if (productExists) {
    throw new Error("Product Already Exists");
  }
  // category exists
  const categoryExists = await Category.findOne({ name: category });

  if (!categoryExists) {
    throw new Error("Category not found, please create the category first or check the category name");
  }

  // find the brand
  const brandFound = await Brand.findOne({ name: brand?.toLowerCase() });

  if (!brandFound) {
    throw new Error("Brand not found, please create the brand first or check the brand name");
  }

  // create the product
  const product = await Product.create({
    name,
    description,
    category,
    sizes,
    colors,
    user: req.userAuthId,
    price,
    totalQty,
    brand
  })

  //push the product into category
  categoryExists.products.push(product._id);
  //resave the category
  await categoryExists.save();
  // push the product into brand
  brandFound.products.push(product._id);
  //resave the brand
  await brandFound.save();
  //send response
  res.status(201).json({
    status: "success",
    message: "Product created successfully",
    product,
  })
})

// @desc Get all product
// @route GET /api/v1/products
// @access Public


export const getProductsCtrl = asyncHandler(async (req, res) => {
  let productQuery = Product.find();

  // search by name
  if (req.query.name) {
    productQuery = productQuery.find({
      name: { $regex: req.query.name, $options: "i" }
    });
  }

  // filter by brand
  if (req.query.brand) {
    productQuery = productQuery.find({
      brand: { $regex: req.query.brand, $options: "i" }
    });
  }

  //filter by category
  if (req.query.category) {
    productQuery = productQuery.find({
      category: { $regex: req.query.category, $options: "i" }
    });
  }

  //filter by size
  if (req.query.size) {
    productQuery = productQuery.find({
      size: { $regex: req.query.size, $options: "i" }
    });
  }

  //filter by colors
  if (req.query.colors) {
    productQuery = productQuery.find({
      colors: { $regex: req.query.colors, $options: "i" }
    });
  }

  // filter by price range
  if (req.query.price) {
    const priceRange = req.query.price.split("-");
    // gte: greater or equal
    // lte: less than or equal
    productQuery = productQuery.find({
      price: { $gte: priceRange[0], $lte: priceRange[1] }
    })
  }

  // pagination
  // page
  const page = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
  // limit
  const limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : 1;
  // startIdx 
  const startIdx = (page - 1) * limit;
  // endIdx
  const endIdx = page * limit
  // total
  const total = await Product.countDocuments()

  productQuery = productQuery.skip(startIdx).limit(limit)

  // pagination results
  const pagination = {}
  if (endIdx < total) {
    pagination.next = {
      page: page + 1,
      limit
    }
  }
  if (startIdx > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    }
  }
  // await the query
  const products = await productQuery.populate("reviews")
  res.status(200).json({
    status: "success product",
    total,
    results: products.length,
    pagination,
    message: "Products fetched successfully",
    products
  })

})

// @desc Get single product
// @route GET /api/v1/products/:id
// @access Public


export const getProductByIdCtrl = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate("reviews")
  if (!product) {
    throw new Error("Product not found")
  }
  res.status(200).json({
    status: "success",
    message: "Product fetched successfully",
    product
  })
})

// @desc update single product
// @route PUT /api/v1/products
// @access Public


export const updateProductByIdCtrl = asyncHandler(async (req, res) => {
  const { name, description, category, sizes, colors, user, price, brand, totalQty } = req.body
  const product = await Product.findByIdAndUpdate(req.params.id, {
    name, description, category, sizes, colors, user, price, brand, totalQty
  }, {
    new: true,
  })
  if (!product) {
    throw new Error("Product not found")
  }
  res.status(200).json({
    status: "success",
    message: "Product updated successfully",
    product
  })
})

// @desc delete single product
// @route DELETE /api/v1/products/:id
// @access Public


export const deleteProductByIdCtrl = asyncHandler(async (req, res) => {
  await Product.findByIdAndDelete(req.params.id)

  res.status(200).json({
    status: "success",
    message: "Product deleted successfully",

  })
})