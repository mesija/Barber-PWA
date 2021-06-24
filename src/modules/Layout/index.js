import React from 'react';
import './style.scss';
import { AppBar, Button, Container, Toolbar, Typography } from '@material-ui/core';
import BannerImage from './HomeBanner';
import { LocationOn, Call } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';

function Homepage({ children }) {
  const history = useHistory();
  const { pathname } = useLocation();

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
    </>
  );
}

export default Homepage;
