var mongoose = require("mongoose");

function getUserModel() {
    var userSchema = mongoose.Schema;

    var userColSchema = {
        uid : {type: String,reuired: true,index: true},
        dos : Date,
        sale: Number,
        cust : Number,
    };

    var options = {
        versionKey: false, // Avoids __v field in MongoDB
    };

    var UserColSchema = new userSchema(userColSchema, options);
    var UserColRef = mongoose.model("franchiseData", UserColSchema);
    return UserColRef;
}

module.exports = { getUserModel };

