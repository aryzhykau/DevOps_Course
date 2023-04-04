import React from 'react';
import './Footer.css';
import Social from './Social';

const Footer = () => {

  return (
    <footer>
      <div className="footer-wrapper">
        <div>
          <p>©2022 Makeupshop. All rights reserved.</p>
        </div>
        <div className="social">
          <Social/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
