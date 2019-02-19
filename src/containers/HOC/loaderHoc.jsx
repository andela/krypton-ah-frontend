import React, { Component } from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

const HomeloaderHOC = WrappedComponent => class loaderHOC extends Component {
  componentWillMount() {}

  render() {
    const { featuredarticles, trendingarticles } = this.props;
    return (featuredarticles || trendingarticles) === '' ? (
      <Segment className="homeloader">
        <Dimmer active inverted>
          <Loader size="medium">Loading</Loader>
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
      </Segment>
    ) : (
      <WrappedComponent {...this.props} />
    );
  }
};

export default HomeloaderHOC;
