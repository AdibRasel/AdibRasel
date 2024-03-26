const EmailModel = require("../../Model/Email/EmailModel");
const EmailCreateService = require("../../Service/EmailCreateService/EmailCreateService");





// Create Email 
exports.CreateEmailController = async (req, res) => {
    let Result = await EmailCreateService(req, EmailModel);
    res.status(200).json(Result);
};