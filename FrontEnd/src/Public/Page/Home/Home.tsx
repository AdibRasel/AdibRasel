// import TopBar from 'Common/Header/TopBar'

import NavBarTop from '../../../Common/NavBar/NavBarTop'
import Header from '../../../Common/Header/Header'
import TopBar from '../../../Common/Header/TopBar'
import React, { useEffect, useState } from 'react'
import HomeIntroCarousel from 'Public/Components/Carousel/HomeIntroCarousel'
import PublicNavBar from 'Common/NavBar/PublicNavBar'
import Social from 'Public/Components/Social/Social'

import Calendar from '../../../Common/Calendar/Calendar'
import BackToTopButton from '../../../Common/BackToTopButton/BackToTopButton'
import Footer from '../../../Common/Footer/Footer'
import { NavLink } from 'react-router-dom'


import Button from 'react-bootstrap/Button';


import { FaEdit } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { CiRead } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";
import { Allinfo } from 'ApiService/PublicAPIService/PublicAPIService'


const Home = () => {
  const [Loading, SetLoading] = useState<boolean>(false);



  const [Category, SetCategory] = useState<any[]>([]);
  const [Post, SetPost] = useState<any[]>([]);

  useEffect(() => {
    SetLoading(true)

    const fetchData = async () => {
      try {
        const AllData = await Allinfo();
        SetCategory(AllData.Allinfo?.data?.Category);
        SetPost(AllData.Allinfo?.data?.Post);
        console.log(AllData);
        SetLoading(false)

      } catch (error) {
        console.error('Error fetching data:', error);
        SetLoading(true)
      }
      SetLoading(false)

    };

    fetchData();
  }, []);








  return (<>

    <TopBar />

    <Header />


    <NavBarTop />

    <div className="container">
      <hr />
      <div className="row">

        {/* Home Intro Carousel  */}
        <div className="col-md-8">
          <HomeIntroCarousel />
        </div>

        <div className="col-md-4">

          {/* Topic only title Card  */}
          <div className="topicss">

            <h2 className='mt-md-0 mt-3 text-center CommonColor' style={{ backgroundColor: "#82699e", padding: "5px", borderRadius: "10px 10px 1px 0px" }}>TOPIC</h2>

            <div className=" text-white SideMenu" style={{ height: "420px", overflow: "scroll", padding: "10px", border: "1px solid #81689D", borderRadius: "10px" }}>

              <NavLink className="text-white" target="_blank" to="https://adibrasel.github.io/Javascript/" style={{ textDecoration: "none", }}>
                <div className="text-white" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                  Javascript
                </div>
              </NavLink>
              <NavLink className="text-white" target="_blank" to="https://adibrasel.github.io/MongoDB/" style={{ textDecoration: "none", }}>
                <div className="text-white" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                  MongoDB
                </div>
              </NavLink>
              <NavLink className="text-white" target="_blank" to="https://adibrasel.github.io/Express_js/" style={{ textDecoration: "none", }}>
                <div className="text-white" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                  Express JS
                </div>
              </NavLink>
              <NavLink className="text-white" target="_blank" to="https://adibrasel.github.io/React_JS/" style={{ textDecoration: "none", }}>
                <div className="text-white" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                  React JS
                </div>
              </NavLink>
              <NavLink className="text-white" target="_blank" to="https://adibrasel.github.io/Node_JS/" style={{ textDecoration: "none", }}>
                <div className="text-white" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                  Node JS
                </div>
              </NavLink>
              <NavLink className="text-white" target="_blank" to="https://adibrasel.github.io/API/" style={{ textDecoration: "none", }}>
                <div className="text-white" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                  Rest API
                </div>
              </NavLink>


              {Loading === true && (
                <div className="spinner-border text-black text-center m-2" style={{ textAlign: "center", margin: "auto" }} role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
              {Category.map((categoryItem, index) => (
                <NavLink key={index} className="" to={`/Category/${categoryItem}`} style={{ textDecoration: "none" }}>
                  <div className="text-white" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                    {categoryItem.CategoryTitle}
                    {console.log(categoryItem)}
                  </div>
                </NavLink>
              ))}



            </div>

          </div>







        </div>

      </div>
      <PublicNavBar />
    </div>



    <div className="container mt-4">

      <div className="row">
        <div className="col-md-8">


          {/* Post Details info */}
          <div className="postDetails">
            <h2 className='fs-3 CommonColor'>Post</h2>
            <hr />
            {Loading === true && (
              <div className="spinner-border text-black text-center m-2" style={{ textAlign: "center", margin: "auto" }} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            {Post.map((PostItem, index) => (
              <div key={index} className="mb-3" style={{ width: "100%" }}>
                <div className="row">
                  <div className="col-md-4">
                    <NavLink to={"/Post/" + PostItem._id} style={{ cursor: "pointer" }}>
                      <img style={{ width: "100%" }} src={PostItem.PostThumbnail} className='img-fluid' alt="" />
                    </NavLink>

                  </div>
                  <div className="col-md-8">
                    <NavLink to={"/Post/" + PostItem._id} style={{ cursor: "pointer" }}>
                      <h2 className='CommonColor fs-4'>{PostItem.PostTitle}</h2>
                    </NavLink>

                    <div className="d-flex justify-content-start">
                      <div className="text-muted">
                        <FaEdit /> <span>{PostItem.UserName}</span>
                      </div>
                      <div className="text-muted">
                        - <MdOutlineDateRange /> <span>{PostItem.CreateDate}</span>
                      </div>
                    </div>

                    <div className="text-muted">
                      <span>
                        <NavLink to={"/Post/" + PostItem._id} style={{ cursor: "pointer" }}>
                          <div dangerouslySetInnerHTML={{ __html: PostItem.PostDetails.substring(0, 500) }}></div>
                        </NavLink>

                      </span>
                    </div>

                    <NavLink to={"/Post/" + PostItem._id} style={{ cursor: "pointer" }}>
                      <Button size="sm" className='btn btn-dark mt-1'>See More <FaBookReader /></Button>
                    </NavLink>

                  </div>
                </div>
                <hr />
              </div>
            ))}

          </div>

        </div>




        <div className="col-md-4">


          {/* Categroy Details */}
          <div className="topic ss">
            <h2 className='fs-3 CommonColor'>Category</h2>
            <hr />

            {Loading === true && (
              <div className="spinner-border text-black text-center m-2" style={{ textAlign: "center", margin: "auto" }} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            {Category.map((categoryItem, index) => (
              <div key={index} className="mb-3" style={{ width: "100%" }}>
                <div className="row">
                  <div className="col-md-4">
                    <NavLink to={"/category/" + categoryItem._id} style={{ cursor: "pointer" }}>
                      <img style={{ width: "100%" }} src={categoryItem.CategoryThumbnail} className='img-fluid' alt="" />
                    </NavLink>

                  </div>
                  <div className="col-md-8">
                    <NavLink to={"/category/" + categoryItem._id} style={{ cursor: "pointer" }}>
                      <h2 className='CommonColor fs-4'>{categoryItem.CategoryTitle}</h2>
                    </NavLink>

                    <div className="d-flex justify-content-start">
                      <div className="text-muted">
                        <FaEdit /> <span>{categoryItem.UserName}</span>
                      </div>
                      <div className="text-muted">
                        - <MdOutlineDateRange /> <span>{categoryItem.CreateDate}</span>
                      </div>
                    </div>

                    <div className="text-muted">
                      <span>
                        <NavLink to={"/category/" + categoryItem._id} style={{ cursor: "pointer" }}>
                          <div dangerouslySetInnerHTML={{ __html: categoryItem.CategoryDetails.substring(0, 100) }}></div>
                        </NavLink>

                      </span>
                    </div>

                    <NavLink to={"/category/" + categoryItem._id} style={{ cursor: "pointer" }}>
                      <Button size="sm" className='btn btn-dark mt-1'>See More <FaBookReader /></Button>
                    </NavLink>

                  </div>
                </div>
                <hr />
              </div>
            ))}

          </div>

          <Social />

          <Calendar />

          {/* Post only title  */}
          <div className="postss mt-3">
            <h2 className='mt-md-0 mt-3 text-center CommonColor' style={{ backgroundColor: "#82699e", padding: "5px", borderRadius: "10px 10px 1px 0px" }}>Post</h2>
            <div className=" text-white SideMenu" style={{ height: "420px", overflow: "scroll", padding: "10px", border: "1px solid #81689D", borderRadius: "10px" }}>

              {Loading === true && (
                <div className="spinner-border text-black text-center m-2" style={{ textAlign: "center", margin: "auto" }} role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
              {Post.map((PostItem, index) => (
                <NavLink key={index} className="text-white" to={`/Post/${PostItem}`} style={{ textDecoration: "none" }}>
                  <div className="" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                    {PostItem.PostTitle}
                    {console.log(PostItem)}
                  </div>
                </NavLink>
              ))}

            </div>
          </div>


        </div>
      </div>


    </div>


    <BackToTopButton />

    <Footer />


  </>)
}

export default Home