import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from '../Public/Page/Home/Home';
import Category from '../Public/Page/Category/Category';

const AuthenticationRouter = () => {







    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/Category" element={<Category />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AuthenticationRouter