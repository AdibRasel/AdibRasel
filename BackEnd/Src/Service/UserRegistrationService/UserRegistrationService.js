const CreateToken = require("../../Utility/CreateToken/CreateToken");

const UserRegistrationService = async (Request, DataModel) => {
    try {
        let PostBody = Request.body;

        let FindEmail = { Email: Request.body.Email }

        let EmailCheck = await DataModel.findOne(FindEmail)


        if (EmailCheck === null) {
            let data = await DataModel.create(PostBody)

            const UserEmail = data.Email;
            const UserPassword = data.Password;

            let Token = await CreateToken(UserEmail, UserPassword)

            return { status: "success", data: data, Token:Token }

        } else {
            return { status: "Email Exist" , data : EmailCheck }
        }


    }
    catch (error) {
        return { status: "fail", data: error }
    }
}
module.exports = UserRegistrationService