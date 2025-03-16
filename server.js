var express=require("express");
var fileuploader=require("express-fileupload");
var mongoose=require("mongoose");
var cors=require("cors");
var path=require("path");
var {url}=require ("./config/config");
var cloudinary=require("cloudinary").v2;
var dotenv=require("dotenv");
dotenv.config();

var app=express();
app.use(express.json());


app.use(cors());
app.listen(1963,function(){
    console.log("Server Started...");
})
app.use(express.urlencoded({ extended: true }));
app.use(fileuploader());

 var urll=url;

mongoose.connect(urll).then(()=>{
    console.log("Connected");
}).catch((err)=>{
    console.log(err.message);
})

cloudinary.config({ 
    cloud_name: 'dj4dommuy', 
    api_key: '438245931596139', 
    api_secret: 'OXnORddlBE4ChMc5YrWVfLvga5s'// Click 'View API Keys' above to copy your API secret
});

var userRouter=require("./routers/userRouter");
app.use("/user",userRouter);

var adminRouter=require("./routers/adminRouter");
app.use("/admin",adminRouter);

var franchisses_router=require("./routers/franchisses_router");
app.use("/franchisees",franchisses_router);

var franData_router=require("./routers/franData_router");
app.use("/franData",franData_router);

var auth_router = require("./routers/auth_router");
app.use("/auth", auth_router);





