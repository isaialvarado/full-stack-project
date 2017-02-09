import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

class SessionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.showModal,
      formType: this.props.formType
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.props.clearErrors();
    this.setState({
      showModal: newProps.showModal,
      formType: newProps.formType
    });
  }

  handleOpenModal() {
    this.props.receiveSessionModal({ showModal: true });
  }

  handleCloseModal() {
    this.props.receiveSessionModal({ showModal: false });
  }

  handleFormChange(formType) {
    return () => {
      this.props.clearErrors();
      this.setState({ formType });
    };
  }

  render() {
    let toggleFormType;

    if (this.state.formType === 'Log In') {
      toggleFormType = (
        <span>{'Not a member? '}
          <button id='toggle-formType-button' onClick={this.handleFormChange('Sign Up')}>Create an Account</button>
        </span>
      );
    } else {
      toggleFormType = (
        <span>{'Already have an account? ' }
          <button id='toggle-formType-button' onClick={this.handleFormChange('Log In')}>Log In</button>
        </span>
      );
    }

    const customStyle = {
      overlay: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(130, 130, 130, 0.75)'
      },
      content: {
        position: 'null',
        top: 'null',
        left: 'null',
        right: 'null',
        bottom: 'null',
        backgroundColor: 'white',
        borderRadius: '9px',
        width: '450px'
      }
    };

    return (
      <div>
        <Modal
          style={customStyle}
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
          isOpen={this.state.showModal}
          contentLabel="Share Deals Log In"
        >
        <div id='session-modal-content'>
          <SessionFormContainer formType={this.state.formType} />
          <br/ >
          <input
            id='guest-login-button'
            type='submit'
            onClick={() => this.props.loginGuest({ username: 'Guest', password: 'password' })}
            value='Guest Log In' />
          <br/ >
          {toggleFormType}
        </div>
        </Modal>
      </div>
    );
  }
}

export default SessionModal;
