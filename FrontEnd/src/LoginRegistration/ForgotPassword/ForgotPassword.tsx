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
                    <h2>Forgot Password</h2>
                    <div className="form">
                        <div className="inputBox">
                            <input type="text" /> <i>Enter your forgotten account Email</i>
                        </div>
                        {/* <div className="inputBox">
                            <input type="password" /> <i>Password</i>
                        </div> */}
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