const UserRegistrationService = async (Request, DataModel) => {
    try {
        let PostBody = Request.body;

        let FindEmail = { Email: Request.body.Email }

        let EmailCheck = await DataModel.findOne(FindEmail)


        if (EmailCheck === null) {
            let data = await DataModel.create(PostBody)

            return { status: "success", data: data }

        } else {
            return { status: "Email Exist" }
        }


    }
    catch (error) {
        return { status: "fail", data: error }
    }
}
module.exports = UserRegistrationService