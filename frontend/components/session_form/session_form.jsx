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
    let welcomeMessage, footer, credentialsText,
        emailLabel, emailInput, emailInputBreak;

    if (path === 'signup') {
      welcomeMessage = 'Join ShareDeals';
      credentialsText = 'Username';
      emailLabel = <label htmlFor='email'>Email</label>;
      emailInput = (
          <input
            id='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange('email')} />
      );
      emailInputBreak = <br />;
      footer = (
        <span>{'Already have an account?' }
          <Link to='/login'>Log In</Link>
        </span>
      );
    } else {
      welcomeMessage = 'Welcome to ShareDeals';
      credentialsText = 'Email Address or Username';
      footer = (
        <span>{'Not a member? '}
          <Link to='/signup'>Create an Account</Link>
        </span>
      );
    }

    return (
      <div className='session'>
        <h1>{welcomeMessage}</h1>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>

          <label htmlFor='username'>{credentialsText}</label>
            <input
              id='username'
              type='text'
              value={this.state.username}
              onChange={this.handleChange('username')} />
          <br />

          {emailLabel}
          {emailInput}
          {emailInputBreak}

          <label htmlFor='password'>Password</label>
            <input
              type='password'
              value={this.state.password}
              onChange={this.handleChange('password')} />

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
