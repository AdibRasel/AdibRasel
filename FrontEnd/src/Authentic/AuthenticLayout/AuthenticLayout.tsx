import AuthenticNav from 'Authentic/Components/AuthenticNav/AuthenticNav'
import Footer from 'Common/Footer/Footer'
import AuthenticTopBar from 'Common/Header/AuthenticTopBar'
import TopBar from 'Common/Header/TopBar'
import React from 'react'

const AuthenticLayout = (props: any) => {
    return (<>



        {/* <TopBar /> */}
        <AuthenticTopBar />

        <AuthenticNav />


        <div className="container">
            {props.children}
        </div>



        <Footer />

    </>)
}

export default AuthenticLayout