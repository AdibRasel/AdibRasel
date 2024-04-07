const PostModel = require("../../Model/PostModel/PostModel");
const IDWithDeleteService = require("../../Service/Common/IDWithDeleteService");
const IDWithDetailsService = require("../../Service/Common/IDWithDetailsService");
const IDWithUpdateService = require("../../Service/Common/IDWithUpdateService");
const UserAllPostDetailsService = require("../../Service/Common/UserAllPostDetailsService");
const CreateService = require("../../Service/CreateService/CreateService");





// Create Post Service // পোস্ট তৈরি করবে
exports.CreatePost= async (req, res) => {
    let Result = await CreateService(req, PostModel);
    res.status(200).json(Result);
};

// Find User All Post Details // একজন ইউজারের সকল পোস্ট শো করবে
exports.UserAllPostDetails= async (req, res) => {
    let Result = await UserAllPostDetailsService(req, PostModel);
    res.status(200).json(Result);
};

// Post Full Details // একটি পোস্টের সকল তথ্য শো করবে। 
exports.PostFullDetails= async (req, res) => {
    let Result = await IDWithDetailsService(req, PostModel);
    res.status(200).json(Result);
};


//Post Delete  
exports.PostDelete= async (req, res) => {
    let Result = await IDWithDeleteService(req, PostModel);
    res.status(200).json(Result);
};

//Post Update  
exports.PostUpdate= async (req, res) => {
    let Result = await IDWithUpdateService(req, PostModel);
    res.status(200).json(Result);
};