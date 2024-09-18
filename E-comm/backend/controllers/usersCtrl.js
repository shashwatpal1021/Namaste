// import User from '../model/User.js';

import User from "../model/User.js";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { generateToken, getTokenFromHeader } from "../utils/generateToken.js";
import { verifyJWT } from "../utils/verifyToken.js";

// @desc Register user
// @ route POST /api/v1/users/register
// @access Private/Admin

export const registerUserCtrl = asyncHandler(async (req, res) => {
  const { fullname, email, password } = req.body
  //check user exists
  const userExits = await User.findOne({ email })
  if (userExits) {
    throw new Error("User already exists")
  }

  // hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt)
  // create the user

  const user = await User.create({
    fullname, email,
    password: hashedPassword,
  })
  res.status(201).json({
    status: 'success',
    message: "User Registered Successfully",
    data: user
  })

})


// @desc Login user
// @route POST /api/v1/users/login


export const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  // find the user in db by email only

  const userFound = await User.findOne({
    email,
  })

  if (userFound && await bcrypt.compare(password, userFound?.password)) {
    const token = generateToken(userFound._id)
    const options = {
      httpOnly: true,
      secure: true
    }
    res.status(200)
      .cookie("token", token, options)
      .json({
        status: "success",
        userFound,
        token
      });
  } else {
    throw new Error("Invalid login")
  }
})


// @desc Get user profile
// @route GET/api/v1/users/profile
// @access Private

export const getUserProfileCtrl = asyncHandler(async (req, res) => {
  const token = getTokenFromHeader(req);
  const verified = verifyJWT(token)
  
  console.log(req.userAuthId)
  // const user = await User.findById(verified.id)
  // if (!user) {
  //   throw new Error("User not found")
  // }
  res.status(200).json({
   status: "success",
  })
})

// @desc Upadate user shipping address
// @route PUT /api/v1/users/update/shipping
// @access Private

export const updateShippingAddressCtrl = asyncHandler(async (req, res) => {
  const { firstName, lastName, address, city, postalCode, province, phone } = req.body
  const user = await User.findByIdAndUpdate(req.userAuthId, {
    shippingAddress: {
      firstName, lastName, address, city, postalCode, province, phone
    },
    hasShippingAddress: true
  }, { new: true });
  // send response
  res.status(200).json({
    status: "success",
    message: "Shipping address updated successfully",
    user
  })
}) 