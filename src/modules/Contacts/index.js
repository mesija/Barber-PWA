import React from 'react';
import './style.scss';
import { Email } from '@material-ui/icons';

function Contacts() {
  return (
    <div className="page-container contact">
      <h1>Контакти</h1>
      <h2 className="email">
        <a href="mailto:contact@barber.mesija.net" target="_blank" rel="noreferrer">
          <Email />
          <span>contact@barber.mesija.net</span>
        </a>
      </h2>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1294.2791912266605!2d25.58883394489735!3d49.549486537382926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473036b6a738335d%3A0x346d73046555860c!2z0LLRg9C70LjRhtGPINCo0LDRiNC60LXQstC40YfQsCwgMywg0KLQtdGA0L3QvtC_0ZbQu9GMLCDQotC10YDQvdC-0L_RltC70YzRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNDYwMDI!5e0!3m2!1suk!2sua!4v1624552105322!5m2!1suk!2sua"
          width="100%"
          height="600px"
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Contacts;
