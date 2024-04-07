import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import PostList from './AuthenticPost/AuthenticPostList';

import Germany from "../../Public/Components/Carousel/GermanyLanguage.jpg"
import { CategoryFullDetails, CategoryFullDetailsWithAllPost } from 'ApiService/CategoryService';
import { useParams } from 'react-router-dom';

import { FaEdit } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

import { MouseEventHandler } from 'react';

import { FaEye } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import Swal from 'sweetalert2'
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { PostDeleteService } from 'ApiService/PostService';



const AuthenticCategoryView = () => {


    const [Loading, SetLoading] = useState<boolean>(false);

    const { id } = useParams();


    const [data, setData] = useState<any[]>([]);

    const [CategoryInfo, SetCategoryInfo] = useState<any[]>([]);
    const [PostList, SetPostList] = useState<any[]>([]);

    useEffect(() => {
        SetLoading(true)
        const PostBody = {
            ID: id
        };

        const fetchData = async () => {
            try {
                const response: any = await CategoryFullDetailsWithAllPost(PostBody);
                SetCategoryInfo(response.CategoryAndPostList.data.CategoryDetails);
                SetPostList(response.CategoryAndPostList.data.PostDetails);

                SetLoading(false)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
            SetLoading(false)
            // SetLoading(true)
        };
        fetchData();

    }, []);


  // Delete Button start 
  const handleDelete = (PostID: any): MouseEventHandler<HTMLDivElement> => async (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response: any = await PostDeleteService({ ID: PostID });
          console.log(response);

          if (response.status === "Delete Success") {

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            }).then(() => {
              window.location.reload();
            });

          } else {
            Swal.fire({
              title: "Error!",
              text: "An error occurred while deleting the file.",
              icon: "error"
            });
          }


        } catch (error) {
          console.error('Error deleting data:', error);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while deleting the file.",
            icon: "error"
          });
        }
      }
    });
  };
// Delete Button end


    return (<>




        <AuthenticLayout>

            <hr />



            <div className="CategoryContent">
                <div className="row">

                    <div className="col-md-9">
                        <NavLink to={"/AuthenticCreatePost/" + CategoryInfo[0]?.CategoryTitle + "/" + CategoryInfo[0]?._id}>
                            <button className='btn btn-outline-primary my-2' style={{ width: "100%" }}>Create Post</button>
                        </NavLink>

                        <p>{CategoryInfo[0]?.CategoryTitle} // All Post List</p>

                        <hr />

                        {/* <PostList /> */}




                        <div className="mb-3 container" style={{ width: "100%" }}>




                            {
                                PostList.map((item: any, index: any) => (

                                    <div className="AllPostList" key={index}>


                                        <div className="row">

                                            <div className="col-md-8">

                                                {/* <h2 className='CommonColor fs-4'>This is Javascript pro </h2> */}
                                                <h2 className='CommonColor fs-4'>{item.PostTitle}</h2>

                                                <div className="d-flex justify-content-start">
                                                    <div className="text-muted">
                                                        <FaEdit /> <span>{item.UserName}</span>
                                                    </div>
                                                    <div className="text-muted">

                                                        - <MdOutlineDateRange /> <span>{item.CreateDate}</span>
                                                    </div>
                                                </div>

                                                <div className="text-muted">
                                                    <span>
                                                        <div dangerouslySetInnerHTML={{ __html: item.PostDetails.substring(0, 500) }}></div>
                                                    </span>
                                                </div>


                                                <div className="justify-content-between mt-3">

                                                    <NavLink to={"/AuthenticViewPost/" + item._id}>
                                                        <div style={{ width: "30px", height: "30px", display: "inline" }} className="AuthenticAction mx-1">
                                                            <FaEye />
                                                        </div>
                                                    </NavLink>
                                                    <NavLink to={"/AuthenticUpdatePost/" + item._id + "/" + CategoryInfo[0]?.CategoryTitle}>
                                                        <div style={{ width: "30px", height: "30px", display: "inline" }} className="AuthenticAction mx-1">
                                                            <GrUpdate />
                                                        </div>
                                                    </NavLink>
                                                    <div style={{ width: "30px", height: "30px", display: "inline" }} className="AuthenticActionDelete mx-1" onClick={handleDelete(item._id)}>
                                                        <MdDelete />
                                                    </div>

                                                </div>



                                            </div>


                                            <div className="col-md-4">
                                                <img style={{ width: "100%" }} src={item.PostThumbnail} className='img-fluid' alt="" />
                                            </div>


                                        </div>

                                        <hr />

                                    </div>



                                ))
                            }



                        </div>














                    </div>

                    <div className="col-md-3">
                        <h2 className='CommonBG p-2 text-white rounded'>Category info</h2>

                        {Loading ? (
                            <div className="spinner-border text-black text-center" style={{ textAlign: "center", margin: "auto" }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ) : (

                            <div className="">
                                <h3>{CategoryInfo[0]?.CategoryTitle}</h3>

                                <NavLink to={"/AuthenticCreatePost/" + CategoryInfo[0]?.CategoryTitle + "/" + CategoryInfo[0]?._id}>
                                    <button className='btn btn-primary my-2' style={{ width: "100%" }}>Create Post</button>
                                </NavLink>

                                <img src={CategoryInfo[0]?.CategoryThumbnail} className='img-fluid' alt="" />
                                <div className="d-flex justify-content-start">
                                    <div className="text-muted">
                                        <FaEdit /> <span>{CategoryInfo[0]?.UserName} </span>
                                    </div>

                                    <div className="text-muted">
                                        - <MdOutlineDateRange /> <span>{CategoryInfo[0]?.CreateDate} </span>
                                    </div>
                                </div>
                                <div style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: CategoryInfo[0]?.CategoryDetails }}></div>

                            </div>
                        )}


                    </div>

                </div>
            </div>





        </AuthenticLayout>






    </>)
}

export default AuthenticCategoryView