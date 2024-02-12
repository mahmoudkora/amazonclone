const category = require("../models/categoryModel");
const slugify = require("slugify");
const ApiError = require("../utils/apiHandleError");
const asyncHandler = require("express-async-handler");

exports.getCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const selectedCategory = await category.findById(id);

  if (!selectedCategory) {
    return next(new ApiError("SORRY! this catgeory not found", 404));
  } 
    res.status(201).json(selectedCategory);
  
});

exports.getAllCategories = asyncHandler(async (req, res) => {
  const limit = +req.query.limit || 5;
  const page = +req.query.page || 1;
  const skip = (page - 1) * limit;
  const categories = await category.find({}).skip(skip).limit(limit);
 
  if (!categories) {
    return next(new ApiError("SORRY! this catgeory not found", 404));
  } 
  res.status(201).json({ page, length: categories.length, data: categories });
});

exports.createCategory = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const createdCategory = await category.create({
    name,
    slug: slugify(name),
  });
  res.status(201).json(createdCategory);
});

exports.deleteCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deletedCategory = await category.deleteOne({ _id: id });
  if(!deletedCategory){
    next(new ApiError('this item can\'t delete for now ' , 404))
 }

  res.status(201).json(selectedCategory);

});

exports.updateCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const updatedCategory = await category.updateOne(
    { _id: id },
    { name, slug: slugify(name) },
    {
      new: true,
    }
  );
 if(!updatedCategory){
    next(new ApiError('this item can\'t update for now',404))
 }

  res.status(201).json(selectedCategory);
});
