import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BiCategory } from "react-icons/bi";
import { BsFillPostcardFill } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa6";
import { BsFillStopCircleFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';


const Card = () => {
    return (<>


        <div className="container mt-4">

            <div className="row">
                <div className="col-md-3">
                    <div className="DashboardCardBox">
                        <h2>User</h2>
                        <h1><HiMiniUserGroup /></h1>
                        <NavLink to="/ActivePending">
                        </NavLink>
                        <h1>150</h1>

                        <NavLink to="/ActivePending">
                            <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
                        </NavLink>

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="DashboardCardBox">
                        <h2>Category</h2>
                        <h1><BiCategory /></h1>
                        <h1>150</h1>
                        <NavLink to="/ActivePending">

                            <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
                        </NavLink>

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="DashboardCardBox">
                        <h2>Post</h2>
                        <h1><BsFillPostcardFill /></h1>
                        <h1>150</h1>
                        <NavLink to="/ActivePending">

                            <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
                        </NavLink>

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="DashboardCardBox">
                        <h2>Comment</h2>
                        <h1><FaRegCommentDots /></h1>
                        <h1>150</h1>
                        <NavLink to="/ActivePending">

                            <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
                        </NavLink>

                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-md-3">
                    <div className="DashboardCardBox">
                        <h4>Active User</h4>
                        <h1><BsFillStopCircleFill className='ActiveColor' /></h1>
                        <h1>150</h1>
                        <NavLink to="/ActivePending">

                            <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
                        </NavLink>

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="DashboardCardBox">
                        <h4>Pending User</h4>
                        <h1><BsFillStopCircleFill /></h1>
                        <h1>150</h1>
                        <NavLink to="/ActivePending">

                            <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
                        </NavLink>

                    </div>
                </div>

                <div className="col-md-3">
                    <div className="DashboardCardBox">
                        <h4>Active Category</h4>
                        <h1><BsFillStopCircleFill className='ActiveColor' /></h1>
                        <h1>150</h1>
                        <NavLink to="/ActivePending">

                            <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
                        </NavLink>

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="DashboardCardBox">
                        <h4>Pending Category</h4>
                        <h1><BsFillStopCircleFill /></h1>
                        <h1>150</h1>
                        <NavLink to="/ActivePending">

                            <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
                        </NavLink>

                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-md-3">
                    <div className="DashboardCardBox">
                        <h4>Active Post</h4>
                        <h1><BsFillStopCircleFill className='ActiveColor' /></h1>
                        <h1>150</h1>
                        <NavLink to="/ActivePending">

                            <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
                        </NavLink>

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="DashboardCardBox">
                        <h4>Pending Post</h4>
                        <h1><BsFillStopCircleFill /></h1>
                        <h1>150</h1>
                        <NavLink to="/ActivePending">

                            <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
                        </NavLink>

                    </div>
                </div>

                <div className="col-md-3">
                    <div className="DashboardCardBox">
                        <h4>Active Comment</h4>
                        <h1><BsFillStopCircleFill className='ActiveColor' /></h1>
                        <h1>150</h1>
                        <NavLink to="/ActivePending">

                            <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
                        </NavLink>

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="DashboardCardBox">
                        <h4>Pending Comment</h4>
                        <h1><BsFillStopCircleFill /></h1>
                        <h1>150</h1>
                        <NavLink to="/ActivePending">

                            <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
                        </NavLink>

                    </div>
                </div>
            </div>


        </div>




    </>)
}

export default Card