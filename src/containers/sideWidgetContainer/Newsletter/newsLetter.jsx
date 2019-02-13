import React from 'react';
import { Grid, Input, Button } from 'semantic-ui-react';

export default function newsLetter() {
  return (
    <fragment>
      <Grid.Column className="NewsLetter">
        <Title text="NewsLetter" />
        <Input placeholder="Search..." />
        <Button basic color="black">
          Submit
        </Button>
      </Grid.Column>
    </fragment>
  );
}
