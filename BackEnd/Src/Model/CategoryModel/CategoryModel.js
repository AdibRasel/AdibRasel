const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    UserName:{type:String},
    UserID:{type:mongoose.Schema.Types.ObjectId},
    UserMobile:{type:String},
    UserEmail:{type:String},
    CategoryTitle:{type:String},
    CategoryDetails:{type:String},
    CategoryThumbnail:{type:String},
    Status:{type:String},
    CreateDate:{type:Date, default:Date.now()},
},{versionKey: false});
const CategoryModel = mongoose.model("Category_List", DataSchema);
module.exports= CategoryModel