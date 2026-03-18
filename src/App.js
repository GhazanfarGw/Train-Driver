import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Home from "./Home/index";
import About from "./About/index";
// import Course from "./Course/index";
import MockInter from "./Mock Inter/index";
import Faqs from "./FAQs/index";
import Interview from "./Interview Contract/index";
import Preloader from "./Home/Preload";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to mimic content loading
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    // You can replace the above setTimeout with your actual data fetching logic.
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about-us" element={ <About/> } />
          {/* <Route path="/courses" element={ <Course/> } /> */}
          <Route path="/mock-interviews" element={ <MockInter/> } />
          <Route path="/faqs" element={ <Faqs/> } />
          <Route path="/book-now" element={ <Interview/> } />
        </Routes>
      )}
    </>

  )
}

export default App