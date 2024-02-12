const router = require("express").Router();
const {
  createCategory,
  getCategory,
  deleteCategory,
  updateCategory,
  getAllCategories,
} = require("../servicesOrController/categoryService");
const {
  specificSubCategory,
} = require(".././servicesOrController/subCategoryService");

router.use("/:categoryId/subcategories", specificSubCategory);
router.get("/:id", getCategory);
router.get("/", getAllCategories);
router.post("/", createCategory);
router.delete("/:id", deleteCategory);
router.put("/:id", updateCategory);

module.exports = router;
