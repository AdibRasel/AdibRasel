
import ForgotPassword from 'LoginRegistration/ForgotPassword/ForgotPassword';
import NewPassword from 'LoginRegistration/ForgotPassword/NewPassword';
import OTP from 'LoginRegistration/ForgotPassword/OTP';
import Login from 'LoginRegistration/Login/Login';
import Registration from 'LoginRegistration/Registration/Registration';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const UnAuthenticatedRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/OTP" element={<OTP />} />
        <Route path="/NewPassword" element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default UnAuthenticatedRouter