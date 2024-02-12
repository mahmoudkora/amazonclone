const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const categoryRoutes = require("./routes/categoryRoute.js");
const subCategoryRoutes = require("./routes/subCategoryRoute.js");
const DBconnection = require("./config/dbConnection.js");
const errorHandler = require("./middleware/handleErrorMiddleware.js");
const ApiError = require("./utils/apiHandleError");
const {USERS,createRandomUser} = require('./utils/fakeData.js')
const PORT = process.env.PORT || 4500;
app.use(express.json());

app.use("/category", categoryRoutes);

app.use("/subcategory", subCategoryRoutes);

app.all("*", (req, res, next) => {
  next(new ApiError("Something bad happened.", 450));
});

app.use(errorHandler);
USERS()
console.log('hi');
DBconnection();
app.listen(PORT, () => {
  console.log("server running well");
});
