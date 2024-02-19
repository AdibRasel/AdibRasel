import React from 'react'

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

const AuthenticCategoryList = () => {

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

            

            <div className="pb-2">
                <NavLink to="/AuthenticCategoryNew">
                    <button className='btn btn-primary'>New Category</button>
                </NavLink>
            </div>

            {/* <hr /> */}


            <div className="row">
                <div className="col-md-3">
                    <img style={{ width: "100%" }} src={Germany} className='img-fluid' alt="" />
                </div>
                <div className="col-md-8">

                    <h2 className='CommonColor fs-4'>This is Javascript pro</h2>

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



                </div>

                <div className="col-md-1">
                    <div className="d-flex justify-content-between">
                        <NavLink to="/AuthenticCategory">
                            <div className="AuthenticAction mx-1">
                                <FaEye />
                            </div>
                        </NavLink>
                        <NavLink to="/AuthenticCategory">
                            <div className="AuthenticAction mx-1">
                                <GrUpdate />
                            </div>
                        </NavLink>
                        <div className="AuthenticActionDelete mx-1" onClick={handleDelete}>
                            <MdDelete />
                        </div>
                    </div>
                </div>

            </div>

            <hr />


            <div className="row">
                <div className="col-md-3">
                    <img style={{ width: "100%" }} src={Germany} className='img-fluid' alt="" />
                </div>
                <div className="col-md-8">

                    <h2 className='CommonColor fs-4'>C++</h2>

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



                </div>

                <div className="col-md-1">
                    <div className="d-flex justify-content-between">
                        <NavLink to="/AuthenticCategory">
                            <div className="AuthenticAction mx-1">
                                <FaEye />
                            </div>
                        </NavLink>
                        <NavLink to="/AuthenticCategory">
                            <div className="AuthenticAction mx-1">
                                <GrUpdate />
                            </div>
                        </NavLink>
                        <div className="AuthenticActionDelete mx-1" onClick={handleDelete}>
                            <MdDelete />
                        </div>
                    </div>
                </div>

            </div>


            <hr />


            <div className="row">
                <div className="col-md-3">
                    <img style={{ width: "100%" }} src={Germany} className='img-fluid' alt="" />
                </div>
                <div className="col-md-8">

                    <h2 className='CommonColor fs-4'>Java</h2>

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



                </div>

                <div className="col-md-1">
                    <div className="d-flex justify-content-between">
                        <NavLink to="/AuthenticCategory">
                            <div className="AuthenticAction mx-1">
                                <FaEye />
                            </div>
                        </NavLink>
                        <NavLink to="/AuthenticCategory">
                            <div className="AuthenticAction mx-1">
                                <GrUpdate />
                            </div>
                        </NavLink>
                        <div className="AuthenticActionDelete mx-1" onClick={handleDelete}>
                            <MdDelete />
                        </div>
                    </div>
                </div>

            </div>


            <hr />


            <div className="row">
                <div className="col-md-3">
                    <img style={{ width: "100%" }} src={Germany} className='img-fluid' alt="" />
                </div>
                <div className="col-md-8">

                    <h2 className='CommonColor fs-4'>Python</h2>

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



                </div>

                <div className="col-md-1">
                    <div className="d-flex justify-content-between">
                        <NavLink to="/AuthenticCategory">
                            <div className="AuthenticAction mx-1">
                                <FaEye />
                            </div>
                        </NavLink>
                        <NavLink to="/AuthenticCategory">
                            <div className="AuthenticAction mx-1">
                                <GrUpdate />
                            </div>
                        </NavLink>
                        <div className="AuthenticActionDelete mx-1" onClick={handleDelete}>
                            <MdDelete />
                        </div>
                    </div>
                </div>

            </div>






        </div>





    </>)
}

export default AuthenticCategoryList