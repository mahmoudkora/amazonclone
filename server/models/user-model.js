const mongoose = require("mongoose");

const user = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please do't leave this filed"],
  },
  phone: {
    type: Number,
    email: {},
  },
  adress: { firstOne: String, lastOne: String },
  role: Number,
  password: String,
  rePassword: String,
});

let users = mongoose.model("users", user);
module.exports = users;
