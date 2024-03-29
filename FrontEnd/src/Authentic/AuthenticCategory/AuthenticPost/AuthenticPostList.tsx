import React from 'react'

import { FaEdit } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import Button from 'react-bootstrap/Button';

import Germany from "../../../Public/Components/Carousel/GermanyLanguage.jpg"
import { NavLink } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import Swal from 'sweetalert2'
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

import Card from 'react-bootstrap/Card';

const AuthenticPostList = () => {

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





        <div className="mb-3 container" style={{ width: "100%" }}>




            <div className="row">





                <div className="col-md-8">

                    <h2 className='CommonColor fs-4'>This is Javascript pro </h2>

                    {/* <hr /> */}

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


                    <div className="justify-content-between mt-3">

                        <NavLink to="/AuthenticViewPost">
                            <div style={{ width: "30px", height: "30px", display: "inline" }} className="AuthenticAction mx-1">
                                <FaEye />
                            </div>
                        </NavLink>
                        <NavLink to="/AuthenticUpdatePost">
                            <div style={{ width: "30px", height: "30px", display: "inline" }} className="AuthenticAction mx-1">
                                <GrUpdate />
                            </div>
                        </NavLink>
                        <div style={{ width: "30px", height: "30px", display: "inline" }} className="AuthenticActionDelete mx-1" onClick={handleDelete}>
                            <MdDelete />
                        </div>

                    </div>



                </div>





                <div className="col-md-4">
                    <img style={{ width: "100%" }} src={Germany} className='img-fluid' alt="" />
                </div>


            </div>

            <hr />


            <div className="row">





                <div className="col-md-8">

                    <h2 className='CommonColor fs-4'>This is Javascript pro </h2>

                    {/* <hr /> */}

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


                    <div className="justify-content-between mt-3">

                        <NavLink to="/AuthenticViewPost">
                            <div style={{ width: "30px", height: "30px", display: "inline" }} className="AuthenticAction mx-1">
                                <FaEye />
                            </div>
                        </NavLink>
                        <NavLink to="/AuthenticUpdatePost">
                            <div style={{ width: "30px", height: "30px", display: "inline" }} className="AuthenticAction mx-1">
                                <GrUpdate />
                            </div>
                        </NavLink>
                        <div style={{ width: "30px", height: "30px", display: "inline" }} className="AuthenticActionDelete mx-1" onClick={handleDelete}>
                            <MdDelete />
                        </div>

                    </div>



                </div>





                <div className="col-md-4">
                    <img style={{ width: "100%" }} src={Germany} className='img-fluid' alt="" />
                </div>


            </div>

            <hr />


            <div className="row">





                <div className="col-md-8">

                    <h2 className='CommonColor fs-4'>This is Javascript pro </h2>

                    {/* <hr /> */}

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


                    <div className="justify-content-between mt-3">

                        <NavLink to="/AuthenticViewPost">
                            <div style={{ width: "30px", height: "30px", display: "inline" }} className="AuthenticAction mx-1">
                                <FaEye />
                            </div>
                        </NavLink>
                        <NavLink to="/AuthenticUpdatePost">
                            <div style={{ width: "30px", height: "30px", display: "inline" }} className="AuthenticAction mx-1">
                                <GrUpdate />
                            </div>
                        </NavLink>
                        <div style={{ width: "30px", height: "30px", display: "inline" }} className="AuthenticActionDelete mx-1" onClick={handleDelete}>
                            <MdDelete />
                        </div>

                    </div>



                </div>





                <div className="col-md-4">
                    <img style={{ width: "100%" }} src={Germany} className='img-fluid' alt="" />
                </div>


            </div>

            <hr />









        </div>





    </>)
}

export default AuthenticPostList