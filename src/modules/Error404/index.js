import React from 'react';
import './style.scss';
import { useHistory, useLocation } from 'react-router';
import { Button } from '@material-ui/core';
import conf from '../../conf';
import { Helmet } from 'react-helmet';

function Error404() {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <div className="page-container error404">
      <Helmet>
        <title>{`Сторінка не знайдена | ${conf.name}`}</title>
      </Helmet>
      <h1>Сторінка не знайдена</h1>
      <div className="description">
        <p>Запитану URL-адресу {pathname} не знайдено на цьому сервері.</p>
        <p>Це все, що ми знаємо.</p>
        <div className="go-to-home">
          <Button variant="outlined" color="inherit" onClick={() => history.push('/')}>
            На головну
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Error404;
