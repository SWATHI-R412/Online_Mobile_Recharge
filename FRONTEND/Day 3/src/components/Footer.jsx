// Footer.jsx

import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Import Font Awesome icons
import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-bottom">
        <p style={{color: 'white'}}>&copy; 2024 TurboRecharge. All rights reserved.</p>
        <div className="contact-info">
          <p style={{color: 'white'}}>
            <FaPhone /> Contact: +91 95555 86666
          </p>
          <p style={{color: 'white'}}>
            <FaEnvelope /> E-Mail: turborecharge@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;