import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Technology from './components/Technology';
import UI from './components/UI';
import Footer from './components/Footer';

export default () => {
  return (
    <div className='container'>
      <Navbar />
      <Home />
      <Technology />
      <UI />
      <Contact />
      <Footer />
    </div>
  );
}