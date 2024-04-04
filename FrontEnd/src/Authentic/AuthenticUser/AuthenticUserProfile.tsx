import { UserDetails } from 'ApiService/UserApiService';
import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout';
import AuthenticNav from 'Authentic/Components/AuthenticNav/AuthenticNav'
import Footer from 'Common/Footer/Footer'
import TopBar from 'Common/Header/TopBar'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const AuthenticUserProfile = () => {

  const [Loading, SetLoading] = useState<boolean>(false);


  const [data, setData] = useState<any>("");

  useEffect(() => {
    SetLoading(true)
    const UserEmail = localStorage.getItem("Email");
    const PostBody = {
      Email: UserEmail
    };

    const fetchData = async () => {
      try {
        const response = await UserDetails(PostBody);
        setData(response);

        SetLoading(false)

      } catch (error) {
        console.error('Error fetching data:', error);
        SetLoading(true)

      }
    };



    fetchData();

  }, []);

  // Ensure data is not empty before accessing its properties
  const _id = data?.UserInfo?.data?.User?._id;
  const Fullname = data?.UserInfo?.data?.User?.FullName;
  const Mobile = data?.UserInfo?.data?.User?.Mobile;
  const Email = data?.UserInfo?.data?.User?.Email;
  const Image = data?.UserInfo?.data?.User?.Image;
  const Status = data?.UserInfo?.data?.User?.Status;
  const UserRole = data?.UserInfo?.data?.User?.UserRole;
  const CreateDate = data?.UserInfo?.data?.User?.CreateDate;

  // console.log(data)

  return (<>




    <AuthenticLayout>

      <hr />


      <div className="container">
        <h3 className="dark-color">About Me</h3>

        {/* {data.UserInfo.data.User.FullName} */}






        {Loading && (

          <div className="spinner-border text-black text-center" style={{ textAlign: "center", margin: "auto" }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>

        )}

        {!Loading && (



          <div>

            <div className="row">
              <div className="col-md-6">
                <h2> Full Name : {Fullname} </h2>
                <p> Mobile : <b>{Mobile} </b> </p>
                <p> Email :  <b>{Email} </b> </p>
                <p> Status :  <b>{Status} </b> </p>
                <p> UserRole :  <b>{UserRole} </b> </p>
                <p> Registration Date : <b> {CreateDate} </b> </p>
                <p> User ID : {_id} </p>


                <select className="form-select form-select-sm p-2 mx-2" aria-label=".form-select-sm example">
                  <option selected>Active</option>
                  <option value="1">Pending</option>
                  <option value="3">Delete</option>
                </select>
                <button className='btn btn-outline-dark m-2'>Save</button>

              </div>



              <div className="col-md-6" style={{textAlign:"center"}}>
                  <img src={Image} className='ProfileImage' style={{border:"1px solid #333", borderRadius:"10px"}} alt="" />
              </div>

            </div>




          </div>


        )}





      </div>




    </AuthenticLayout>









  </>)
}

export default AuthenticUserProfile