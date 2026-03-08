import React from 'react';
import Dashboard from './Dashboard'
import Header from '../Home/header'
import Footer from '../Home/Footer';
import About from './About';
import Liftside from './Liftside';

function index() {
  return (
    <>
        <Header/>
        <Dashboard/>
        <About/>
        <Liftside/>
        <Footer/>
        

    </>
  )
}

export default index