const CategoryModel = require("../../Model/CategoryModel/CategoryModel");
const IDWithDeleteService = require("../../Service/Common/IDWithDeleteService");
const IDWithDetailsService = require("../../Service/Common/IDWithDetailsService");
const IDWithUpdateService = require("../../Service/Common/IDWithUpdateService");
const UserAllCategoryDetailsService = require("../../Service/Common/UserAllCategoryDetailsService");
const CreateService = require("../../Service/CreateService/CreateService");





// Create Category Service // ক্যটেগরি তৈরি করবে
exports.CreateCategory= async (req, res) => {
    let Result = await CreateService(req, CategoryModel);
    res.status(200).json(Result);
};

// Find User All Category Details // একজন ইউজারের সকল ক্যটেগরি শো করবে
exports.UserAllCategoryDetails= async (req, res) => {
    let Result = await UserAllCategoryDetailsService(req, CategoryModel);
    res.status(200).json(Result);
};

// Category Full Details // একটি ক্যটেগরির সকল তথ্য শো করবে। 
exports.CategoryFullDetails= async (req, res) => {
    let Result = await IDWithDetailsService(req, CategoryModel);
    res.status(200).json(Result);
};


//Category Delete  
exports.CategoryDelete= async (req, res) => {
    let Result = await IDWithDeleteService(req, CategoryModel);
    res.status(200).json(Result);
};

//Category Update  
exports.CategoryUpdate= async (req, res) => {
    let Result = await IDWithUpdateService(req, CategoryModel);
    res.status(200).json(Result);
};