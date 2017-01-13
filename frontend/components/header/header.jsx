import React from 'react';
import { Link } from 'react-router';
import SessionModalContainer from '../modal/session_modal_container';

const Header = ({ currentUser, logout }) => (
  <nav id='header'>
    <div id='header-left'>
      <h1>ShareDeals</h1>
    </div>
    <div id='header-middle'>
      <input id='search' type='search' placeholder='  Search deals' />
    </div>
    <div id='header-right'>
      {sessionLinks(currentUser, logout)}
    </div>
  </nav>
);

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

export default Header;
