// // var mongoose = require("mongoose");
// // function getUserModel()
// // {
// //    var userScheema = mongoose.Schema;

// //    var userColSchema =
// //    {
// //       uid: { type: String, required: true, index: true }, // Ensure uid is unique
// //       pwd: String,
// //    }
// //    var options = {
// //       versionKey: false, // Avoids __v field in MongoDB
// //    };

// //    // var UserColSchema = new userScheema(userColSchema, options);
// //    // var UserColRef = mongoose.model("franchisees", UserColSchema);
// //    // return UserColRef;

// //    return mongoose.models.franchisees || mongoose.model("franchisees", new userScheema(userColSchema, options));
// // }

// // module.exports = { getUserModel }

// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// const userSchema = new mongoose.Schema({
//     uid: { type: String, required: true}, // Unique username
//     pwd: { type: String, required: true }, // Hashed password
    
// });

// // Middleware: Hash password before saving to database
// userSchema.pre("save", async function (next) {
//     if (!this.isModified("pwd")) return next();
    
//     try {
//         const saltRounds = 10;
//         this.pwd = await bcrypt.hash(this.pwd, saltRounds);
//         next();
//     } catch (err) {
//         next(err);
//     }
// });

// // Define User Model
// function getUserModel() {
//     return mongoose.model("Franchisee", userSchema);
// }

// module.exports = { getUserModel };

var mongoose = require("mongoose");
function getUserModel()
{
   var userScheema = mongoose.Schema;

   var userColSchema =
   {
      uid: { type: String, required: true, index: true }, // Ensure uid is unique
      password: String,
   }
   var options = {
      versionKey: false, // Avoids __v field in MongoDB
   };

   // var UserColSchema = new userScheema(userColSchema, options);
   // var UserColRef = mongoose.model("franchisees", UserColSchema);
   // return UserColRef;

   return mongoose.models.franchisees || mongoose.model("franchisees", new userScheema(userColSchema, options));
   
   // var UserColSchema = new userScheema(userColSchema, options);
   // var UserColRef = mongoose.model("login", UserColSchema);
   // return UserColRef;
}

module.exports = { getUserModel }