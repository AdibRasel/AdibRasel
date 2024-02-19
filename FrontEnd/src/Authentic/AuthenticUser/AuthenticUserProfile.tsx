import AuthenticNav from 'Authentic/Components/AuthenticNav/AuthenticNav'
import Footer from 'Common/Footer/Footer'
import TopBar from 'Common/Header/TopBar'
import React from 'react'
import { NavLink } from 'react-router-dom';



const AuthenticUserProfile = () => {
  return (<>


    <TopBar />

    <AuthenticNav />

    <hr />


    <div className="container">
      <div className="row align-items-center flex-row-reverse">
        <div className="col-lg-6">
          <div className="about-text go-to">
            <h3 className="dark-color">About Me</h3>
            <h6 className="theme-color lead">A Lead UX &amp; UI designer based in Canada</h6>
            <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
            <div className="row about-list">
              <div className="col-md-6">
                <div className="media">
                  <label>Birthday</label>
                  <p>4th april 1998</p>
                </div>
                <div className="media">
                  <label>Age</label>
                  <p>22 Yr</p>
                </div>
                <div className="media">
                  <label>Residence</label>
                  <p>Canada</p>
                </div>
                <div className="media">
                  <label>Address</label>
                  <p>California, USA</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>info@domain.com</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  <p>820-885-3321</p>
                </div>
                <div className="media">
                  <label>Skype</label>
                  <p>skype.0404</p>
                </div>
                <div className="media">
                  <label>Freelance</label>
                  <p>Available</p>
                </div>
              </div>

              <h3>Status</h3>

              <select className="form-select form-select-sm p-2 mx-2" aria-label=".form-select-sm example">
                <option selected>Active</option>
                <option value="1">Pending</option>
                <option selected value="3">Delete</option>
              </select>

              <button className='btn btn-outline-dark m-2'>Save</button>


            </div>
          </div>
        </div>
        <div className="col-lg-6">



          <div className="about-avatar">
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
          </div>
        </div>
      </div>
      <div className="counter">
        <div className="row">
          <div className="col-6 col-lg-3">
            <div className="count-data text-center">
              <h6 className="count h2" data-to="500" data-speed="500">500</h6>
              <p className="m-0px font-w-600">Category</p>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="count-data text-center">
              <h6 className="count h2" data-to="150" data-speed="150">150</h6>
              <p className="m-0px font-w-600">Post</p>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="count-data text-center">
              <h6 className="count h2" data-to="850" data-speed="850">850</h6>
              <p className="m-0px font-w-600">Comment</p>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="count-data text-center">
              <h6 className="count h2" data-to="190" data-speed="190">190</h6>
              <p className="m-0px font-w-600">Profile View</p>
            </div>
          </div>
        </div>
      </div>
    </div>
















    <Footer />







  </>)
}

export default AuthenticUserProfile