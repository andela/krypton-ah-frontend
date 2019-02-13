import React from 'react';
import { List } from 'semantic-ui-react';
import { categories } from '../../constants';

export default function tags() {
  return categories.forEach(category => (
    <fragment>
      <List className="tags" divided relaxed>
        <List.Item>
          <List.Content>
            <List.Header as="a">{category}</List.Header>
          </List.Content>
        </List.Item>
      </List>
    </fragment>
  ));
}
