import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionModalContainer from '../modal/session_modal_container';
import SearchContainer from './search_container';

class Header extends React.Component {
  render() {
    const sessionLinks = (currentUser, logout) => {
      if (currentUser) {
        return (
          <div id='session-links'>
            <Link to={`/new-deal`}>Create Deal</Link>
            <Link to={`/users/${currentUser.id}`}>{currentUser.username}</Link>
            <Link to='/' onClick={() => logout()}>Log Out</Link>
          </div>
        );
      } else {
        return (
          <div id='session-links'>
            <SessionModalContainer formType='Log In' />
            <SessionModalContainer formType='Sign Up' />
          </div>
        );
      }
    };

    return (
      <nav id='header'>
        <div id='header-left'>
          <button onClick={() => this.props.router.push('/')}>
            <h1>ShareDeals</h1>
          </button>
        </div>
        <div id='header-middle'>
          <SearchContainer />
        </div>
        <div id='header-right'>
          {sessionLinks(this.props.currentUser, this.props.logout)}
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
