import React, { useEffect, useState } from 'react';
import './style.scss';
import _ from 'lodash';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { magicGetter } from '../../actions';
import { Helmet } from 'react-helmet';
import conf from '../../conf';

function Barbers({ asModule }) {
  const [barbers, setBarbers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setBarbers(await magicGetter('https://api.barber.mesija.net/rest/barber'));
      setLoading(false);
    })();
  }, []);

  if (loading) return null;

  return (
    <div className="page-container barbers">
      {!asModule && (
        <Helmet>
          <title>{`Майстри | ${conf.name}`}</title>
        </Helmet>
      )}
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
