import React from 'react';
import PropTypes from 'prop-types';
import { Grid, List, Label } from 'semantic-ui-react';
import Tags from '../../../components/tags';

export default function categories({ category }) {
  return (
    <Grid.Column className="Categories">
      <List divided relaxed>
        <Tags tags={category} />
        <List.Item>
          <Label as="a">more</Label>
        </List.Item>
      </List>
    </Grid.Column>
  );
}

categories.defaultProps = {
  category: []
};

categories.propTypes = {
  category: PropTypes.array
};
