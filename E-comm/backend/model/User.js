import mongoose from "mongoose";
const { Schema, model } = mongoose
const userSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  orders: [
    {
      types: Schema.Types.ObjectId,
      ref: "Order"
    }
  ],
  whishlist: [
    {
      // types: Schema.Types.ObjectId,
      // ref: "Whishlist"
    }
  ],
  isAdmin: {
    type: Boolean,
    default: false
  },
  hasShippingAddress: {
    type: Boolean,
    default: false
  },
  shippingAddress: {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    address: {
      type: String
    },
    city: {
      type: String
    },
    postalCode: {
      type: String
    },
    postalCode: {
      type: String
    },
    province: {
      type: String
    },
    countery: {
      type: String
    },
    phone: {
      type: String
    }
  },
}, {
  timestamps: true
});

// compile the schema to model

const User = model('User', userSchema);

export default User;
