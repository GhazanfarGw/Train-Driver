import React from 'react';
import Dashboard from './Dashboard'
import Header from '../Home/header'
import Footer from '../Home/Footer';
import About from './About';
import Courses from './Courses';
import TheseCoures from './TheseCoures';

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