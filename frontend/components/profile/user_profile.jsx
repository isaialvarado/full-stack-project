import React from 'react';
import { Link } from 'react-router';

class UserProfile extends React.Component {
  componentWillMount() {
    this.props.fetchProfile(this.props.params.userId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.userId !== newProps.params.userId) {
      this.props.fetchProfile(newProps.params.userId);
    }
  }

  render () {
    const date = new Date(this.props.userProfile.createdAt);
    const deals = this.props.userProfile.deals.map(deal => (
      <li
        className='profile-deal'
        key={deal.id}>
        <Link to={`/${deal.id}`}>{deal.title}</Link>
        <span>Created: {deal.createdAt}</span>
      </li>
    ));

    return (
      <div className='profile'>
        <h1>Profile</h1>
        <h3>{`Username: ${this.props.userProfile.username}`}</h3>
        <h3>{`Joined: ${date.toLocaleDateString()}`}</h3>
        <h1>Deals Shared</h1>
        <ul>
          {deals}
        </ul>
      </div>
    );
  }
}

export default UserProfile;
