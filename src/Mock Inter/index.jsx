import React from 'react';
import Dashboard from './Dashboard'
import Header from '../Home/header'
import Footer from '../Home/Footer';
import About from './MockInterviewService';
import Courses from './InterviewPreparation';
import TheseCoures from './WhyUseMockInterview';

function index() {
  return (
    <>
        <Header/>
        <Dashboard/>
        <About/>
        <Courses/>
        <TheseCoures/>
        <Footer/>
        

    </>
  )
}

export default index