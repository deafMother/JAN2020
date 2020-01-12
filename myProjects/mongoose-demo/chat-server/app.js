const express = require("express");
const globalErrorController = require("./controller/errorController");

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  console.log("Request send");
});

// error handling route
app.all("*", (req, res, next) => {
  // throw error using AppError
  next(new AppError("This route is not defined", 404));
});

//  this the global error controller
app.use(globalErrorController);
module.exports = app;
