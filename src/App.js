
import { Routes, Route ,BrowserRouter } from 'react-router-dom';

// Frontend page elements
import FrontendLayout from './components/frontend/FrontendLayout';
import Home from './components/frontend/pages/Index';
import About from './components/frontend/pages/About';
import Rules from './components/frontend/pages/Rules';
import Documents from './components/frontend/pages/Document';
import FAQ from './components/frontend/pages/Faq';
import Contact from './components/frontend/pages/Contact';
import Kormodetails from './components/frontend/pages/Kormodetails';

import UserLogin from './components/frontend/pages/Login';
import UserRegister from './components/frontend/pages/Register';
import ForgotPassword from './components/frontend/pages/ForgotPassword';
import ResetPassword from './components/frontend/pages/ResetPassword';

import UserPanelLayout from './components/frontend/UserPanelLayout';
import Profile from './components/frontend/pages/userPanel/Profile';
import Applications from './components/frontend/pages/userPanel/Applications';
import ApplicationForCopyright from './components/frontend/pages/userPanel/ApplicationForCopyright';
import CuktiPottro from './components/frontend/pages/userPanel/CuktiPottro';

function App() {

  return(
    <>
      <BrowserRouter>
        <Routes>


      {/* Frontend User Panel */}
        <Route path="/" element={<UserPanelLayout/>}>
          <Route path="dashboard/user-profile" element={<Profile/>} />
          <Route path="dashboard/applicant" element={<Applications/>} />
          <Route path="dashboard/user-profile/add" element={<ApplicationForCopyright/>} />
          <Route path="dashboard/user-profile/agreement-form-add" element={<CuktiPottro/>} />
        </Route>

      {/* Frontend page elements */}
          <Route path='/user-login' element={<UserLogin/>}/>
          <Route path='/user-register' element={<UserRegister/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/reset-password' element={<ResetPassword/>}/>

            <Route path='/' exact element={<FrontendLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='copyright' element={<About/>}/>
              <Route path='rules' element={<Rules/>}/>
              <Route path='documents' element={<Documents/>}/>
              <Route path='faq' element={<FAQ/>}/>
              <Route path='contact' element={<Contact/>}/>
              <Route path='details' element={<Kormodetails/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
