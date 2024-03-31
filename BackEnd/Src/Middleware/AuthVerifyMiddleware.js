var jwt = require("jsonwebtoken");
module.exports=(Req, Res, Next)=>{
    let Token = Req.headers['token'];
    jwt.verify(Token, "SecretKey(GermanyLanguage)RasalHossain", function (error, decoded){
        if(error){
            console.log(Token)
            Res.status(401).json({status:"Unauthorized", Token:Token})
        }else{

            let Email=decoded['UserEmail'];

            // console.log(Email);
            // console.log(decoded);
            console.log( "This user is currently using the app:- " + Email);

            Req.headers.Email = Email;

            Next();

        }
    })
}