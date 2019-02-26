import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Grid, Image, Card } from 'semantic-ui-react';
import './HomeContainer.scss';
import Loader from '../loaders/componentLoader';

export default function PopularArticles({ popular }) {
  if (!popular) {
    return <Loader />;
  }
  popular.splice(4);
  return (
    <React.Fragment>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid container className="reveal" columns={2}>
            {popular.map(popularArticle => (
              <Grid.Column key={popularArticle.id}>
                <Card className="description">
                  <Link replace={false} to={`/article/${popularArticle.id}`}>
                    <p className="popular title">{popularArticle.title}</p>
                  </Link>
                  <p className="revealDescription">{popularArticle.description}</p>
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

PopularArticles.defaultProps = {
  popular: []
};

PopularArticles.propTypes = {
  popular: PropTypes.string
};
