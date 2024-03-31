import axios from "axios";
const BaseURL = "http://localhost:5000/api/v1"




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