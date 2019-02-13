import React from 'react';
import { Grid, Image, Card } from 'semantic-ui-react';
import './HomeContainer.scss';
import business from './images/business.png';
import Title from '../../components/sectionHeader';
import { popularArticles } from '../../constants';

export default function PopularArticles() {
  return (
    <div>
      <Title text="Popular" />
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid container className="reveal" columns={2}>
            {popularArticles.map(popularArticle => (
              <Grid.Column>
                <Card className="description">
                  <p className="Popular title">{popularArticle.title}</p>
                  {popularArticle.description}
                </Card>
                <Image src={business} />
              </Grid.Column>
            ))}
          </Grid>
        </Grid.Row>
      </Grid>
    </div>
  );
}
