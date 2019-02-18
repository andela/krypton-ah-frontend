import React from 'react';
import { Tab, Container } from 'semantic-ui-react';
import Editor from '../Editor';

const panes = [
  {
    menuItem: 'Text Entry',
    render: function TabPane() {
      return (
        <Tab.Pane attached={false}>
          <Editor />
        </Tab.Pane>
      );
    }
  }
];

function CreateArticleTab() {
  return (
    <Container>
      <Tab menu={{ secondary: true }} panes={panes} />
    </Container>
  );
}


export default CreateArticleTab;
