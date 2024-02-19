import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Dashboard from 'Authentic/Dashboard/Dashboard';
import AuthenticUser from 'Authentic/AuthenticUser/AuthenticUser';
import AuthenticCategory from 'Authentic/AuthenticCategory/AuthenticCategory';
import AuthenticPost from 'Authentic/AuthenticPost/AuthenticPost';
import AuthenticComment from 'Authentic/AuthenticComment/AuthenticComment';
import AuthenticProfile from 'Authentic/AuthenticProfile/AuthenticProfile';
import AuthenticUserProfile from 'Authentic/AuthenticUser/AuthenticUserProfile';


const AuthenticationRouter = () => {



    return (
        <BrowserRouter>
            <Routes>

                <Route path="*" element={<Dashboard />} />


                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/AuthenticUser" element={<AuthenticUser />} />
                <Route path="/AuthenticCategory" element={<AuthenticCategory />} />
                <Route path="/AuthenticPost" element={<AuthenticPost />} />
                <Route path="/AuthenticComment" element={<AuthenticComment />} />
                <Route path="/AuthenticProfile" element={<AuthenticProfile />} />
                <Route path="/AuthenticUserProfile" element={<AuthenticUserProfile />} />
                









            </Routes>
        </BrowserRouter>
    )
}

export default AuthenticationRouter