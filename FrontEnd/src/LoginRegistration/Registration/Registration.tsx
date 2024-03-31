
import { RegistrationRequest } from 'ApiService/UserApiService'
import React, { useRef, useState } from 'react'

import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



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




            if (FullName.length <= 3) {
                SetFullNameError("write your name with 3 caractor")
            } else if (Mobile.length <= 10 || Mobile.length >= 12) {
                SetMobileError("write valid mobiel number in bdt 11 digit")
            } else if (Email.length <= 3) {
                SetEmailError("write your curret email address")
            } else if (Password.length <= 3) {
                SetPasswordError("please provie 3 carractor abote password enter")
            } else {
                console.log("success")





                SetLoading(true)
                try {
                    const registrationAPICall = await RegistrationRequest(postBody);
                    console.log(registrationAPICall);

                    const RegistrationSucess = registrationAPICall?.status

                    if (RegistrationSucess === "Registration Success") {
                        console.log("registration success")
                        SetExistingInfo("")
                        navigate('/Dashboard');

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




    const OnChangeNalidation: any = () => {
        if (FullNameRef.current &&
            MobileRef.current &&
            EmailRef.current &&
            PasswordRef.current) {
            const FullName = FullNameRef.current.value;
            const Mobile = MobileRef.current.value;
            const Email = EmailRef.current.value;
            const Password = PasswordRef.current.value;

            if (FullName.length <= 3) {
                SetFullNameError("write your name with 3 characters");
            } else if (Mobile.length <= 10 || Mobile.length >= 12) {
                SetMobileError("write valid mobile number in BDT 11 digits");
            } else if (Email.length <= 3) {
                SetEmailError("write your current email address");
            } else if (Password.length <= 3) {
                SetPasswordError("please provide 3 characters or more for password entry");
            } else {
                console.log("success");
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
                            <input onChange={OnChangeNalidation} ref={FullNameRef} type="text" /> <i>Full Name</i>
                            <br />
                            <div className="text-danger">{FullNameError}</div>
                        </div>
                        <div className="inputBox">
                            <input onChange={OnChangeNalidation} ref={MobileRef} type="text" /> <i>Mobile Number</i>
                            <br />
                            <div className="text-danger">{MobileError}</div>
                        </div>
                        <div className="inputBox">
                            <input onChange={OnChangeNalidation} ref={EmailRef} type="text" /> <i>Email Address</i>
                            <br />
                            <div className="text-danger">{EmailError}</div>
                        </div>
                        <div className="inputBox">
                            <input onChange={OnChangeNalidation} ref={PasswordRef} type="password" /> <i>Password</i>
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