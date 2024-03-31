import axios from "axios";
import React, { useEffect, useState } from 'react';
import AuthenticationRouter from './Router/AuthenticationRouter';
import UnAuthenticatedRouter from './Router/UnAuthenticatedRouter';
import { LoginVerify } from 'ApiService/LoginVerify';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem('Token');

      if (token) {
        const response = await LoginVerify( token );
        if (response.status === "Login Success") {
          setIsLoggedIn(true);

          localStorage.setItem("FullName", response.data.UserInfo.FullName);
          localStorage.setItem("Mobile", response.data.UserInfo.Mobile);
          localStorage.setItem("Email", response.data.UserInfo.Email);
          localStorage.setItem("Image", response.data.UserInfo.Image);
          localStorage.setItem("Status", response.data.UserInfo.Status);
          localStorage.setItem("UserRole", response.data.UserInfo.UserRole);
          localStorage.setItem("CreateDate", response.data.UserInfo.CreateDate);
  

        }
      }
    };


    checkLogin();
  }, []);

  return isLoggedIn ? <AuthenticationRouter /> : <UnAuthenticatedRouter />;
};

export default App;
