const jwt = require("jsonwebtoken");

module.exports = async (Req, Res, UserRegistrationModel) => {
    try {
        const Token = Req.headers['token'];

        if (!Token) {
            return Res.status(401).json({ status: "Unauthorized", message: "Token not provided" });
        }

        const decoded = await jwt.verify(Token, "SecretKey(GermanyLanguage)RasalHossain");

        const { Email, Password } = decoded;

        const User = await UserRegistrationModel.findOne({ Email });

        if (!User) {
            return Res.status(404).json({ status: "Not found", message: "User not found" });
        }

        const UserEmail = User.Email
        const UserPassword = User.Password

        if(Email === UserEmail && Password === UserPassword){
            const UserInfo = {
                FullName : User.FullName,
                Mobile: User.Mobile,
                Email: User.Email,
                Image: User.Image,
                Status: User.Status,
                UserRole: User.UserRole,
                CreateDate: User.CreateDate
            }
            return Res.status(200).json({ status: "LoginSuccess", Token:Token, UserInfo:UserInfo });
        
        }else{
            return Res.status(400).json({ status: "LoginFaild"});

        }

      
    } catch (error) {
        return Res.status(500).json({ status: "Internal Server Error", message: error.message });
    }
};
