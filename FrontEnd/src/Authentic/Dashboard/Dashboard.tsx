

import AuthenticNav from 'Authentic/Components/AuthenticNav/AuthenticNav'
import TopBar from 'Common/Header/TopBar'
import Topic from 'Public/Components/Topic/Topic'
import TopicCard from 'Public/Components/TopicCard/TopicCard'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from './Card';
import Footer from 'Common/Footer/Footer'

const Dashboard = () => {
    return (<>


        <TopBar />

        <AuthenticNav />

        <hr />

        <Card />

        <Footer />







    </>)
}

export default Dashboard