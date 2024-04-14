import axios from "axios";
const BaseURL = "http://localhost:5000/api/v1"



// User Registration API Call
export async function PostCreateService(PostBody){
    try {
        let URL = BaseURL+"/CreatePost";

        const UserToken = localStorage.getItem("Token");

        const AxiosHeader = { headers: { token: UserToken } };

        let Res = await axios.post(URL,PostBody, AxiosHeader)


        if(Res.data.data.status === "success"){
            return {status:"Post Create Faild"}
        }else{
            return {status:"Post Create Success", PostInfo: Res}
        }

       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}


// Post Details Service API Call
export async function PostDetailsService(PostBody){
    try {
        let URL = BaseURL+"/UserAllPostDetails";

        const UserToken = localStorage.getItem("Token");

        const AxiosHeader = { headers: { token: UserToken } };

        let Res = await axios.post(URL, PostBody, AxiosHeader)


        if(Res.data.data.status === "Success"){
            return {status:"Post Details Faild"}
        }else{
            return {status:"Post Details List Success", PostInfo: Res}
        }
       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}


// Post Full Details Service API Call
export async function PostFullDetails(PostBody){
    try {
        let URL = BaseURL+"/PostFullDetails";

        const UserToken = localStorage.getItem("Token");

        const AxiosHeader = { headers: { token: UserToken } };

        let Res = await axios.post(URL, PostBody, AxiosHeader)

        // return {res:Res}
        
        if(Res.data.data.status === "Success"){
            return {status:"Post Details Faild"}
        }else{
            return {status:"Post Details List Success", PostInfo: Res}
        }
       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}


// Post Delete Service API Call
export async function PostDeleteService(PostBody){
    try {
        let URL = BaseURL+"/PostDelete";

        const UserToken = localStorage.getItem("Token");

        const AxiosHeader = { headers: { token: UserToken } };

        let Res = await axios.post(URL, PostBody, AxiosHeader)


        if(Res.data.data.status === "Delete Success"){
            return {status:"Delete Faild"}
        }else{
            return {status:"Delete Success", PostInfo: Res}
        }
       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}



// Post Update Service API Call
export async function PostUpdateService(PostBody, PostID){
    try {
        let URL = BaseURL+"/PostUpdate/" + PostID;

        const UserToken = localStorage.getItem("Token");

        const AxiosHeader = { headers: { token: UserToken } };

        let Res = await axios.post(URL, PostBody, AxiosHeader)


        if(Res.data.data.status === "Update Success"){
            return {status:"Update Faild"}
        }else{
            return {status:"Update Success", PostInfo: Res}
        }
       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
    
}