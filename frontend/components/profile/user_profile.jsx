import React from 'react';
import { Link } from 'react-router';
import { formatDate } from '../../util/date_api_util';

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
      <tr
        key={deal.id}>
        <td><span>{new Date(deal.createdAt).toLocaleDateString()}</span></td>
        <td><Link to={`/${deal.id}`}>{deal.title}</Link></td>
      </tr>
    ));

    return (
      <div className='profile'>
        <h1>Profile</h1>
        <div className='profile-user-data'>
          <h3>{`Username: ${this.props.userProfile.username}`}</h3>
          <h3>{`Joined: ${date.toLocaleDateString()}`}</h3>
        </div>
        <h1>Deals Shared</h1>
        <table className='profile-deals'>
          <tr>
            <th><span>Date</span></th>
            <th><span>Title</span></th>
          </tr>
          {deals}
        </table>
      </div>
    );
  }
}

export default UserProfile;
