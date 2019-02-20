import React from 'react';
import { Grid, Image, Card } from 'semantic-ui-react';
import './HomeContainer.scss';
import business from './images/business.png';
import Title from '../../components/sectionHeader';
import { popularArticles } from '../../mockData';

export default function PopularArticles() {
  return (
    <React.Fragment>
      <Title text="Popular" />
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid container className="reveal" columns={2}>
            {popularArticles.map(popularArticle => (
              <Grid.Column key={popularArticle.title}>
                <Card className="description">
                  <p className="popular title">{popularArticle.title}</p>
                  {popularArticle.description}
                </Card>
                <Image src={business} />
              </Grid.Column>
            ))}
          </Grid>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
}
