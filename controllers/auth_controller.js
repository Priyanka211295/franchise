var { getUserModel } = require("../models/franchisees_model"); 
var UserColRef = getUserModel();

async function updatePassword(req, resp) {
    console.log("🔍 Full request received:", req.headers["content-type"]); // Log Content-Type
    console.log("🔍 Raw request body:", req.body); // Debugging request payload

    const { uid, oldPassword, newPassword } = req.body;

    console.log("🔍 Received UID:", uid);
    console.log("🔍 Old Password:", oldPassword);
    console.log("🔍 New Password:", newPassword);

    if (!uid) {
        return resp.status(400).json({ success: false, message: "❌ UID is missing from request." });
    }

    try {
        const user = await UserColRef.findOne({ uid });

        if (!user) {
            console.log("❌ User not found for UID:", uid);
            return resp.status(404).json({ success: false, message: "User not found" });
        }

        if (user.password !== oldPassword) {
            return resp.status(400).json({ success: false, message: "❌ Old password is incorrect." });
        }

        const updateResult = await UserColRef.findOneAndUpdate(
            { uid },
            { $set: { password: newPassword } },
            { new: true }
        );

        console.log("🔄 MongoDB Update Result:", updateResult);

        return resp.json({ success: true, message: "✅ Password updated successfully!" });
    } catch (error) {
        console.error("❌ Error updating password:", error);
        return resp.status(500).json({ success: false, message: "❌ Server error. Please try again later." });
    }
}


module.exports = { updatePassword };

