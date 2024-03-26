const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    Email:{type:String},
    Category:{type:String},
    CreateDate:{type:Date, default:Date.now()},
},{versionKey: false});
const EmailModel = mongoose.model("Email_List", DataSchema);
module.exports= EmailModel