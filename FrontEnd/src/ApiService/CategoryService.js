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


// Category Full Details Service API Call
export async function CategoryFullDetails(PostBody){
    try {
        let URL = BaseURL+"/CategoryFullDetails";

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


// Category Full Details With AllPost// একটি ক্যটেগরির সকল তথ্য শো করবে এবং সেই ক্যটেগরির সকল পোস্ট শো করবে।
export async function CategoryFullDetailsWithAllPost(PostBody){
    try {
        let URL = BaseURL+"/CategoryFullDetailsWithAllPost";

        const UserToken = localStorage.getItem("Token");

        const AxiosHeader = { headers: { token: UserToken } };

        let Res = await axios.post(URL, PostBody, AxiosHeader)

        // return {Res:Res}

        if(Res.data.status === "Success"){
            return {status:"Category And PostList Success", CategoryAndPostList: Res}
        }else{
            return {status:"Category Details Faild"}
        }
       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}


// Category Delete Service API Call
export async function CategoryDeleteService(PostBody){
    try {
        let URL = BaseURL+"/CategoryDelete";

        const UserToken = localStorage.getItem("Token");

        const AxiosHeader = { headers: { token: UserToken } };

        let Res = await axios.post(URL, PostBody, AxiosHeader)


        if(Res.data.data.status === "Delete Success"){
            return {status:"Delete Faild"}
        }else{
            return {status:"Delete Success", CategoryInfo: Res}
        }
       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}



// Category Update Service API Call
export async function CategoryUpdateService(PostBody, CategoryID){
    try {
        let URL = BaseURL+"/CategoryUpdate/" + CategoryID;

        const UserToken = localStorage.getItem("Token");

        const AxiosHeader = { headers: { token: UserToken } };

        let Res = await axios.post(URL, PostBody, AxiosHeader)


        if(Res.data.data.status === "Update Success"){
            return {status:"Update Faild"}
        }else{
            return {status:"Update Success", CategoryInfo: Res}
        }
       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
    
}