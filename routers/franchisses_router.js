// var express=require("express");
// var obj=require("../controllers/franchisses_controller");
// var franchisses_router=express.Router();

// franchisses_router.post("/loginuser",obj.doLoginUser);

// module.exports=franchisses_router;

var express=require("express");
var obj=require("../controllers/franchisses_controller");
var obj1=require("../controllers/checkloginController");
var franchisses_router=express.Router();

franchisses_router.post("/loginuser",obj.doLoginUser);
franchisses_router.post("/checkuser",obj1.doCheckUser);


module.exports=franchisses_router;