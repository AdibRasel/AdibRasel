const express =require('express');
const { MailSendController } = require('../Controller/MailSendController/MailSendController');
const { EmailValidator } = require('../Controller/EmailValidator/EmailValidator');
const  EmailController  = require('../Controller/EmailController/EmailController');
const UserController = require("../Controller/UserController/UserController");
const { LoginVerifyController } = require('../Controller/LoginVerifyController/LoginVerifyController');

const Router =express.Router();


// Super Admin Register
Router.post("/MailSend", MailSendController);
Router.post("/EmailValidator", EmailValidator);


Router.post("/CreateEmail", EmailController.CreateEmailController);




// =============== User =================
// User Registration API
Router.post("/UserRegistration", UserController.UserRegistration);


Router.post("/LoginVerify", LoginVerifyController);


Router.post("/UserLogin", UserController.UserLogin);




















module.exports=Router