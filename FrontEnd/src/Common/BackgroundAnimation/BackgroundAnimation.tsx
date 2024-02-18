import React from 'react'

import "./BackgroundAnimation.css"
import TopBar from 'Common/Header/TopBar'
import AuthenticNav from 'Authentic/Components/AuthenticNav/AuthenticNav'
import TopicCard from 'Public/Components/TopicCard/TopicCard'
import Topic from 'Public/Components/Topic/Topic'


const BackgroundAnimation = () => {
    return (<>


        <div className="context">
            <h1>Pure Css Animated Background</h1>


            <TopBar />

        <AuthenticNav />


        <div className="container">
            <hr />
            <div className="row">
                <div className="col-md-8">
                    <TopicCard />
                </div>
                <div className="col-md-4">
                    <Topic />
                </div>
            </div>
        </div>



        </div>


        <div className="area" >
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div >





    </>)
}

export default BackgroundAnimation