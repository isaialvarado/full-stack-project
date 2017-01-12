import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

class SessionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      formType: this.props.formType
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleFormChange(formType) {
    return () => {
      this.props.receiveErrors();
      this.setState({ formType });
    };
  }

  render() {
    let endMessage;

    if (this.state.formType === 'Log In') {
      endMessage = (
        <span>{'Not a member? '}
          <button onClick={this.handleFormChange('Sign Up')}>Create an Account</button>
        </span>
      );
    } else {
      endMessage = (
        <span>{'Already have an account? ' }
          <button onClick={this.handleFormChange('Log In')}>Log In</button>
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
        width: '400px'
      }
    };

    return (

      <div>
        <button onClick={this.handleOpenModal}>{this.props.formType}</button>
        <Modal
          style={customStyle}
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
          isOpen={this.state.showModal}
          contentLabel="Share Deals Log In"
        >
        <div className='session'>
          <h1>{this.state.formType}</h1>
          <br />
          <SessionFormContainer formType={this.state.formType} />
          <br/ >
          {endMessage}
        </div>
        </Modal>
      </div>
    );
  }
}

export default SessionModal;
