const CategoryModel = require("../../Model/CategoryModel/CategoryModel");
const PostModel = require("../../Model/PostModel/PostModel");
const AllinfoService = require("../../Service/AllinfoService/AllinfoService");






// Create Category Service // ক্যটেগরি তৈরি করবে
exports.Allinfo= async (req, res) => {
    let Result = await AllinfoService(req, CategoryModel, PostModel);
    res.status(200).json(Result);
};