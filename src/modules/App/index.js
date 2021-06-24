import React from 'react';
import './style.scss';
import Services from '../Services';
import Barbers from '../Barbers';
import About from '../About';
import conf from '../../conf';
import { Helmet } from 'react-helmet';

function Homepage() {
  return (
    <div className="home-box">
      <Helmet>
        <title>{`Домашня | ${conf.name}`}</title>
      </Helmet>
      <About asModule={true} />
      <Services asModule={true} />
      <Barbers asModule={true} />
    </div>
  );
}

export default Homepage;
