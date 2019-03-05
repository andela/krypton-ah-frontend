import React from 'react';
import { Grid, Input, Button } from 'semantic-ui-react';
import Title from '../../../components/sectionHeader';

export default function NewsLetter() {
  return (
    <Grid.Column className="NewsLetter">
      <Title text="NewsLetter" />
      <Input placeholder="Subscribe..." />
      <Button basic color="black">
        Subsrcibe
      </Button>
    </Grid.Column>
  );
}
