import React from 'react';
import { Grid, Image, Card } from 'semantic-ui-react';
import './HomeContainer.scss';
import business from './images/business.png';
import Title from '../../components/titleheader/header';
import { items } from '../../constants';

export default function popularArticles() {
  for (let i = 0; i < 4; i += 1) {
    return (
      <fragement>
        <Title text="Popular" />
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid container className="reveal" columns={2}>
              <Grid.Column>
                <Card className="description">
                  <p className="Popular title">{items[0].title}</p>
                  {items[0].description}
                </Card>
                <Image src={business} />
              </Grid.Column>
            </Grid>
          </Grid.Row>
        </Grid>
      </fragement>
    );
  }
}
