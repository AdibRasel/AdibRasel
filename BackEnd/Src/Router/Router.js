const express =require('express');
const { MailSendController } = require('../Controller/MailSendController/MailSendController');
const { EmailValidator } = require('../Controller/EmailValidator/EmailValidator');
const  EmailController  = require('../Controller/EmailController/EmailController');
const UserController = require("../Controller/UserController/UserController");
const { LoginVerifyController } = require('../Controller/LoginVerifyController/LoginVerifyController');

const AuthVerifyMiddleware = require('../Middleware/AuthVerifyMiddleware');

const Router =express.Router();


// Super Admin Register
Router.post("/MailSend", MailSendController);
Router.post("/EmailValidator", EmailValidator);


Router.post("/CreateEmail", EmailController.CreateEmailController);




// =============== User =================
// User Registration API
Router.post("/UserRegistration", UserController.UserRegistration);

// Per Relode Login Chack, Login see frond end dashboard desing, login faild see frond end public design 
Router.post("/LoginVerify", LoginVerifyController);

// User Login API
Router.post("/UserLogin", UserController.UserLogin);


// User Details API
Router.post("/UserDetails", AuthVerifyMiddleware, UserController.UserDetails);




















module.exports=Router