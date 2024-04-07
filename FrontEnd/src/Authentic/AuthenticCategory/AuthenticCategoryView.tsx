import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import PostList from './AuthenticPost/AuthenticPostList';

import Germany from "../../Public/Components/Carousel/GermanyLanguage.jpg"
import { CategoryFullDetails } from 'ApiService/CategoryService';
import { useParams } from 'react-router-dom';

import { FaEdit } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";



const AuthenticCategoryView = () => {


    const [Loading, SetLoading] = useState<boolean>(false);

    const { id } = useParams();


    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        SetLoading(true)
        const PostBody = {
            ID: id
        };

        const fetchData = async () => {
            try {
                const response: any = await CategoryFullDetails(PostBody);
                setData(response.CategoryInfo.data.data);

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

    console.log(data)


    return (<>




        <AuthenticLayout>

            <hr />



            <div className="CategoryContent">
                <div className="row">

                    <div className="col-md-9">
                        <NavLink to= {"/AuthenticCreatePost/" + data[0]?.CategoryTitle}>
                            <button className='btn btn-dark my-2' style={{ width: "100%" }}>Create Post</button>
                        </NavLink>

                        <p>{data[0]?.CategoryTitle} // All Post List</p>

                        <hr />

                        <PostList />
                    </div>

                    <div className="col-md-3">
                        <h2 className='CommonBG p-2 text-white rounded'>Category info</h2>

                        {Loading ? (
                            <div className="spinner-border text-black text-center" style={{ textAlign: "center", margin: "auto" }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ) : (

                            <div className="">
                                <h3>{data[0]?.CategoryTitle}</h3>

                                <img src={data[0]?.CategoryThumbnail} className='img-fluid' alt="" />
                                <div className="d-flex justify-content-start">
                                    <div className="text-muted">
                                        <FaEdit /> <span>{data[0]?.UserName} </span>
                                    </div>

                                    <div className="text-muted">
                                        - <MdOutlineDateRange /> <span>{data[0]?.CreateDate} </span>
                                    </div>
                                </div>
                                <div style={{textAlign:"justify"}} dangerouslySetInnerHTML={{ __html: data[0]?.CategoryDetails }}></div>

                            </div>
                        )}

                        
                    </div>

                </div>
            </div>





        </AuthenticLayout>






    </>)
}

export default AuthenticCategoryView