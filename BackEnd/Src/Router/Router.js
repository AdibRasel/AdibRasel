const express =require('express');
const { MailSendController } = require('../Controller/MailSendController/MailSendController');


const Router =express.Router();


// Super Admin Register
Router.post("/MailSend", MailSendController);




















module.exports=Router