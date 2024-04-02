import axios from "axios";
const BaseURL = "http://localhost:5000/api/v1"



// User Registration API Call
export async function RegistrationRequest(PostBody){
    try {
        let URL = BaseURL+"/UserRegistration";
        let Res = await axios.post(URL,PostBody)


        if(Res.data.status === "Email Exist"){
            return {status:"Email Exist", ExistInfo: Res}
        }else{
            return {status:"Registration Success", UserInfo: Res}
        }

       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}


// User Login API Call
export async function LoginRequest(PostBody){
    try {
        let URL = BaseURL+"/UserLogin";
        let Res = await axios.post(URL,PostBody)


        if(Res.data.status === "Login Success"){
            return {status:"Login Success", UserInfo: Res}
        }else{
            return {status:"Login Faild"}
        }

       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}