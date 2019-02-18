import React from 'react';
import { List } from 'semantic-ui-react';
import { categories } from '../../mockData';

export default function Tags() {
  return (
    <div className="category">
      {categories.map(category => (
        <List.Item key={category}>
          <List.Content key={category}>
            <List.Header as="a" key={category}>
              {`#${category}`}
            </List.Header>
          </List.Content>
        </List.Item>
      ))}
    </div>
  );
}
