import React from 'react';
import { Grid, Image, Card } from 'semantic-ui-react';
import './HomeContainer.scss';
import business from './images/business.png';
import Title from '../../components/titleheader/header';
import FeaturedWidget from '../../components/widgets/featuredwidget';
import ArticlesIcons from '../../components/widgets/articleswidgets/reactionWidgets';
import Carousel from '../Carouselcontainer/index';
import Sidewidget from '../sideWidgetContainer/index';
import { items } from '../../constants';

export default function MainContainer() {
  return (
    <div className="Main">
      <Grid className="content" divided="vertically">
        <Grid.Row columns={1}>
          <Grid.Column>
            <Carousel />
          </Grid.Column>
          <Grid.Column className="second_grid">
            <Title text="featured" />
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column className="rightGrid">
                  <Card image={business} header="Elliot Baker" items={items} />
                  <Card className="description">
                    {items[0].description}
                    <ArticlesIcons />
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <FeaturedWidget
                    className="featured-widget"
                    description={items[0].shortdescription}
                    title={items[0].content}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
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
                  <Grid.Column>
                    <Card className="description">
                      <p className="Popular title">{items[0].title}</p>
                      {items[0].description}
                    </Card>
                    <Image src={business} />
                  </Grid.Column>
                  <Grid.Column>
                    <Card className="description">
                      <p className="Popular title">{items[0].title}</p>
                      {items[0].description}
                    </Card>
                    <Image src={business} />
                  </Grid.Column>
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
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid className="side" divided="vertically">
        <Sidewidget />
      </Grid>
    </div>
  );
}
