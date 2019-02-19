import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Card } from 'semantic-ui-react';
import './HomeContainer.scss';
import Title from '../../components/sectionHeader';

export default function PopularArticles({ popular }) {
  if (!popular) {
    return <div>Loading!!!!!!!</div>;
  }
  return (
    <React.Fragment>
      <Title text="Popular" />
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid container className="reveal" columns={2}>
            {popular.data.map(popularArticle => (
              <Grid.Column key={popularArticle.id}>
                <Card className="description">
                  <Link replace={false} to={`/articles/${popularArticle.id}`}>
                    <p className="popular title">{popularArticle.title}</p>
                  </Link>
                  {popularArticle.description}
                </Card>
                <Image src={popularArticle.featuredImageUrl} />
              </Grid.Column>
            ))}
          </Grid>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
}
