const CreateService = require("../../Service/CreateService/CreateService");
const UserRegistrationModel = require("../../Model/UserModel/UserRegistrationModel");
const UserRegistrationService = require("../../Service/UserRegistrationService/UserRegistrationService");
const UserLoginService = require("../../Service/UserLoginService/UserLoginService");
const UserDetailsService = require("../../Service/UserDetailsService/UserDetailsService");





// User Registration Service
exports.UserRegistration= async (req, res) => {
    let Result = await UserRegistrationService(req, UserRegistrationModel);
    res.status(200).json(Result);
};


// User Login Service
exports.UserLogin= async (req, res) => {
    let Result = await UserLoginService(req, UserRegistrationModel);
    res.status(200).json(Result);
};


// User Details Service
exports.UserDetails= async (req, res) => {
    let Result = await UserDetailsService(req, UserRegistrationModel);
    res.status(200).json(Result);
};
