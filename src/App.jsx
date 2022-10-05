import React from 'react';
// import 'modules/bootstrap/dist/css/bootstrap.min.cs';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './views/Home';
import Contact from './views/Contact';
import Technology from './views/Technology';
import UI from './views/UI';
import Footer from './views/Footer';

export default () => {
  return (
    <div className='container'>
        <BrowserRouter>
          <Navbar />
          <Home />
          <Technology />
          <UI />
          <Contact />
          <Footer />
        </BrowserRouter>
    </div>
  );
}