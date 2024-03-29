
import React from 'react'

import { NavLink } from 'react-router-dom'


const Registration = () => {
    return (<>




        <section className='SectionBG'>
            {[...Array(100)].map((_, index) => (
                <span key={index}></span>
            ))}
            <div className="signin">
                <div className="content">

                    <div className="text-center">
                        <NavLink to="/" className="p-2">
                            Home
                        </NavLink>
                        <NavLink to="/" className="p-2">
                            About
                        </NavLink>
                        <NavLink to="/" className="p-2">
                            Contact
                        </NavLink>
                    </div>


                    <h2>Registration</h2>
                    <div className="form">

                        
                        <div className="inputBox">
                            <input type="text" /> <i>Full Name</i>
                        </div>
                        <div className="inputBox">
                            <input type="text" /> <i>Mobile Number</i>
                        </div>
                        <div className="inputBox">
                            <input type="text" /> <i>Email Address</i>
                        </div>
                        <div className="inputBox">
                            <input type="password" /> <i>Password</i>
                        </div>





                        <div className="links">
                            <NavLink to="/ForgotPassword">
                                Forgot Password
                            </NavLink>
                            <NavLink to="/Login">
                                Login
                            </NavLink>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Registration" />
                        </div>


                    </div>
                </div>
            </div>
        </section>







    </>)
}

export default Registration