import axios from "axios";
const BaseURL = "http://localhost:5000/api/v1"



// User Allinfo API Call
export async function Allinfo(){
    try {


        let URL = BaseURL+"/Allinfo";



        let Res = await axios.get(URL)

        return {status:"Allinfo Show Success", Allinfo: Res}

        if(Res.data.data.status === "success"){
            return {status:"Allinfo Show Faild"}
        }else{
            return {status:"Allinfo Show Success", Allinfo: Res}
        }

       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}