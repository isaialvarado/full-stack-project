import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const date = new Date(this.props.currentUser.created_at);

    return (
      <div className='profile'>
        <h1>Profile</h1>
        <h3>{`Username: ${this.props.currentUser.username}`}</h3>
        <h3>{`Joined: ${date.toLocaleDateString()}`}</h3>
        <h1>Deals Shared</h1>
      </div>
    );
  }
}

export default UserProfile;
