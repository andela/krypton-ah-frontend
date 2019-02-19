import React from 'react';
import { List } from 'semantic-ui-react';
import Loader from '../../containers/HOC/comonentLoader';

export default function Tags({ tags, type }) {
  if (!tags) {
    return <Loader />;
  }
  if (type) {
    return (
      <div className="category">
        {tags.data.map(category => (
          <List.Item key={category.id}>
            <List.Content>
              <List.Header as="a">{`#${category}`}</List.Header>
            </List.Content>
          </List.Item>
        ))}
      </div>
    );
  }
  return (
    <div className="category">
      {tags.data.map(category => (
        <List.Item key={category.id}>
          <List.Content>
            <List.Header as="a">{category.category}</List.Header>
          </List.Content>
        </List.Item>
      ))}
    </div>
  );
}
