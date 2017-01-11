import React from 'react';
import { Link } from 'react-router';

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
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
      </div>
    );
  }
};

const Header = ({ currentUser, logout }) => (
  <nav className='header'>
    <h1>ShareDeals</h1>
    <div className='header-right'>
      <input className='search' type='search' placeholder='  Search deals' />
      {sessionLinks(currentUser, logout)}
    </div>
  </nav>
);

export default Header;
