import React from 'react'
import Header from '../../../Common/Header/Header'
import TopBar from '../../../Common/Header/TopBar'
import Topic from 'Public/Components/Topic/Topic'
import PublicNavBar from 'Common/NavBar/PublicNavBar'
import BackToTopButton from '../../../Common/BackToTopButton/BackToTopButton'
import Footer from '../../../Common/Footer/Footer'
import Calendar from '../../../Common/Calendar/Calendar'
import AllCategory from './AllCategory'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { NavLink } from 'react-router-dom';

const Category = () => {
  return (<>


    <TopBar />

    <Header />

    <PublicNavBar />


    {/* <NavBarTop /> */}

    <div className="container">
      <hr />



      {/* <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb> */}










      <div className="row">
        <div className="col-md-8">
          <AllCategory />
        </div>
        <div className="col-md-4">
          <Topic />
          <span className='m-2'></span>
          <Calendar />
        </div>

      </div>
    </div>



    <BackToTopButton />

    <Footer />

  </>)
}

export default Category