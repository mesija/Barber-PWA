import React from 'react';
import './style.scss';
import Services from '../Services';
import Barbers from '../Barbers';
import About from '../About';
import conf from '../../conf';
import { Helmet } from 'react-helmet';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

function Homepage() {
  const history = useHistory();
  return (
    <div className="home-box">
      <Helmet>
        <title>{`Домашня | ${conf.name}`}</title>
      </Helmet>
      <About asModule={true} />
      <Services asModule={true} />
      <Barbers asModule={true} />
      <div style={{ textAlign: 'center', color: '#ef2d2d' }}>
        <Button variant="outlined" color="inherit" onClick={() => history.push('/booking')}>
          ОНЛАЙН ЗАПИС
        </Button>
      </div>
    </div>
  );
}

export default Homepage;
