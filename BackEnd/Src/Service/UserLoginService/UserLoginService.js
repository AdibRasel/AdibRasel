const CreateToken = require("../../Utility/CreateToken/CreateToken");

const UserLoginService = async (Request, DataModel) => {
    try {
        let PostBody = Request.body;

        let FindEmail = { Email: Request.body.Email }
        let FindPassword = { Password: Request.body.Password }

        let User = await DataModel.findOne(FindEmail)

        const UserEmail = User.Email
        const UserPassword = User.Password


        if (FindEmail.Email == UserEmail && FindPassword.Password == UserPassword) {



            let Token = await CreateToken(UserEmail, UserPassword)

            return { status: "Success", User:User, Token:Token }

        } else {
            return { status: "Login Faild" }
        }
        
    }
    catch (error) {
        return { status: "fail", data: error }
    }
}
module.exports = UserLoginService