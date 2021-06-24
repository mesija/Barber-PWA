import React from 'react';
import './style.scss';
import conf from '../../conf';
import { Helmet } from 'react-helmet';

function Booking() {
  return (
    <div className="page-container error404">
      <Helmet>
        <title>{`Онлайн запис | ${conf.name}`}</title>
      </Helmet>
      <h1>Онлайн запис</h1>
      <div className="form">
        <p></p>
      </div>
    </div>
  );
}

export default Booking;
