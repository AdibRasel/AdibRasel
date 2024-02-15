import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'


const OTP = () => {



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


                    <h2>OTP</h2>
                    <div className="form">
                        <div className="inputBox">
                            <input type="text" className='InputOTP' maxLength={6} pattern="\d{6}" /> <i>Enter the 6 digit number in your Email address</i>
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
                            <NavLink to="/NewPassword">
                                <input type="submit" value="Next" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>




    </>)
}

export default OTP