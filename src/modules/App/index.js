import React from 'react';
import './style.scss';
import Services from '../Services';
import Barbers from '../Barbers';
import About from '../About';

function Homepage() {
  return (
    <div className="home-box">
      <About />
      <Services />
      <Barbers />
    </div>
  );
}

export default Homepage;
