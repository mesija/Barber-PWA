import React, { useEffect, useState } from 'react';
import './style.scss';
import axios from 'axios';
import _ from 'lodash';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

function Barbers() {
  const [barbers, setBarbers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://api.barber.mesija.net/rest/barber');
      setBarbers(data);
      setLoading(false);
    })();
  }, []);

  if (loading) return null;

  return (
    <div className="page-container barbers">
      <h1>Майстри</h1>
      <div className="list">
        {_.map(_.sortBy(barbers, 'name'), ({ id, name, photo }) => {
          return (
            <Card key={id}>
              <CardMedia component="img" alt={name} height="350" image={photo} title={name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <div className="name">{name}</div>
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Barbers;
