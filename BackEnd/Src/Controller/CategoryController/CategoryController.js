const CategoryModel = require("../../Model/CategoryModel/CategoryModel");
const UserAllCategoryDetailsService = require("../../Service/Common/UserAllCategoryDetailsService");
const CreateService = require("../../Service/CreateService/CreateService");





// Create Category Service
exports.CreateCategory= async (req, res) => {
    let Result = await CreateService(req, CategoryModel);
    res.status(200).json(Result);
};

// Find User All Category Details
exports.UserAllCategoryDetails= async (req, res) => {
    let Result = await UserAllCategoryDetailsService(req, CategoryModel);
    res.status(200).json(Result);
};