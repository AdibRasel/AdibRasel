import React, { useRef, useState } from 'react'

import "../LoginRegistration.css"

import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom'
import { LoginRequest } from 'ApiService/UserApiService';

import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();


    const EmailRef = useRef<HTMLInputElement>(null);
    const PasswordRef = useRef<HTMLInputElement>(null);

    const [Loading, SetLoading] = useState(false);


    const [LoginError, SetLoginError] = useState("");
    const [EmailError, SetEmailError] = useState("");
    const [PasswordError, SetPasswordError] = useState("");

    const LoginBtn = async () => {
        if (

            EmailRef.current &&
            PasswordRef.current
        ) {
            const Email = EmailRef.current.value;
            const Password = PasswordRef.current.value;

            const postBody = {
                Email: Email,
                Password: Password,
            };




            if (Email.length <= 2 || Password.length <= 5) {

            } else {

                SetLoading(true)

                try {
                    const registrationAPICall = await LoginRequest(postBody);

                    const RegistrationSucess = registrationAPICall?.status;
                    const Token = registrationAPICall?.UserInfo?.data?.Token;


                    console.log(registrationAPICall)

                    // Set the interval time in milliseconds (e.g., 5000 for 5 seconds)
                    const intervalTime = 1000;

                    // Function to reload the page
                    const reloadPage = () => {
                        window.location.reload();
                    };


                    if (RegistrationSucess === "Login Success") {

                        localStorage.setItem("Token", Token);


                        Swal.fire({
                            title: "Good job",
                            text: "Login Success",
                            icon: "success"
                        });
                        navigate('/Dashboard');
                        setInterval(reloadPage, intervalTime);


                    } else {
                        SetLoginError("Login Faild, Please Curret Your Email Address and Password")
                    }




                } catch (error) {
                    console.log("Registration failed:", error);
                }
                SetLoading(false)


            }


        }
    };



    const OnChangeValidation: any = () => {
        if (EmailRef.current &&
            PasswordRef.current) {
            const Email = EmailRef.current.value;
            const Password = PasswordRef.current.value;

            if (Email.length <= 2) {
                SetEmailError("Write Your Current Email Address");
                SetLoginError("")
            } else if (Password.length <= 5) {
                SetPasswordError("Please Provide 6 Characters Or More For Password Entry");
                SetEmailError("")
                SetLoginError("")
            } else {
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


                    <h2>Login</h2>
                    <div className="form">
                        <div className="inputBox">
                            <input onChange={OnChangeValidation} ref={EmailRef} type="text" /> <i>Username</i>
                            <br />
                            <div className="text-danger">{EmailError}</div>
                        </div>
                        <div className="inputBox">
                            <input onChange={OnChangeValidation} ref={PasswordRef} type="password" /> <i>Password</i>
                            <br />
                            <div className="text-danger">{PasswordError}</div>
                        </div>
                        <div className="text-danger">{LoginError}</div>
                        <div className="links">
                            <NavLink to="/ForgotPassword">
                                Forgot Password
                            </NavLink>
                            <NavLink to="/Registration">
                                Registration
                            </NavLink>
                        </div>
                        <div className="inputBox">
                            <input onClick={LoginBtn} type="submit" value="Login" />
                        </div>
                    </div>
                </div>
            </div>
        </section>





    </>)
}

export default Login