const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "category required"],
      unique: [true, "category must be unique"],
      minlength: [3, "this name must by more than 3 words"],
      maxlength: [20, "this name is too long"],
    },
    slug: { type: String, lowercase: true },
  },
  { timestamps: true }
);

const categoryModel = mongoose.model("category", categorySchema);

module.exports = categoryModel;
