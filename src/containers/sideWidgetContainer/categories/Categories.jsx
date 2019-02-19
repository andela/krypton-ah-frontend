import React from 'react';
import { Grid, List, Label } from 'semantic-ui-react';
import Title from '../../../components/sectionHeader';
import Tags from '../../../components/tags';

export default function categories({ category }) {
  return (
    <Grid.Column className="Categories">
      <Title text="Categories" />
      <List divided relaxed>
        <Tags tags={category} />
        <List.Item>
          <Label as="a">more</Label>
        </List.Item>
      </List>
    </Grid.Column>
  );
}
