import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Dashboard from 'Authentic/Dashboard/Dashboard';


const AuthenticationRouter = () => {



    return (
        <BrowserRouter>
            <Routes>

                <Route path="*" element={<Dashboard />} />


                <Route path="/Dashboard" element={<Dashboard />} />
                









            </Routes>
        </BrowserRouter>
    )
}

export default AuthenticationRouter