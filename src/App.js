import { Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';

import Home from "./Home/index";
import About from "./About/index";
import Course from "./Course/index";
import MockInter from "./Mock Inter/index";
import Faqs from "./FAQs/index";
import Interview from "./Interview Contract/index";
import Preloader from "./Home/Preload";
import ScrollToTop from "./Home/ScrollToTop";
import PrivacyPolicy from "./Privacy Poilcy/Index";
import Terms from "./Terms and Conditions/Index";
import RefundPolicy from "./Refund Policy/Index";
import CookiePolicy from "./Cookie Policy/Index";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // current route location

    useEffect(() => {
    // جب بھی route change ہو، loading true کریں
    setLoading(true);

    // simulate data fetching or preload
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // loading duration adjust کریں

    return () => clearTimeout(timer); // cleanup
  }, [location.pathname]); // dependency: ہر بار route change پر trigger


  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about-us" element={ <About/> } />
          <Route path="/courses" element={ <Course/> } />
          <Route path="/mock-interviews" element={ <MockInter/> } />
          <Route path="/faqs" element={ <Faqs/> } />
          <Route path="/buy-now" element={ <Interview/> } />
          <Route path="/privacy-policy" element={ <PrivacyPolicy/> } />
          <Route path="/terms-and-conditions" element={ <Terms/> } />
          <Route path="/refund-policy" element={ <RefundPolicy/> } />
          <Route path="/cookie-policy" element={ <CookiePolicy/> } /> 
        </Routes>
        </>
      )}
    </>
  )
}

export default App
