var mongoose = require("mongoose");

function getAdminModel() {
    var adminSchema = mongoose.Schema;

    var adminColSchema = {
        uid : { type: String, required: true, index: true, unique: true}, // Email ID
        pwd : String
    };

    var options = {
        versionKey: false, // Avoids __v field in MongoDB
    };

    var AdminColSchema = new adminSchema(adminColSchema, options);
    var AdminColRef = mongoose.model("admin", AdminColSchema);
         return AdminColRef;
}

module.exports = { getAdminModel };