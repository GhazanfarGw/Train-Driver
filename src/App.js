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

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // current route location

    useEffect(() => {
    setLoading(true);

    // simulate data fetching or preload
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // loading duration adjust

    return () => clearTimeout(timer); // cleanup
  }, [location.pathname]);

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
        </Routes>
        </>
      )}
    </>
  )
}

export default App
