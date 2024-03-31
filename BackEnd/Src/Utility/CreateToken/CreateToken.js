const jwt = require("jsonwebtoken");
const CreateToken = async (Email, Password)=>{
    // This token will have 1 day validity
    let payload = {exp: Math.floor(Date.now()/1000)+ (24*60*60), Email:Email, Password:Password}
    return await jwt.sign(payload, 'SecretKey(GermanyLanguage)RasalHossain')
}
module.exports = CreateToken