const mongoose = require("mongoose");
const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter name of sub Category "],
      unique: [true, "sorry this name is assigned before"],
      minlength: [3, "this name is too short"],
      maxlength: [20, "this name is too long"],
    },
    slug: { type: String, lowercase: true },
    category: {
        ref: "category",
      type: mongoose.Schema.ObjectId,
      required: [true, " subcategory must belong to main category"],
    },
  },
  { timestamps: true }
);

const subCategory  = mongoose.model("subCategory",subCategorySchema);

module.exports = subCategory;



    // image: {
    //   type: String,
    //   required: [true, "please this subCategory must have an image"],
    // },