


import Dashboard from 'Admin/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const UnAuthenticatedRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default UnAuthenticatedRouter