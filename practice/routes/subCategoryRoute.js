const Router = require("express").Router({ margeParams: true });
const {
  createSubCategory,
  deleteSubCategory,
  getAllSubCategory,
  getSubCategory,
  updateSubCategory,
} = require("../servicesOrController/subCategoryService");

Router.route("/").post(createSubCategory).get(getAllSubCategory);
Router.route("/:id")
  .delete(deleteSubCategory)
  .put(updateSubCategory)
  .get(getSubCategory);

module.exports = Router;
