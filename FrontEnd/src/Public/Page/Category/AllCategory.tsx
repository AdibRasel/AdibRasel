import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import Button from 'react-bootstrap/Button';

import Germany from "../../Components/Carousel/GermanyLanguage.jpg"
import { FaBookReader } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const AllCategory = () => {

    return (<>


        {/* ========= Breadcrumb start ========== */}
        <div className=''>
            <NavLink to="/">
                <span className='text-muted'>Home</span>
            </NavLink>

            {" > "}

            <span>Germany Language</span>

        </div>
        {/* ========= Breadcrumb end ========== */}

        {/* Title start */}
        <h2 className='fs-3 CommonColor'>Germany Language</h2>
        {/* Title end */}




        <div className="mb-3" style={{ width: "100%" }}>
            <div className="row">
                <div className="col-md-4">
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

                    <NavLink className="TopBarNavLink" to="/Post">
                        <Button size="sm" className='btn btn-dark mt-1'>See More<FaBookReader /></Button>
                    </NavLink>

                </div>
            </div>
        </div>

        <div className="mb-3" style={{ width: "100%" }}>
            <div className="row">
                <div className="col-md-4">
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

                    <NavLink className="TopBarNavLink" to="/Post">
                        <Button size="sm" className='btn btn-dark mt-1'>See More<FaBookReader /></Button>
                    </NavLink>

                </div>
            </div>
        </div>


        <div className="mb-3" style={{ width: "100%" }}>
            <div className="row">
                <div className="col-md-4">
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

                    <NavLink className="TopBarNavLink" to="/Post">
                        <Button size="sm" className='btn btn-dark mt-1'>See More<FaBookReader /></Button>
                    </NavLink>

                </div>
            </div>
        </div>






    </>)
}

export default AllCategory