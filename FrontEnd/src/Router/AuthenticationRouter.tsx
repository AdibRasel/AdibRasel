import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Dashboard from 'Authentic/Dashboard/Dashboard';
// import AuthenticUser from 'Authentic/AuthenticUser/AuthenticUser';
import AuthenticCategory from 'Authentic/AuthenticCategory/AuthenticCategory';
// import AuthenticPost from 'Authentic/AuthenticPost/AuthenticPost';
import AuthenticComment from 'Authentic/AuthenticComment/AuthenticComment';
// import AuthenticProfile from 'Authentic/AuthenticProfile/AuthenticProfile';
import AuthenticUserProfile from 'Authentic/AuthenticUser/AuthenticUserProfile';
import AuthenticCategoryNew from 'Authentic/AuthenticCategory/AuthenticCategoryNew';
import AuthenticCategoryView from 'Authentic/AuthenticCategory/AuthenticCategoryView';
import AuthenticCategoryUpdate from 'Authentic/AuthenticCategory/AuthenticCategoryUpdate';
import MultipleEmailSend from 'Authentic/AuthenticSendEmail/MultipleEmailSend';
import SingleEmailSend from 'Authentic/AuthenticSendEmail/SingleEmailSend';
import EmailSetting from 'Authentic/AuthenticSendEmail/EmailSetting';
import WebsiteToPdf from 'Authentic/WebsiteToPDF/WebsiteToPdf';
import AuthenticCreatePost from 'Authentic/AuthenticCategory/AuthenticPost/AuthenticCreatePost';
import AuthenticUpdatePost from 'Authentic/AuthenticCategory/AuthenticPost/AuthenticUpdatePost';
import AuthenticViewPost from 'Authentic/AuthenticCategory/AuthenticPost/AuthenticViewPost';
import ActivePending from 'Authentic/ActivePending/ActivePending';


const AuthenticationRouter = () => {



    return (
        <BrowserRouter>
            <Routes>

                <Route path="*" element={<Dashboard />} />


                <Route path="/Dashboard" element={<Dashboard />} />
                {/* <Route path="/AuthenticUser" element={<AuthenticUser />} /> */}
                <Route path="/AuthenticCategory" element={<AuthenticCategory />} />
                {/* <Route path="/AuthenticPost" element={<AuthenticPost />} /> */}
                <Route path="/AuthenticComment" element={<AuthenticComment />} />
                {/* <Route path="/AuthenticProfile" element={<AuthenticProfile />} /> */}
                <Route path="/AuthenticUserProfile" element={<AuthenticUserProfile />} />
                <Route path="/AuthenticCategoryNew" element={<AuthenticCategoryNew />} />
                <Route path="/AuthenticCategoryView/:id" element={<AuthenticCategoryView />} />
                <Route path="/AuthenticCategoryUpdate" element={<AuthenticCategoryUpdate />} />
                <Route path="/ActivePending" element={<ActivePending />} />

                <Route path="/AuthenticCreatePost" element={<AuthenticCreatePost />} />
                <Route path="/AuthenticUpdatePost" element={<AuthenticUpdatePost />} />
                <Route path="/AuthenticViewPost" element={<AuthenticViewPost />} />










                <Route path="/EmailSetting" element={<EmailSetting />} />
                <Route path="/MultipleEmailSend" element={<MultipleEmailSend />} />
                <Route path="/SingleEmailSend" element={<SingleEmailSend />} />
                {/* <Route path="/WebsiteToPdf" element={<WebsiteToPdf />} /> */}
                









            </Routes>
        </BrowserRouter>
    )
}

export default AuthenticationRouter