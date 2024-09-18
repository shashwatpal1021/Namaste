import mongoose from "mongoose";

const { Schema, model } = mongoose;

// generate random number for the order
const randomTxt = Math.random().toString(36).substring(7).toLocaleUpperCase()
const randomNumbers = Math.floor(1000 + Math.random() * 9000)
const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  orderItems: [
    {
      type: Object,
      required: true,
    }
    // {
    //   name: {
    //     type: String,
    //     required: true,
    //   },
    //   quantity: {
    //     type: Number,
    //     required: true,
    //   },
    //   image: {
    //     type: String,
    //     required: true,
    //   },
    //   price: {
    //     type: Number,
    //     required: true,
    //   },
    //   product: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Product",
    //     required: true,
    //   },
    // },
  ],
  // shippingAddress: {
  //   fullName: {
  //     type: String,
  //     required: true,
  //   },
  //   address: {
  //     type: String,
  //     required: true,
  //   },
  //   city: {
  //     type: String,
  //     required: true,
  //   },
  //   postalCode: {
  //     type: String,
  //     required: true,
  //   },
  //   country: {
  //     type: String,

  //     required: true,
  //   },
  // },
  shippingAddress: {
    type: Object,
    required: true
  },
  orderNumber: {
    type: String,
    required: truw,
    default: randomTxt + randomNumbers
  },
  // for strip payment
  paymentSatus: {
    type: String,
    required: true,
    default: "Not paid",
  },
  paymentMethod: {
    type: String,
    required: true,
    default: "Cash On Delivery",
  },
  currency: {
    type: String,
    default: "Not specified",
  },
  // for admin
  status: {
    type: String,
    default: "pending",
    enum:['pending', 'processing', 'shipped', 'delivered', 'cancelled']
  },
  // deliveredAt: {
  //   type: Date,
  // },
  // paymentResult: {
  //   id: { type: String },
  //   status: { type: String },
  //   update_time: { type: String },
  //   email_address: { type: String },
  // },
  // taxPrice: {
  //   type: Number,
  //   required: true,
  //   default: 0.0,
  // },
  // shippingPrice: {
  //   type: Number,
  //   required: true,
  //   default: 0.0,
  // },
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  // isPaid: {
  //   type: Boolean,
  //   required: true,
  //   default: false,
  // },
  // paidAt: {
  //   type: Date,
  // },
  // isDelivered: {
  //   type: Boolean,
  //   required: true,
  //   default: false,
  // },
  deliveredAt: {
    type: Date,
  },
}, {
  timestamps: true,
});

const Order = model("Order", orderSchema);

export default Order;
