import React, { useEffect, useState } from 'react';
import './style.scss';
import axios from 'axios';
import _ from 'lodash';
import { Card, CardContent, Typography } from '@material-ui/core';

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://api.barber.mesija.net/rest/service');
      setServices(data);
      setLoading(false);
    })();
  }, []);

  if (loading) return null;

  return (
    <div className="page-container services">
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
