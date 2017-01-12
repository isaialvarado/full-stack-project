import React from 'react';
import { Link } from 'react-router';
import SessionModalContainer from '../modal/session_modal_container';


const Header = ({ currentUser, logout }) => (
  <nav className='header'>
    <div className='header-left'>
      <h1>ShareDeals</h1>
    </div>
    <div className='header-middle'>
      <input className='search' type='search' placeholder='  Search deals' />
    </div>
    <div className='header-right'>
      {sessionLinks(currentUser, logout)}
    </div>
  </nav>
);

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
        <SessionModalContainer formType='Log In' />
        <SessionModalContainer formType='Sign Up' />
      </div>
    );
  }
};

export default Header;
