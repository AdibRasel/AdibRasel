const expressAsyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");


const MailSend = expressAsyncHandler(async (req, res) => {
  const {CurrentEmail, CurrentPassword, to, subject, html } = req.body;
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: CurrentEmail, // sender user email  // user: "adibrasel.2022@gmail.com", // sender user email
      pass: CurrentPassword, // sender password  // pass: "ezbj bzbw ycos gfil", // sender password
    },
  });
  var mailOptions = {
    to: to,
    subject: subject,
    html: html
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("error");
      res.status(500).json({ message: "Email could not be sent", error: error });
    } else {
      console.log("Email sent successfully!");
      res.status(200).json({ message: "Email sent successfully!", info: info });
    }
  });
  // res.status(500).json({ message: "Email could not be sent"});
});

module.exports = { MailSend };