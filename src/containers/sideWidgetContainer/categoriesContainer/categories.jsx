import React from 'react';
import { Grid, List, Label } from 'semantic-ui-react';
import Title from '../../../components/titleheader/header';
import Tags from '../../../components/tags/tags';

export default function categories() {
  return (
    <fragment>
      <Grid.Column className="Categories">
        <Title text="Categories" />
        <List divided relaxed>
          <Tags />
          <List.Item>
            <Label as="a">more</Label>
          </List.Item>
        </List>
      </Grid.Column>
    </fragment>
  );
}
