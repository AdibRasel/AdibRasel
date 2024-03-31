const LoginVerifyMiddleware = require("../../Middleware/LoginVerifyMiddleware");
const UserRegistrationModel = require("../../Model/UserModel/UserRegistrationModel");


// User Registration Service
exports.LoginVerifyController = async (req, res) => {
    try {
        await LoginVerifyMiddleware(req, res, UserRegistrationModel);
    } catch (error) {
        return res.status(500).json({ status: "Internal Server Error", message: "Login verification failed" });
    }
};