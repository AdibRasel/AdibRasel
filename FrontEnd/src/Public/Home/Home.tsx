// import TopBar from 'Common/Header/TopBar'

import NavBarTop from '../../Common/NavBarTop/NavBarTop'
import Header from '../../Common/Header/Header'
import TopBar from '../../Common/Header/TopBar'
import React from 'react'
import HomeIntroCarousel from 'Public/Components/Carousel/HomeIntroCarousel'
import Topic from 'Public/Components/Topic/Topic'

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
    </div>



    <h1>This is home page</h1>





  </>)
}

export default Home