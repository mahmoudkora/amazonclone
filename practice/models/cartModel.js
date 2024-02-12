const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    cartItems: [
      {
        products: {
          type: mongoose.Schema.ObjectId,
          ref: "product",
        },
        quantity: { type: Number, default: 1 },
   color:String,
   price:String,
      },
   
    ],
    totalCartPrice: Number,
    totalPriceAfterDiscount: Number,
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cart", cartSchema);

/// what that means
// when you open the cart component you will send id of user to cart 
