"use strict";

import AuthenticNav from 'Authentic/Components/AuthenticNav/AuthenticNav'
import TopBar from 'Common/Header/TopBar'
import React, { useEffect, useState } from 'react'
import Footer from 'Common/Footer/Footer'
import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout'






import { FaEdit } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import Button from 'react-bootstrap/Button';

import Germany from "../../Public/Components/Carousel/GermanyLanguage.jpg"
import { NavLink } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import Swal from 'sweetalert2'
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

import Card from 'react-bootstrap/Card';
import { CategoryDeleteService, CategoryDetailsService } from 'ApiService/CategoryService'
import { MouseEventHandler } from 'react';

const AuthenticCategory = () => {
  const [Loading, SetLoading] = useState<boolean>(false);





 






  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    SetLoading(true)
    const UserEmail = localStorage.getItem("Email");
    const PostBody = {
      Email: UserEmail
    };

    const fetchData = async () => {
      try {
        const response: any = await CategoryDetailsService(PostBody);
        setData(response.CategoryInfo.data.data);

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
  const handleDelete = (CategoryID: string): MouseEventHandler<HTMLDivElement> => async (event) => {
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
          const response: any = await CategoryDeleteService({ ID: CategoryID });
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





      <div className="mb-3 container" style={{ width: "100%" }}>


        <div className="row">
          <div className="col-md-6">
            <h2>All Category List</h2>
            {Loading === true && (
              <div className="spinner-border text-black text-center" style={{ textAlign: "center", margin: "auto" }} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
          </div>


          <div className="col-md-6" style={{ textAlign: "right" }}>
            {/* <div className="text-right"> */}
            <NavLink to="/AuthenticCategoryNew">
              <button className='btn btn-primary'>New Category</button>
            </NavLink>
            {/* </div> */}
          </div>
        </div>



        {data.map((item: any, index: any) => (
          <div className="s" key={index}>
            <div className="row">
              <div className="col-md-4">
                <NavLink to={"/AuthenticCategoryView/" + item._id}>
                  <img style={{ width: "100%" }} src={item.CategoryThumbnail} className='img-fluid' alt="" />
                </NavLink>
              </div>


              <div className="col-md-8">
                <NavLink to={"/AuthenticCategoryView/" + item._id}>
                  <h2 className='CommonColor fs-4'>{item.CategoryTitle}</h2>

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
                      <div dangerouslySetInnerHTML={{ __html: item.CategoryDetails.substring(0, 500) }}></div>
                    </span>
                  </div>
                </NavLink>




                <div className="mt-3">
                  <NavLink to={"/AuthenticCategoryView/" + item._id}>
                    <div style={{ marginTop: "200px", width: "30px", height: "30px", display: "inline", marginRight: "5px" }} className="AuthenticAction">
                      <FaEye />
                    </div>
                  </NavLink>
                  <NavLink to={"/AuthenticCategoryUpdate/" + item._id}>
                    <div style={{ marginTop: "200px", width: "30px", height: "30px", display: "inline", marginRight: "5px" }} className="AuthenticAction">
                      <GrUpdate />
                    </div>
                  </NavLink>
                  <div style={{ marginTop: "200px", width: "30px", height: "30px", display: "inline", marginRight: "5px" }} className="AuthenticActionDelete" onClick={handleDelete(item._id)}>
                    <MdDelete />
                  </div>
                </div>

              </div>

            </div>
            <hr />
          </div>
        ))}

      </div>













    </AuthenticLayout>






  </>)
}

export default AuthenticCategory