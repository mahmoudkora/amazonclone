const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "this field is require"],
      unique: [true, "this field must be unique"],
      minlength: [4, "name must be more than three words"],
      maxlength: [10, "name can't be more than 10 words"],
    },
    image: {
      type: String,
    },
    slug: { type: String, lowercase: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("category", categorySchema);
