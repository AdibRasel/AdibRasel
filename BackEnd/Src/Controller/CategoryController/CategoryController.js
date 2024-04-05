const CategoryModel = require("../../Model/CategoryModel/CategoryModel");
const CreateService = require("../../Service/CreateService/CreateService");





// Create Category Service
exports.CreateCategory= async (req, res) => {
    let Result = await CreateService(req, CategoryModel);
    res.status(200).json(Result);
};