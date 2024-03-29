import AuthenticNav from 'Authentic/Components/AuthenticNav/AuthenticNav'
import TopBar from 'Common/Header/TopBar'
import React from 'react'
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


const AuthenticCategory = () => {

  async function handleDelete() {
    Swal.fire({
      title: "Are you sure!",
      text: "Are you sure you want to Pending it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }


  return (<>

    <AuthenticLayout>


      <hr />





      <div className="mb-3 container" style={{ width: "100%" }}>



        <div className="pb-2">
          <NavLink to="/AuthenticCategoryNew">
            <button className='btn btn-primary'>New Category</button>
          </NavLink>
        </div>

        {/* <hr /> */}


        <div className="row">
          <div className="col-md-4">
            <NavLink to="/AuthenticCategoryView">
              <img style={{ width: "100%" }} src={Germany} className='img-fluid' alt="" />
            </NavLink>
          </div>


          <div className="col-md-8">
            <NavLink to="/AuthenticCategoryView">
              <h2 className='CommonColor fs-4'>This is Javascript pro</h2>

              <div className="d-flex justify-content-start">
                <div className="text-muted">
                  <FaEdit /> <span>Rasel Hossain Adib</span>
                </div>
                <div className="text-muted">

                  - <MdOutlineDateRange /> <span>04/02/2024</span>
                </div>
              </div>

              <div className="text-muted">
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias inventore esse exercitationem nostrum voluptates vitae, similique neque itaque optio reprehenderit.

                  ...</span>
              </div>
            </NavLink>




            <div className="mt-3">
              <NavLink to="/AuthenticCategoryView">
                <div style={{ marginTop: "200px", width: "30px", height: "30px", display: "inline", marginRight: "5px" }} className="AuthenticAction">
                  <FaEye />
                </div>
              </NavLink>
              <NavLink to="/AuthenticCategoryUpdate">
                <div style={{ marginTop: "200px", width: "30px", height: "30px", display: "inline", marginRight: "5px" }} className="AuthenticAction">
                  <GrUpdate />
                </div>
              </NavLink>
              <div style={{ marginTop: "200px", width: "30px", height: "30px", display: "inline", marginRight: "5px" }} className="AuthenticActionDelete" onClick={handleDelete}>
                <MdDelete />
              </div>
            </div>

          </div>

        </div>

        <hr />


        <div className="row">
          <div className="col-md-4">
            <NavLink to="/AuthenticCategoryView">
              <img style={{ width: "100%" }} src={Germany} className='img-fluid' alt="" />
            </NavLink>
          </div>


          <div className="col-md-8">
            <NavLink to="/AuthenticCategoryView">
              <h2 className='CommonColor fs-4'>This is Javascript pro</h2>

              <div className="d-flex justify-content-start">
                <div className="text-muted">
                  <FaEdit /> <span>Rasel Hossain Adib</span>
                </div>
                <div className="text-muted">

                  - <MdOutlineDateRange /> <span>04/02/2024</span>
                </div>
              </div>

              <div className="text-muted">
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias inventore esse exercitationem nostrum voluptates vitae, similique neque itaque optio reprehenderit.

                  ...</span>
              </div>
            </NavLink>




            <div className="mt-3">
              <NavLink to="/AuthenticCategoryView">
                <div style={{ marginTop: "200px", width: "30px", height: "30px", display: "inline", marginRight: "5px" }} className="AuthenticAction">
                  <FaEye />
                </div>
              </NavLink>
              <NavLink to="/AuthenticCategoryUpdate">
                <div style={{ marginTop: "200px", width: "30px", height: "30px", display: "inline", marginRight: "5px" }} className="AuthenticAction">
                  <GrUpdate />
                </div>
              </NavLink>
              <div style={{ marginTop: "200px", width: "30px", height: "30px", display: "inline", marginRight: "5px" }} className="AuthenticActionDelete" onClick={handleDelete}>
                <MdDelete />
              </div>
            </div>

          </div>

        </div>


        <hr />


        <div className="row">
          <div className="col-md-4">
            <NavLink to="/AuthenticCategoryView">
              <img style={{ width: "100%" }} src={Germany} className='img-fluid' alt="" />
            </NavLink>
          </div>


          <div className="col-md-8">
            <NavLink to="/AuthenticCategoryView">
              <h2 className='CommonColor fs-4'>This is Javascript pro</h2>

              <div className="d-flex justify-content-start">
                <div className="text-muted">
                  <FaEdit /> <span>Rasel Hossain Adib</span>
                </div>
                <div className="text-muted">

                  - <MdOutlineDateRange /> <span>04/02/2024</span>
                </div>
              </div>

              <div className="text-muted">
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias inventore esse exercitationem nostrum voluptates vitae, similique neque itaque optio reprehenderit.

                  ...</span>
              </div>
            </NavLink>




            <div className="mt-3">
              <NavLink to="/AuthenticCategoryView">
                <div style={{ marginTop: "200px", width: "30px", height: "30px", display: "inline", marginRight: "5px" }} className="AuthenticAction">
                  <FaEye />
                </div>
              </NavLink>
              <NavLink to="/AuthenticCategoryUpdate">
                <div style={{ marginTop: "200px", width: "30px", height: "30px", display: "inline", marginRight: "5px" }} className="AuthenticAction">
                  <GrUpdate />
                </div>
              </NavLink>
              <div style={{ marginTop: "200px", width: "30px", height: "30px", display: "inline", marginRight: "5px" }} className="AuthenticActionDelete" onClick={handleDelete}>
                <MdDelete />
              </div>
            </div>

          </div>

        </div>




      </div>













    </AuthenticLayout>






  </>)
}

export default AuthenticCategory