// import TopBar from 'Common/Header/TopBar'

import NavBarTop from '../../Common/NavBar/NavBarTop'
import Header from '../../Common/Header/Header'
import TopBar from '../../Common/Header/TopBar'
import React from 'react'
import HomeIntroCarousel from 'Public/Components/Carousel/HomeIntroCarousel'
import Topic from 'Public/Components/Topic/Topic'
import PublicNavBar from 'Common/NavBar/PublicNavBar'
import TopicCard from 'Public/Components/TopicCard/TopicCard'
import Social from 'Public/Components/Social/Social'

import TitlePng from "../../Assets/Image/TitlePng.png"
import Calendar from '../../Common/Calendar/Calendar'
import BackToTopButton from '../../Common/BackToTopButton/BackToTopButton'
import Footer from '../../Common/Footer/Footer'

const Home = () => {
  return (<>

    <TopBar />

    <Header />


    <NavBarTop />

    <div className="container">
      <hr />
      <div className="row">
        <div className="col-md-8">
          <HomeIntroCarousel />
        </div>
        <div className="col-md-4">
          <Topic />
        </div>
      </div>
      <PublicNavBar />
    </div>



    <div className="container mt-4">

      <div className="row">
        <div className="col-md-8">

          <h2 className='fs-3 CommonColor'>TOPIC</h2>
          <hr />

          <TopicCard />

        </div>

        <div className="col-md-4">

          <Social />

          <Calendar />

        </div>
      </div>


    </div>


    <BackToTopButton />

    <Footer />


  </>)
}

export default Home