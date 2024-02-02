// import TopBar from 'Common/Header/TopBar'

import NavBarTop from '../../Common/NavBarTop/NavBarTop'
import Header from '../../Common/Header/Header'
import TopBar from '../../Common/Header/TopBar'
import React from 'react'
import HomeIntroCarousel from 'Public/Components/Carousel/HomeIntroCarousel'

const Home = () => {
  return (<>

    <TopBar />

    <Header />


    <NavBarTop />

    <div className="container">
      <div className="row">
        <div className="col-md-7">

          <HomeIntroCarousel />

        </div>
        <div className="col-md-5">
          <ul>
            <li> Lorem ipsum dolor sit amet.</li>
            <li> Lorem ipsum dolor sit amet.</li>
            <li> Lorem ipsum dolor sit amet.</li>
            <li> Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
    </div>



    <h1>This is home page</h1>





  </>)
}

export default Home