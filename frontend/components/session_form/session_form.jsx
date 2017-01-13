import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' , email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul id='session-errors'>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const formType = this.props.formType;
    let credentialsText, emailLabel, emailInput, emailInputBreak;

    if (formType === 'Sign Up') {
      credentialsText = 'Username';
      emailLabel = <label htmlFor='email'>Email</label>;
      emailInput = (
          <input
            id='email'
            type='email'
            required
            value={this.state.email}
            onChange={this.handleChange('email')} />
      );
      emailInputBreak = <br />;
    } else {
      credentialsText = 'Email Address or Username';
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.props.formType}</h1>
        <br />
        {this.renderErrors()}

        <label htmlFor='username'>{credentialsText}</label>
          <input
            id='username'
            type='text'
            required
            value={this.state.username}
            onChange={this.handleChange('username')} />
        <br />
        {emailLabel}
        {emailInput}
        {emailInputBreak}
        <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            required
            value={this.state.password}
            onChange={this.handleChange('password')} />
        <br />
        <input type='submit' value={formType} />
      </form>
    );
  }
}

export default SessionForm;
