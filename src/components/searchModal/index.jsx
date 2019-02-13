import React from 'react';
import { Modal, Icon, Input } from 'semantic-ui-react';

export default function index() {
  return (
    <div>
      <Modal
        trigger={<Icon search="true" name="search" size="large" />}
        closeIcon
      >
        <Modal.Content>
          <Input
            size="massive"
            icon="search"
            placeholder="Search and hit enter..."
          />
        </Modal.Content>
        <Modal.Actions>
          <p>Hit enter to search</p>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
