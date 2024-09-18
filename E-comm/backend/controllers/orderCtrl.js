import Order from "../model/Order";

import asyncHandler from "express-async-handler";
import User from "../model/User";

// @desc Create new order
// @route POST /api/v1/orders
// @access Private


export const createOrderCtrl = asyncHandler(async (req, res) => {
  // get the payload (customer,orderItems,shoppingAddress,totalprice)
  const { orderItems, shippingAddress, totalPrice } = req.body;
  //find the user
  const user = await User.findById(req.userAuthId);
  // check if user has shipping 
  if (!user?.hasShippingAddress) {
    throw new Error("Please add shipping address")
  }
  //check if the order is not empty
  if (!orderItems || orderItems.length === 0) {
    throw new Error("No order items")
  }

  // place/create order - save into DB
  const order = await Order.create({
    user: user?._id,
    orderItems,
    shippingAddress,
    totalPrice
  })
  //push order into user order
  user.orders.push(order._id);
  await user.save();
  // update the product qty
  const products = await find({
    _id: { $in: orderItems }
  });
  orderItems?.map(async (order) => {
    const product = products?.find((product) => {
      return product?._id.toString() === order?._id.toString();
    })
    if (product) {
      product.totalSold += order.qty
    }
    await product?.save();
  })
  //push order into user order
  user.orders.push(order._id);
  await user.save();
  // send response
  res.status(201).json({
    status: "success",
    message: "Order created successfully",
    order, user
  })
  // make payment (stripe)
  // payment webhook
  // update the user order


})