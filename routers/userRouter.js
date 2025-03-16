var express = require("express");
var obj = require("../controllers/userController");
var userRouter = express.Router();

userRouter.post("/saveuser", obj.doSaveUser); // Save new application
userRouter.get("/getallusers", obj.doGetAllUsers); // Get users
userRouter.post("/updateStatus", obj.doUpdateUserStatus); // Update user status

module.exports = userRouter;
