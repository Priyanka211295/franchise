var { getUserModel } = require("../models/userModel");
var UserColRef = getUserModel();
var cloudinary = require("cloudinary").v2;
var path = require("path");
var emailjs = require("emailjs-com");
var cors=require("cors");

async function doSaveUser(req, resp) {
    let filename = "";
    if (req.files == null)
        filename = "nopic.jpg";
    else {
        filename = req.files.ppic.name;
        var filepath = path.join(__dirname, "..", "uploads", filename);
        req.files.ppic.mv(filepath);
        console.log(filepath);

        await cloudinary.uploader.upload(filepath).then(function (result) {
            filename = result.url;
            console.log(filename);
        });
    }
    req.body.picpath = filename;
    var userJson = new UserColRef(req.body);
    userJson.save().then((document) => {
        resp.json({ doc: document, status: true, msg: "saved" }); // saved doc will be returned
    }).catch((err) => {
        resp.json({ status: false, msg: err.message });
    });
}

// 🟢 Get All Users Based on Status
async function doGetAllUsers(req, resp) {
    try {
        let statusFilter = req.query.status;
        let query = {};

        // ✅ Ensure status is a valid number
        if (statusFilter && statusFilter !== "all") {
            const parsedStatus = parseInt(statusFilter);
            if (!isNaN(parsedStatus)) {
                query.status = parsedStatus;
            }
        }

        console.log("🔥 Fetching users with filter:", query);

        const users = await UserColRef.find(query);
        console.log("✅ Users fetched:", users.length);

        resp.json({ status: true, data: users });

    } catch (err) {
        console.error("❌ Error fetching users:", err);
        resp.json({ status: false, msg: err.message });
    }
}

async function doUpdateUserStatus(req, resp) {
    try {
        console.log("🔍 Received request body:", req.body); // ✅ Debugging

        const { uid, status } = req.body;

        if (!uid || status === undefined) {
            console.log("❌ Missing uid or status:", req.body);
            return resp.json({ status: false, msg: "Missing uid or status" });
        }

        console.log(`🔍 Searching for user with UID: ${uid}`);

        const user = await UserColRef.findOne({ uid: String(uid) });

        if (!user) {
            console.log("❌ User not found");
            return resp.json({ status: false, msg: "User not found" });
        }

        user.status = status;
        await user.save();

        console.log(`✅ User ${uid} status updated to ${status}`);
        resp.json({ doc: user, status: true, msg: "User status updated" });

    } catch (err) {
        console.error("❌ Error updating user status:", err);
        resp.json({ status: false, msg: err.message });
    }
}

module.exports = { doSaveUser, doGetAllUsers, doUpdateUserStatus };


