import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

class ExampleApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      formType: this.props.formType
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleFormChange (formType) {
    return () => this.setState({ formType });
  }

  render () {
    let welcomeMessage, endMessage;

    if (this.state.formType === 'Log In') {
      welcomeMessage = 'Welcome to ShareDeals';
      endMessage = (
        <span>{'Not a member? '}
          <button onClick={this.handleFormChange('Sign Up')}>Create an Account</button>
        </span>
      );
    } else {
      welcomeMessage = 'Join ShareDeals';
      endMessage = (
        <span>{'Already have an account? ' }
          <button onClick={this.handleFormChange('Log In')}>Log In</button>
        </span>
      );
    }

    return (

      <div>
        <button onClick={this.handleOpenModal}>{this.props.formType}</button>
        <Modal
          className="session-modal"
          overlayClassName="session-overlay"
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
        <div className='session'>
          <h1>{welcomeMessage}</h1>
          <br />
          <SessionFormContainer formType={this.state.formType}/>
          <br/ >
          {endMessage}
          <br />
          <button onClick={this.handleCloseModal}>Close</button>
        </div>
        </Modal>
      </div>
    );
  }
}

export default ExampleApp;

// const props = {};
//
// ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))
