import React from 'react';
import { Link } from 'react-router';
import ExampleApp from '../modal/session_modal';

const sessionLinks = (currentUser, logout) => {
  if (currentUser) {
    return (
      <div className='session-links'>
        <Link to={`/users/${currentUser.id}`}>{currentUser.username}</Link>
        <Link to='/' onClick={() => logout()}>Log Out</Link>
      </div>
    );
  } else {
    return (
      <div className='session-links'>
        <ExampleApp formType='Log In' />
        <ExampleApp formType='Sign Up' />
      </div>
    );
  }
};

const Header = ({ currentUser, logout }) => (
  <nav className='header'>
    <div className='header-left'>
      <h1>ShareDeals</h1>
    </div>
    <div className='header-right'>
      <input className='search' type='search' placeholder='  Search deals' />
      {sessionLinks(currentUser, logout)}
    </div>
  </nav>
);

export default Header;
