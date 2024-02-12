const slugify = require("slugify");
const asyncHandler = require("express-async-handler");
const categoryModel = require("../models/categoryModel");
const apiError = require(".././utils/apiErrors");

exports.getAllCategory = asyncHandler(async (req, res, next) => {
  const page = req.query.page * 1 || 1;
  const limit = 5;
  const skip = (page - 1) * limit;

  const category = await categoryModel.find({}).skip(skip).limit(limit);

  if (!category) {
    return next(new apiError("there's no items ", 404));
  }
  {
    res.status(200).json({ result: category.length, page, data: category });
  }
});

exports.getCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const category = await categoryModel.findById(id);
  //    return next(new apiError('this category not found', 404))
  if (!category) {
    return next(new apiError("this category not found", 404));
  }
    res.status(200).json({ data: category });
  
});

exports.createCategory = asyncHandler(async (req, res, next) => {
  const name = req.body.name;
  const category = await categoryModel.create({ name, slug: slugify(name) });
  if (!category) {
    next(new apiError("this category not found", 404));
  }
  {
    res.status(201).json(category);
  }
});
