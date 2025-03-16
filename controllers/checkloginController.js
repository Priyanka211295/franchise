var { getUserModel } = require("../models/franchisees_model");
var UserColRef = getUserModel();

async function doCheckUser(req, resp) {
    const { uid, pwd } = req.body;

    try {
        const user = await UserColRef.findOne({ uid });

        if (!user) {
            return resp.status(404).json({ status: false, msg: "User not found" });
        }

        if (user.password !== pwd) {
            return resp.status(401).json({ status: false, msg: "Invalid password" });
        }

        resp.json({ status: true, msg: "Login successful" });

    } catch (error) {
        console.error("Login Error:", error);
        resp.status(500).json({ status: false, msg: "Server error" });
    }
}

module.exports = { doCheckUser };
