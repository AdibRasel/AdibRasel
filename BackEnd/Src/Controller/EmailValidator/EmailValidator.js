const { EmailValidatorHelper } = require("../../Utility/EmailValidator/EmailValidatorHelper");


exports.EmailValidator = async (req, res) => {
    let Result = await EmailValidatorHelper(req, res);
    res.status(200).json(Result);
};