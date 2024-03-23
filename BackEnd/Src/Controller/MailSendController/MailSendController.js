// const CreateService = require("../../Service/Common/CreateService");
// const DashBoardModel = require("../../Model/DashBoardModel/DashBoardModel");
const { MailSend } = require("../../Utility/MailSend/MailSend");
// const AllDetailsService = require("../../Service/Common/AllDetailsService");


// DashBoard Create
exports.MailSendController = async (req, res) => {
    let Result = await MailSend(req, res);
    res.status(200).json(Result);
};


// DashBoard All Details
// exports.DashBoardDetails = async (req, res)=>{
//     let Result = await AllDetailsService(req, DashBoardModel)
//     res.status(200).json(Result)
// }