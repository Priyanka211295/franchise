// // var {getUserModel}=require("../models/franchisees_model");
// // var UserColRef = getUserModel();



// // function doLoginUser(req,resp)
// // {
// //     console.log(req.body);

// //     var userObj=new UserColRef(req.body);
// //     userObj.save().then((document)=>{
// //             //resp.send(document)
// //             resp.json({doc:document,status:true,msg:"Saved Successfully"});

// //     }).catch((err)=>{
// //             console.log(err.message);
// //             //resp.send(err.message)
// //             resp.json({status:false,msg:err.message});

// //     })

// // }


// // module.exports = { doLoginUser};

// // const { getUserModel } = require("../models/franchisees_model");
// // const bcrypt = require("bcrypt"); // For password hashing
// // // const jwt = require("jsonwebtoken"); // For token generation
// // require("dotenv").config(); // For environment variables

// // const UserColRef = getUserModel();

// // async function doLoginUser(req, resp) {
// //   console.log("Login Request:", req.body);
  
// //   const { uid, pwd } = req.body; // Get user input

// //   try {
// //     // Find user by uid (username)
// //     const user = await UserColRef.findOne({ uid });

// //     if (!user) {
// //       return resp.json({ status: false, msg: "Invalid username or password" });
// //     }

// //     // Compare stored hashed password with input password
// //     const isMatch = await bcrypt.compare(pwd, user.pwd);

// //     if (!isMatch) {
// //       return resp.json({ status: false, msg: "Invalid username or password" });
// //     }

// //     // Generate JWT token
// //     const token = jwt.sign({ uid: user.uid, id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

// //     return resp.json({ status: true, msg: "Login successful", token });
    
// //   } catch (err) {
// //     console.error("Login Error:", err.message);
// //     return resp.json({ status: false, msg: "Login failed. Please try again." });
// //   }
// // }

// // module.exports = { doLoginUser };


// var { getUserModel } = require("../models/franchisees_model");
// var bcrypt = require("bcrypt");  // Ensure bcrypt is installed
// // var jwt = require("jsonwebtoken");  // Ensure jsonwebtoken is installed

// var UserColRef = getUserModel();

// async function doLoginUser(req, resp) {
//     console.log(req.body);
    
//     const { uid, pwd } = req.body;  // Get user input
    
//     try {
//         let user = await UserColRef.findOne({ uid: uid });  // Find user by UID

//         if (!user) {
//             return resp.json({ status: false, msg: "Invalid username or password" });
//         }

//         // Check password (Assuming password is stored as a hashed value)
//         const isMatch = await bcrypt.compare(pwd, user.pwd);
//         if (!isMatch) {
//             return resp.json({ status: false, msg: "Invalid username or password" });
//         }

//         // Generate JWT Token (Replace 'your_secret_key' with a real secret key)
//         const token = jwt.sign({ uid: user.uid }, "your_secret_key", { expiresIn: "1h" });

//         resp.json({ status: true, msg: "Login successful", token: token });
//     } catch (err) {
//         console.error(err.message);
//         resp.json({ status: false, msg: "Server error. Please try again later." });
//     }
// }

// module.exports = { doLoginUser };

var {getUserModel}=require("../models/franchisees_model");
var UserColRef = getUserModel();



function doLoginUser(req,resp)
{
    console.log(req.body);

    var userObj=new UserColRef(req.body);
    userObj.save().then((document)=>{
            //resp.send(document)
            resp.json({doc:document,status:true,msg:"Saved Successfully"});

    }).catch((err)=>{
            console.log(err.message);
            //resp.send(err.message)
            resp.json({status:false,msg:err.message});

    })

}




module.exports = { doLoginUser};