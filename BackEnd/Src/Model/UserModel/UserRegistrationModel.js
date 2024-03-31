const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    FullName:{type:String},
    Mobile:{type:String},
    Email:{type:String, unique: true },
    Password:{type:String},
    Image:{type:String},
    Status:{type:String},
    UserRole:{type:String},
    CreateDate:{type:Date, default:Date.now()},
},{versionKey: false});
const UserRegistrationModel = mongoose.model("User", DataSchema);
module.exports= UserRegistrationModel