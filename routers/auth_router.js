var express = require("express");
var obj = require("../controllers/auth_controller");
var auth_router = express.Router();

auth_router.post("/updatepassword",obj.updatePassword);

module.exports = auth_router;
