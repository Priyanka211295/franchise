var mongoose = require("mongoose");

function getUserModel() {
    var userSchema = mongoose.Schema;

    var userColSchema = {
        uid: { type: String, required: true, index: true, unique: true }, // Email ID
        name: String,
        mob: String,
        add: String,
        eB: String,
        since: String,
        sl: String,
        city: String,
        tarea: String,
        pincode: String,
        floor: String,
        dos: { type: Date, default: Date.now }, // Corrected Date Storage
        picpath: String,
        owner: String,
        status: { type: Number, default: 0 },
        // 0 = Pending, 1 = Accepted, -1 = Declined, 2 = Franchise
    };

    var options = {
        versionKey: false, // Avoids __v field in MongoDB
    };

    var UserColSchema = new userSchema(userColSchema, options);
    var UserColRef = mongoose.model("usersfranchise", UserColSchema);
    return UserColRef;
}


module.exports = { getUserModel };
