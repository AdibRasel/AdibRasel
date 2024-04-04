

const UserDetailsService = async (Request, DataModel) => {
    try {

        let FindEmail = { Email: Request.body.Email }

        let User = await DataModel.findOne(FindEmail, {FullName:1, Email:1, Mobile:1, Image:1, Status:1, UserRole:1, CreateDate:1})

        const UserEmail = User.Email


        if (FindEmail.Email == UserEmail) {

            return { status: "Success", User:User}

        } else {
            return { status: "User Details Faild" }
        }
        
    }
    catch (error) {
        return { status: "fail", data: error }
    }
}
module.exports = UserDetailsService