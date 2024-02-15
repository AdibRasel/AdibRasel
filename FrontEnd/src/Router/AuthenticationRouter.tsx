import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from '../Public/Page/Home/Home';
import Category from '../Public/Page/Category/Category';
import Post from 'Public/Page/Post/Post';
import Dashboard from 'Admin/Dashboard/Dashboard';

const AuthenticationRouter = () => {







    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/Category" element={<Category />} />
                <Route path="/Post" element={<Post />} />
                <Route path="/Dashboard" element={<Dashboard />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AuthenticationRouter