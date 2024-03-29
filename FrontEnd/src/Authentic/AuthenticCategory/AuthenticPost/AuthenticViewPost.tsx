import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout'
import React from 'react'
import { NavLink } from 'react-router-dom'

const AuthenticViewPost = () => {
    return (<>
        <AuthenticLayout>

            <hr />

            {/* ========= Breadcrumb start ========== */}
            <div className='pb-2'>
                <NavLink to="/">
                    <span className='text-muted'>Home</span>
                </NavLink>

                {" > "}

                <NavLink to="/Category">
                    <span className='text-muted' >Category</span>
                </NavLink>

                {" > "}

                <span>Post</span>

            </div>
            {/* ========= Breadcrumb end ========== */}





            <h5>View Post</h5>






        </AuthenticLayout>


    </>)
}

export default AuthenticViewPost