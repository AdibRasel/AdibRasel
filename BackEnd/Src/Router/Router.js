const express =require('express');
const { MailSendController } = require('../Controller/MailSendController/MailSendController');
const { EmailValidator } = require('../Controller/EmailValidator/EmailValidator');
const  EmailController  = require('../Controller/EmailController/EmailController');
const UserController = require("../Controller/UserController/UserController");
const { LoginVerifyController } = require('../Controller/LoginVerifyController/LoginVerifyController');

const AuthVerifyMiddleware = require('../Middleware/AuthVerifyMiddleware');

const CategoryController = require ("../Controller/CategoryController/CategoryController")

const Router =express.Router();


// Email Send ইমেইল সেন্ড
Router.post("/MailSend", MailSendController);
Router.post("/EmailValidator", EmailValidator);

// Email Send whith create email info / ইমেইল পাঠানোর পর সেই ইমেল টি সেভ হবে।
Router.post("/CreateEmail", EmailController.CreateEmailController);




// =============== User =================
// User Registration API // ইউজার রেজিষ্ট্রিশন
Router.post("/UserRegistration", UserController.UserRegistration);

// Per Relode Login Chack, Login success then see frontend dashboard desing, login faild see frond end public design // লগিন সফল হলে ইউজার ডেসবোর্ড দেখাবে, লগিন ফেইল্ড হলে পাভলিক ডেসবোর্ড দেখাবে। 
Router.post("/LoginVerify", LoginVerifyController);

// User Login API // ইউজার লগিন
Router.post("/UserLogin", UserController.UserLogin);


// User Details API // ইউজারের সকল তথ্য
Router.post("/UserDetails", AuthVerifyMiddleware, UserController.UserDetails);



// Create Category API // ক্যাটেগরি তৈরি
Router.post("/CreateCategory", AuthVerifyMiddleware, CategoryController.CreateCategory);
// Category Details API // একজন ইউজারের সকল ক্যটেগরি
Router.post("/UserAllCategoryDetails", AuthVerifyMiddleware, CategoryController.UserAllCategoryDetails);
// Category Full Details API // একটি ক্যটেগরির সকল তথ্য
Router.post("/CategoryFullDetails", AuthVerifyMiddleware, CategoryController.CategoryFullDetails);
// Category Delete
Router.post("/CategoryDelete", AuthVerifyMiddleware, CategoryController.CategoryDelete);
















module.exports=Router