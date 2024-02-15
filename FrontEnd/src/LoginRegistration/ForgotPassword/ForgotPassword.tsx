import React from 'react'

import { NavLink } from 'react-router-dom'



const ForgotPassword = () => {
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

                    <h2>Forgot Password</h2>
                    <div className="form">
                        <div className="inputBox">
                            <input type="text" /> <i>Enter your forgotten account Email</i>
                        </div>
                        <div className="links">
                            <NavLink to="/Registration">
                                Registration
                            </NavLink>
                            <NavLink to="/Login">
                                Login
                            </NavLink>
                        </div>
                        <div className="inputBox">
                            <NavLink to="/OTP">
                                <input type="submit" value="Next" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>







    </>)
}

export default ForgotPassword