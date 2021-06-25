import React, { useEffect } from 'react';
import './style.scss';
import { AppBar, Button, Container, Snackbar, Toolbar, Typography } from '@material-ui/core';
import BannerImage from './HomeBanner';
import { LocationOn, Call } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';
import { Alert } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function Homepage({ children }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const { toast, status, awaiter } = useSelector((state) => ({
    toast: state.app.toast,
    status: state.app.status,
    awaiter: state.app.awaiter,
  }));
  const setToast = (value) => dispatch({ type: 'APP_SET_TOAST', value });
  const setAwaiter = (value) => dispatch({ type: 'APP_SET_AWAITER', value });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setToast(false);
  };

  useEffect(() => {
    (async () => {
      if (status && awaiter) {
        try {
          const data = new FormData();
          _.forEach(JSON.parse(localStorage.getItem('lazyInsert')), (value, key) => {
            data.append(key, value);
          });
          await axios({
            method: 'POST',
            url: 'https://api.barber.mesija.net/rest/booking',
            data: data,
            headers: { 'Content-Type': 'multipart/form-data' },
          });
          setToast({
            severity: 'success',
            content: 'Успішно заброньовано',
          });
          setAwaiter(false);
          localStorage.removeItem('lazyInsert');
        } catch (e) {}
      }
    })();
  }, [status]);

  return (
    <>
      <Container maxWidth="lg">
        <div className="home-banner">
          <BannerImage />
          <div className="right">
            <div className="title">Можливо найвусатіший барбер в світі!</div>
            <div className="info">
              <div className="address">
                <a href="https://goo.gl/maps/pebvNxVD4oS51EMdA" target="_blank" rel="noreferrer">
                  <LocationOn /> ВУЛ. ШАШКЕВИЧА, 3
                </a>
              </div>
              <div className="city">м. Тернопіль</div>
              <div className="tell">
                <a href="tel:+380980837376">
                  <Call /> (098) 083-73-76
                </a>
              </div>
              <div className="hours">Щодня 10:00 - 21:00</div>
            </div>
          </div>
        </div>
        <AppBar position="static">
          <Toolbar>
            <Button
              color={pathname === '/' ? 'primary' : 'inherit'}
              className="logo-box"
              onClick={() => history.push('/')}
            >
              <svg x="0px" y="0px" viewBox="0 0 300 300" className="logo">
                <g id="g10" transform="matrix(1.1963147,0,0,1.1963147,-491.75634,-55.420115)">
                  <path
                    d="m 590.5,138.8 c -26.8,-18 -49,3.1 -53.8,5.9 -4.8,-2.8 -27.1,-23.9 -53.8,-5.9 -33.8,22.8 -47.7,19.9 -70.5,-10.2 0,0 -6.1,98.4 93.3,81.2 14.8,-2.6 29.1,-16.4 31,-29.9 1.9,13.5 16.2,27.3 31,29.9 99.4,17.1 93.3,-81.2 93.3,-81.2 -22.8,30.2 -36.7,33 -70.5,10.2 z"
                    id="path8"
                  />
                </g>
              </svg>
              <Typography variant="h6">Домашня</Typography>
            </Button>
            <div />
            <div className="right-buttons">
              <div className="online">
                <Button
                  variant="outlined"
                  color={pathname === '/booking' ? 'primary' : 'inherit'}
                  onClick={() => history.push('/booking')}
                >
                  ОНЛАЙН ЗАПИС
                </Button>
              </div>
              <Button
                color={pathname === '/services' ? 'primary' : 'inherit'}
                onClick={() => history.push('/services')}
              >
                Послуги
              </Button>
              <Button color={pathname === '/barbers' ? 'primary' : 'inherit'} onClick={() => history.push('/barbers')}>
                Майстри
              </Button>
              <Button
                color={pathname === '/contacts' ? 'primary' : 'inherit'}
                onClick={() => history.push('/contacts')}
              >
                Контакти
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        {children}
      </Container>
      <footer>
        <Container maxWidth="lg">
          <div className="copy">Вусатий барбер &copy; 2021 - Дипломний проект Рудавського Романа.</div>
          <div className="captcha">
            Уся інформація на сайті не відповідає дійсності і розміщена виключно в навчальних цілях.
          </div>
        </Container>
      </footer>
      <Snackbar open={!!toast} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} elevation={6} variant="filled" severity={toast?.severity}>
          {toast?.content}
        </Alert>
      </Snackbar>
      <div className={awaiter ? 'awaiter active' : 'awaiter'}>Запис в черзі. Очікуємо на підключення.</div>
    </>
  );
}

export default Homepage;
