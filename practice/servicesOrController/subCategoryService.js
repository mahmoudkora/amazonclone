const subCategory = require("../models/subCategoryModel");
const slugify = require("slugify");
const ApiError = require("../utils/apiHandleError");
const asyncHandler = require("express-async-handler");

exports.createSubCategory = asyncHandler(async (req, res, next) => {
  const { name, category } = req.body;
  const create = await subCategory.create({
    name,
    slug: slugify(name),
    category,
  });

  if (!create) {
    return next(new ApiError("there is something wrong", 401));
  }
  res.status(201).json(create);
});

exports.getAllSubCategory = asyncHandler(async (req, res, next) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 5;
  const skip = (page - 1) * limit;
  const getAll = await subCategory
    .find({})
    .skip(skip)
    .limit(limit)
    .populate({ path: "category", select: "name -_id " });

  if (!getAll) {
    return next(new ApiError("there's no subcategory yet! ", 404));
  }
  res.status(200).json({ data: getAll });
});

exports.specificSubCategory = asyncHandler(async (req, res, next) => {
    const categoryId = req.params.categoryId;
    const getSpecificAll = await subCategory.find({category:categoryId})
  res.json({data:getSpecificAll})
});

exports.getSubCategory = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const get = await subCategory.find({ _id: id });
  if (!get) {
    return next(new ApiError("sorry not found subcategory"));
  }
  res.status(200).json({ data: get });
});

exports.deleteSubCategory = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const deletedSubCategory = await subCategory.deleteOne({ _id: id });
  if (!deletedSubCategory) {
    next(new ApiError("this item can't delete for now ", 404));
  }
  res.status(201).json({ msg: "sucsses deleted!", selectedCategory });
});

exports.updateSubCategory = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const name = req.body.name;
  const updatedSubCategory = await subCategory.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  );
  if (!updatedSubCategory) {
    next(new ApiError("this item can't update for now", 404));
  }

  res.status(201).json(updatedSubCategory);
});
