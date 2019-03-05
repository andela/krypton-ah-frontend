import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';
import { Link } from 'react-router-dom';
import { Modal } from 'semantic-ui-react';
import SocialIcons from '../SocialComponent';
import ModalDivider from '../ModalDivider';
import RedirectLoader from '../Loader';
import './FormContainer.scss';

const history = createHistory({ forceRefresh: true });


class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ open: false });
    history.push(history.location.pathname);
  }

  render() {
    const { title, baseText, link, formLink, children } = this.props;
    const { open } = this.state;
    return (
      <Fragment>
        <RedirectLoader />
        <Modal size="mini" open={open} onClose={this.handleClose} className="authModal">
          <Modal.Content>
            <h2 className="header headerTitle">{title}</h2>
            <hr className="headerBotton" />
            <Modal.Description>
              <Fragment>{children}</Fragment>
              <ModalDivider text={`or ${title} with`} />
              <SocialIcons />
              <h5 className="baseText">
                {baseText}
              &nbsp;
                <Link to={`/${formLink}`}>
                  {link}
                </Link>
              </h5>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Fragment>

    );
  }
}

ModalComponent.propTypes = {
  title: PropTypes.string,
  baseText: PropTypes.string,
  link: PropTypes.string,
  formLink: PropTypes.string,
  children: PropTypes.node
};

ModalComponent.defaultProps = {
  title: 'sign in',
  baseText: 'Create an account',
  link: 'sign up',
  formLink: 'signin',
  children: null
};

export default ModalComponent;
