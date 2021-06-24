import React, { useEffect, useState } from 'react';
import './style.scss';
import conf from '../../conf';
import { Helmet } from 'react-helmet';
import { magicGetter } from '../../actions';
import _ from 'lodash';
import isMobilePhone from 'validator/lib/isMobilePhone';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import moment from 'moment';
import axios from 'axios';

function Booking() {
  const [services, setServices] = useState([]);
  const [barbers, setBarbers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formDate, setFormDate] = useState('');
  const [number, setNumber] = useState('');
  const [barber, setBarber] = useState();
  const [service, setService] = useState(0);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      setBarbers(await magicGetter('https://api.barber.mesija.net/rest/barber'));
      setServices(await magicGetter('https://api.barber.mesija.net/rest/service'));
      setLoading(false);
    })();
  }, []);

  if (loading) return null;

  const handleSubmit = async () => {
    if (!isMobilePhone(number, 'uk-UA')) return setError('Не вірний телефон');
    setError(undefined);
    const data = new FormData();
    data.append('phoneNumber', number);
    data.append('serviceId', String(service));
    data.append('date', formDate);
    data.append('barberId', String(barber));
    await axios({
      method: 'POST',
      url: 'https://api.barber.mesija.net/rest/booking',
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    setBarbers(await magicGetter('https://api.barber.mesija.net/rest/barber'));
    setBarber(0);
  };

  return (
    <div className="page-container booking">
      <Helmet>
        <title>{`Онлайн запис | ${conf.name}`}</title>
      </Helmet>
      <h1>Онлайн запис</h1>
      <div className="list">
        {_.map(_.sortBy(barbers, 'name'), ({ id, name, photo, available_dates: availableDates }) => {
          const dates = _.first(availableDates);
          const firstDate = moment(_.first(_.keys(dates)));
          return (
            <Card key={id}>
              <CardMedia component="img" alt={name} height="250" image={photo} title={name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <div className="name">{name}</div>
                  <div className="date">
                    вільний {firstDate.isBefore(moment().endOf('day')) ? 'сьогодні' : firstDate.format('DD MMMM')}
                  </div>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Доступні для запису години:
                </Typography>
              </CardContent>
              <CardActions>
                {_.map(_.keys(dates), (dateString) => {
                  const date = moment(dateString);
                  return (
                    <Button
                      key={dateString}
                      size="small"
                      color="inherit"
                      variant="outlined"
                      disabled={!dates[dateString]}
                      onClick={() => {
                        setBarber(id);
                        setFormDate(dateString);
                        setService(_.first(services)?.id);
                      }}
                    >
                      {date.format('HH:mm')}
                    </Button>
                  );
                })}
              </CardActions>
              <div className={barber === id ? 'form-modal active' : 'form-modal'}>
                {barber === id && (
                  <div className="box">
                    <h2>{name}</h2>
                    <div className="forms">
                      <FormControl variant="filled">
                        <InputLabel id="demo-simple-select-outlined-label">Час</InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={formDate}
                          onChange={(event) => setFormDate(event.target.value)}
                          label="Час"
                        >
                          {_.map(_.keys(dates), (dateString) => {
                            const date = moment(dateString);
                            return (
                              <MenuItem key={dateString} value={dateString} disabled={!dates[dateString]}>
                                {date.format('DD MMMM HH:mm')}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                      <FormControl variant="filled">
                        <InputLabel id="demo-simple-select-outlined-label">Послуга</InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={service}
                          onChange={(event) => setService(event.target.value)}
                          label="Послуга"
                        >
                          {_.map(services, ({ id, name, price }) => {
                            return (
                              <MenuItem key={id} value={id}>
                                {name} ({price} грн.)
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                      <TextField
                        id="filled-basic"
                        label="Телефон"
                        variant="filled"
                        value={number}
                        type="tel"
                        error={!!error}
                        helperText={error}
                        onChange={(event) => setNumber(String(event.target.value).replace(/[^\d]+/g, ''))}
                      />
                      <div className="buttons">
                        <Button onClick={() => setBarber(0)}>Відмінити</Button>
                        <div className="submit">
                          <Button color="primary" variant="outlined" onClick={handleSubmit}>
                            Забронювати
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Booking;
