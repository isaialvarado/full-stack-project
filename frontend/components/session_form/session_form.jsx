import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' , email: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  handleChange(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user).then(() => (
      this.setState = { username: '', password: '' , email: ''}
    ));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const path = this.props.pathname;
    let welcomeMessage, footer, credentialsText, emailInput, emailInputBreak;

    if (path === 'signup') {
      welcomeMessage = 'Join ShareDeals';
      credentialsText = 'Username';
      emailInput = (
        <label>Email
          <input
            type='text'
            value={this.state.email}
            onChange={this.handleChange('email')} />
        </label>
      );
      emailInputBreak = <br />;
      footer = (
        <span>Already have an account?
          <Link to='/login'>Log In</Link>
        </span>
      );
    } else {
      welcomeMessage = 'Welcome to ShareDeals';
      credentialsText = 'Email Address or Username';
      footer = (
        <span>Not a member?
          <Link to='/signup'>Create an Account</Link>
        </span>
      );
    }

    return (
      <div>
        <span>{welcomeMessage}</span>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>

          <label>{credentialsText}
            <input
              type='text'
              value={this.state.username}
              onChange={this.handleChange('username')} />
          </label>

          <br />

          {emailInput}
          {emailInputBreak}

          <label>Password
            <input
              type='text'
              value={this.state.password}
              onChange={this.handleChange('password')} />
          </label>

          <br />

          <input type='submit' value='submit' />
          <br />
          {footer}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
