import React from 'react'

import { NavLink } from 'react-router-dom'



const NewPassword = () => {
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

                    <h2>New Password</h2>
                    <div className="form">

                        <div className="inputBox">
                            <input type="password" /> <i>New Password</i>
                        </div>

                        <div className="inputBox">
                            <input type="password" /> <i>Confirm New Password</i>
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
                            <NavLink to="/Login">
                                <input type="submit" value="Submit" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>




    </>)
}

export default NewPassword