import { PostFullDetails } from 'ApiService/PostService';
import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom';



const AuthenticViewPost = () => {

    const [Loading, SetLoading] = useState<boolean>(false);
    const [PostInfo, SetPostInfo] = useState<any[]>([]);

    const { PostID } = useParams();


    useEffect(() => {
        SetLoading(true)
        const PostBody = {
            ID: PostID
        };

        const fetchData = async () => {
            try {
                const response: any = await PostFullDetails(PostBody);
                SetPostInfo(response.PostInfo.data.data);

                console.log(response)

                SetLoading(false)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
            SetLoading(false)
            // SetLoading(true)
        };
        fetchData();

    }, []);

    console.log(PostInfo)


    return (<>
        <AuthenticLayout>

            <hr />

            {/* ========= Breadcrumb start ========== */}
            <div className='pb-2'>
                <NavLink to="/">
                    <span className='text-muted'>Home</span>
                </NavLink>

                {" > "}
                {Loading === true && (
                    <div className="spinner-border text-black text-center" style={{ textAlign: "center", margin: "auto" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}

                <NavLink to={"/AuthenticCategoryView/" + PostInfo[0]?.CategoryID}>
                    <span className='text-muted' >{PostInfo[0]?.CategoryTitle}</span>
                </NavLink>

                {" > "}

                {Loading === true && (
                    <div className="spinner-border text-black text-center" style={{ textAlign: "center", margin: "auto" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}

                <span>{PostInfo[0]?.PostTitle}</span>

            </div>
            {/* ========= Breadcrumb end ========== */}




            {Loading ? (
                <div className="spinner-border text-black text-center" style={{ textAlign: "center", margin: "auto" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (

                <div className="">
                    
                    <h2>{PostInfo[0]?.PostTitle}
                        <img src={PostInfo[0]?.PostThumbnail} style={{ width: "60px", borderRadius: "3px" }} alt="" />
                    </h2>
                    <hr />
                    <p dangerouslySetInnerHTML={{ __html: PostInfo[0]?.PostDetails }}></p>

                </div>
            )}





        </AuthenticLayout>


    </>)
}

export default AuthenticViewPost