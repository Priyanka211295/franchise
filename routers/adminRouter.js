var express = require("express");
var obj = require("../controllers/adminController");
var adminRouter = express.Router();

adminRouter.post("/login", obj.doLogin); // Login

module.exports = adminRouter;