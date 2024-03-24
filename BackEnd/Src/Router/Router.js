const express =require('express');
const { MailSendController } = require('../Controller/MailSendController/MailSendController');
const { EmailValidator } = require('../Controller/EmailValidator/EmailValidator');


const Router =express.Router();


// Super Admin Register
Router.post("/MailSend", MailSendController);
Router.post("/EmailValidator", EmailValidator);




















module.exports=Router