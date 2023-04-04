import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <>
      <nav>
        <ul className="navUl">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalogue">Catalogue</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to="/aboutus">About us</Link></li>
        </ul> 
      </nav>
    </>
  );
};

export default Nav;
