import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from '../Public/Home/Home';

const AuthenticationRouter = () => {







    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/" element={<Home />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AuthenticationRouter