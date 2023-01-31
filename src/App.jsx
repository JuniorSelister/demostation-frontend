import React from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Technology from './components/Technology';
import Design from './components/Design';
import Playground from './components/Playground';
import Footer from './components/Footer';

export default () => {
  return (
    <div className='container'>
      <Header />
      <Home />
      <Technology />
      <Design />
      <Playground />
      <Contact />
      <Footer />
    </div>
  );
}