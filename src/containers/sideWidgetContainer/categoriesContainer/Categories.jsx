import React from 'react';
import { Grid, List, Label } from 'semantic-ui-react';
import Title from '../../../components/sectionHeader';
import Tags from '../../../components/tags';

export default function categories() {
  return (
    <div>
      <Grid.Column className="Categories">
        <Title text="Categories" />
        <List divided relaxed>
          <Tags />
          <List.Item>
            <Label as="a">more</Label>
          </List.Item>
        </List>
      </Grid.Column>
    </div>
  );
}
