
import { RegistrationRequest } from 'ApiService/UserApiService'
import React, { useRef, useState } from 'react'

import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'

const Registration = () => {

    const navigate = useNavigate();


    const FullNameRef = useRef<HTMLInputElement>(null);
    const MobileRef = useRef<HTMLInputElement>(null);
    const EmailRef = useRef<HTMLInputElement>(null);
    const PasswordRef = useRef<HTMLInputElement>(null);

    const [ExistingInfo, SetExistingInfo] = useState('');
    const [Loading, SetLoading] = useState(false);


    const [FullNameError, SetFullNameError] = useState("");
    const [MobileError, SetMobileError] = useState("");
    const [EmailError, SetEmailError] = useState("");
    const [PasswordError, SetPasswordError] = useState("");

    const RegistrationBtn = async () => {
        if (
            FullNameRef.current &&
            MobileRef.current &&
            EmailRef.current &&
            PasswordRef.current
        ) {
            const FullName = FullNameRef.current.value;
            const Mobile = MobileRef.current.value;
            const Email = EmailRef.current.value;
            const Password = PasswordRef.current.value;

            const postBody = {
                FullName: FullName,
                Mobile: Mobile,
                Email: Email,
                Password: Password,
                Image: "Image Link",
                Status: "Active",
                UserRole: "User"
            };




            if (FullName.length <= 2 || Mobile.length <= 10 || Mobile.length >= 12 || Email.length <= 2 || Password.length <= 5) {

            } else {

                SetLoading(true)

                try {
                    const registrationAPICall = await RegistrationRequest(postBody);

                    const RegistrationSucess = registrationAPICall?.status;
                    const Token = registrationAPICall?.UserInfo?.data?.Token;

          

                    // Set the interval time in milliseconds (e.g., 5000 for 5 seconds)
                    const intervalTime = 1000;

                    // Function to reload the page
                    const reloadPage = () => {
                        window.location.reload();
                    };


                    if (RegistrationSucess === "Registration Success") {

                        localStorage.setItem("Token", Token);

                        SetExistingInfo("")
                        Swal.fire({
                            title: "Good job",
                            text: "Registration Success",
                            icon: "success"
                        });
                        navigate('/Dashboard');
                        setInterval(reloadPage, intervalTime);


                    }
                    // Check if ExistInfo exists before accessing its properties
                    const existingEmail = registrationAPICall?.ExistInfo?.data?.data?.Email;
                    const existingName = registrationAPICall?.ExistInfo?.data?.data?.FullName;

                    if (existingEmail && existingName) {
                        const info = `Sorry, the email ${existingEmail} is already registered under the name "${existingName}". Could you please provide an alternative Gmail address`;
                        SetExistingInfo(info);
                    }



                } catch (error) {
                    console.log("Registration failed:", error);
                }
                SetLoading(false)


            }


        }
    };




    const OnChangeValidation: any = () => {
        if (FullNameRef.current &&
            MobileRef.current &&
            EmailRef.current &&
            PasswordRef.current) {
            const FullName = FullNameRef.current.value;
            const Mobile = MobileRef.current.value;
            const Email = EmailRef.current.value;
            const Password = PasswordRef.current.value;

            if (FullName.length <= 2) {
                SetFullNameError("Write Your Full Name With 3 Characters");
            } else if (Mobile.length <= 10 || Mobile.length >= 12) {
                SetMobileError("Write Valid Mobile Number In BDT 11 Digits");
                SetFullNameError("")
            } else if (Email.length <= 2) {
                SetEmailError("Write Your Current Email Address");
                SetMobileError("")
            } else if (Password.length <= 5) {
                SetPasswordError("Please Provide 6 Characters Or More For Password Entry");
                SetEmailError("")
            } else {
                SetFullNameError("")
                SetMobileError("")
                SetEmailError("")
                SetPasswordError("")
            }
        }
    };


    return (<>




        <section className='SectionBG'>
            {[...Array(100)].map((_, index) => (
                <span key={index}></span>
            ))}
            <div className="signin">
                <div className="content">

                    <div className="text-center">
                        <NavLink to="/" className="p-2">
                            Home
                        </NavLink>
                        <NavLink to="/" className="p-2">
                            About
                        </NavLink>
                        <NavLink to="/" className="p-2">
                            Contact
                        </NavLink>
                    </div>


                    <h2>Registration</h2>
                    <div className="form">


                        <div className="inputBox">
                            <input onChange={OnChangeValidation} ref={FullNameRef} type="text" /> <i>Full Name</i>
                            <br />
                            <div className="text-danger">{FullNameError}</div>
                        </div>
                        <div className="inputBox">
                            <input onChange={OnChangeValidation} ref={MobileRef} type="text" /> <i>Mobile Number</i>
                            <br />
                            <div className="text-danger">{MobileError}</div>
                        </div>
                        <div className="inputBox">
                            <input onChange={OnChangeValidation} ref={EmailRef} type="text" /> <i>Email Address</i>
                            <br />
                            <div className="text-danger">{EmailError}</div>
                        </div>
                        <div className="inputBox">
                            <input onChange={OnChangeValidation} ref={PasswordRef} type="password" /> <i>Password</i>
                            <br />
                            <div className="text-danger">{PasswordError}</div>
                        </div>


                        {Loading === true && (
                            <div className="spinner-border text-white text-center" style={{ textAlign: "center", margin: "auto" }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        )}


                        <div className='text-danger'>{ExistingInfo}</div>


                        <div className="links">
                            <NavLink to="/ForgotPassword">
                                Forgot Password
                            </NavLink>
                            <NavLink to="/Login">
                                Login
                            </NavLink>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Registration" onClick={RegistrationBtn} />
                        </div>


                    </div>
                </div>
            </div>
        </section>







    </>)
}

export default Registration