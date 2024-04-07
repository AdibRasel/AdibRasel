const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    UserName:{type:String},
    UserID:{type:mongoose.Schema.Types.ObjectId},
    UserMobile:{type:String},
    UserEmail:{type:String},
    CategoryTitle:{type:String},
    CategoryID:{type:mongoose.Schema.Types.ObjectId},
    PostTitle:{type:String},
    PostDetails:{type:String},
    PostThumbnail:{type:String},
    Status:{type:String},
    CreateDate:{type:Date, default:Date.now()},
},{versionKey: false});
const PostModel = mongoose.model("Post_List", DataSchema);
module.exports= PostModel