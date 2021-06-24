import React, { useEffect, useState } from 'react';
import './style.scss';
import _ from 'lodash';
import { Card, CardContent, Typography } from '@material-ui/core';
import { magicGetter } from '../../actions';
import conf from '../../conf';
import { Helmet } from 'react-helmet';

function Services({ asModule }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setServices(await magicGetter('https://api.barber.mesija.net/rest/service'));
      setLoading(false);
    })();
  }, []);

  if (loading) return null;

  return (
    <div className="page-container services">
      {!asModule && (
        <Helmet>
          <title>{`Послуги | ${conf.name}`}</title>
        </Helmet>
      )}
      <h1>Послуги</h1>
      <div className="list">
        {_.map(_.sortBy(services, 'name'), ({ id, name, description, price }) => {
          return (
            <Card key={id}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <div className="name">{name}</div>
                  <div className="price">{price} грн.</div>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {description}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
