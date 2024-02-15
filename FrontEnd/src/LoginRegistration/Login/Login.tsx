import React from 'react'

import  "../LoginRegistration.css"


import { NavLink } from 'react-router-dom'

const Login = () => {
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

                    
                    <h2>Login</h2>
                    <div className="form">
                        <div className="inputBox">
                            <input type="text" /> <i>Username</i>
                        </div>
                        <div className="inputBox">
                            <input type="password" /> <i>Password</i>
                        </div>
                        <div className="links">
                            <NavLink to="/ForgotPassword">
                                Forgot Password
                            </NavLink>
                            <NavLink to="/Registration">
                                Registration
                            </NavLink>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Login" />
                        </div>
                    </div>
                </div>
            </div>
        </section>





    </>)
}

export default Login