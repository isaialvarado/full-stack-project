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

const personalGreeting = (currentUser, logout) => (
  <div>
    <h1>Welcome {currentUser.username}!</h1>
    <button onClick={logout}>Logout</button>
  </div>
);

const Header = ({ currentUser, logout }) => (
  <nav className='header'>
    <h1>Share Deals</h1>
    {sessionLinks(currentUser, logout)}
  </nav>
);

export default Header;
