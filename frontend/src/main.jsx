// React settings and functional imports
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Common/Redundant Imports 
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";

// Page Imports
import AboutUsPage from './landing_page/about_us/AboutUsPage.jsx';
import HealthPage from './landing_page/health/HealthPage.jsx'
import HomePage from './landing_page/home/HomePage.jsx'
import LoginPage from './authentication_pages/login/LoginPage.jsx'
import SignUpPage from './authentication_pages/signup/SignUpPage.jsx'
import StrokeInfoPage from './landing_page/strokes/StrokeInfoPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/health' element={<HealthPage/>}/>
      <Route path='/strokes' element={<StrokeInfoPage/>}/>
      <Route path='/about' element={<AboutUsPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<SignUpPage/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
)
