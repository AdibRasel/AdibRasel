import axios from "axios";
const BaseURL = "http://localhost:5000/api/v1"



// User Registration API Call
export async function CategoryCreateService(PostBody){
    try {
        let URL = BaseURL+"/CreateCategory";

        const UserToken = localStorage.getItem("Token");

        const AxiosHeader = { headers: { token: UserToken } };

        let Res = await axios.post(URL,PostBody, AxiosHeader)


        if(Res.data.data.status === "success"){
            return {status:"Category Create Faild"}
        }else{
            return {status:"Category Create Success", CategoryInfo: Res}
        }

       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}


// Category Details Service API Call
export async function CategoryDetailsService(PostBody){
    try {
        let URL = BaseURL+"/UserAllCategoryDetails";

        const UserToken = localStorage.getItem("Token");

        const AxiosHeader = { headers: { token: UserToken } };

        let Res = await axios.post(URL, PostBody, AxiosHeader)


        if(Res.data.data.status === "Success"){
            return {status:"Category Details Faild"}
        }else{
            return {status:"Category Details List Success", CategoryInfo: Res}
        }

       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}