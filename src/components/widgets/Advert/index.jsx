import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { advertimage } from '../../../constants';

export default function index() {
  return (
    <Grid.Column className="Advert">
      <Image src={advertimage} className="AdvertImg" />
    </Grid.Column>
  );
}
