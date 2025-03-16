var express=require("express");
var obj=require("../controllers/franData_controller");
var franData_router=express.Router();

franData_router.post("/save",obj.saveFranData); 
franData_router.get("/getall",obj.getAllFranData);
franData_router.get("/sales",obj.getChartsdata);


module.exports=franData_router;