import React from 'react';
import { Link } from 'react-router-dom';
import {
  Modal,
  Button,
} from 'semantic-ui-react';
import SocialIcons from '../SocialComponent';
import ModalDivider from '../ModalDivider';
import './FormContainer.scss';

function ModalComponent({
  title,
  divider,
  baseText,
  link,
  children,
}) {
  return (
    <div>
      <Modal
      className="ahModal"
        size="tiny"
        trigger={(
          <Button className="ui button black">
          Write An Article
          </Button>
        )}>
        <Modal.Content className="ah-content">
          <h2 className="header">
            {title}
          </h2>
          <hr />
          <Modal.Description>
            {children}
            <ModalDivider text={`or ${divider} with`} />
            <SocialIcons />
            <h5 className="create-account">
              {baseText}
              {' '}
              <span>
                <Link to="/Home" color="red">
                  {link}
                </Link>
              </span>
            </h5>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
}

export default ModalComponent;
