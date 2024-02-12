const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "required name"],
      minlength: 4,
    },
    email: {
      type: String,
      required: [true, "email required"],
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: [true, "password required"],
      minlength: [6, "Too short password"],
    },
    address: [{ adressone: String }, { addresstwo: String }],
    role: {
        type: String,
        enum: ['user', 'manager', 'admin'],
        default: 'user',
    },  
    phone: Number,
    active: {
        type: Boolean,
        default: true,
      },
      // child reference (one to many)
      wishlist: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'Product',
        },
      ],
},

  { timestamp: true }
);
