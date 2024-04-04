


import Home from '../Public/Page/Home/Home';
import Category from '../Public/Page/Category/Category';
import Post from 'Public/Page/Post/Post';


import Dashboard from 'Authentic/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import ForgotPassword from 'LoginRegistration/ForgotPassword/ForgotPassword';
import NewPassword from 'LoginRegistration/ForgotPassword/NewPassword';
import OTP from 'LoginRegistration/ForgotPassword/OTP';
import Login from 'LoginRegistration/Login/Login';
import Registration from 'LoginRegistration/Registration/Registration';





const UnAuthenticatedRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
   


        {/* <Route path="*" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/Dashboard" element={<Dashboard />} />


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