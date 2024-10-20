// React settings and functional imports
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";

// Common/Redundant Imports 
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";

// Landing Page Imports
import AboutUsPage from './landing_page/about_us/AboutUsPage.jsx';
import HealthPage from './landing_page/health/HealthPage.jsx'
import HomePage from './landing_page/home/HomePage.jsx'
import StrokeInfoPage from './landing_page/strokes/StrokeInfoPage.jsx'

// Authentication Page Imports
import LoginPage from './authentication_pages/login/LoginPage.jsx'
import SignUpPage from './authentication_pages/signup/SignUpPage.jsx'

// Dashboard Page Imports
import Dashboard from './dashboard/dashboard_landing/Dashboard.jsx';
import DashNav from './dashboard/dashboard_landing/DashNav.jsx';
import Blogs from './dashboard/informational_blogs/Blogs.jsx';
import Analyzer from './dashboard/symptoms_analyzer/Analyzer.jsx';
import Weather from './dashboard/weather_tracking/Weather.jsx';

const Main = () => {
  const location = useLocation();  // Get the current location (path)

  return (
    <div>
      {/* Conditionally rendering the navbar */}
      {location.pathname.startsWith('/dashboard') ? <DashNav /> : <Navbar />}

      <Routes>
        {/* Landing Page Routes */}
        <Route path='/' element={<HomePage />} />
        <Route path='/health' element={<HealthPage />} />
        <Route path='/strokes' element={<StrokeInfoPage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignUpPage />} />

        {/* Dashboard routes */}
        <Route path='/dashboard' element={<Dashboard />} />  {/* Dashboard route */}
        <Route path='/dashboard/weather' element={<Weather />} />
        <Route path='/dashboard/analyzer' element={<Analyzer />} />
        <Route path='/dashboard/blogs' element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
)
