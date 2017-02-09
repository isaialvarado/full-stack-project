import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionModalContainer from '../modal/session_modal_container';
import SearchContainer from '../search/search_container';

class Header extends React.Component {
  render() {
    const sessionLinks = (currentUser, logout, showModal) => {
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
            <button onClick={() => showModal({ showModal: true, formType: 'Log In' })}>
              Log In
            </button>
            <button onClick={() => showModal({ showModal: true, formType: 'Sign Up' })}>
              Sign Up
            </button>
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
          <SearchContainer currentUser={this.props.currentUser}/>
        </div>
        <div id='header-right'>
          {sessionLinks(
            this.props.currentUser,
            this.props.logout,
            this.props.receiveSessionModal
          )}
        </div>
        <SessionModalContainer />
      </nav>
    );
  }
}

export default withRouter(Header);
