import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column1">
        <h2 className='hiih2'>Get in Touch Today</h2>
        <h3 className='hiih3'><i className="fab fa-certificate"></i> FSSAI Certified</h3>

        <div className="social-icons">
          <button onClick={() => window.open('https://www.facebook.com/profile.php?id=61556062875580')}><i className="fab fa-facebook"></i></button>
          <button onClick={() => window.open('https://www.instagram.com/mittalfood_/')}><i className="fab fa-instagram"></i></button>
        </div>
        <div className="logo-container">
            <Link to="/" className="logo-link">
                <img src="/images/oldlogo.jpeg" alt="Logo" className="logo" />
            </Link>
        </div>
      </div>

      <div className="column2">
        <div className="logo-container">
            <Link to="/" className="logo-link">
                <img src="/images/logo.jpeg" alt="Logo" className="logo" />
            </Link>
        </div>
        <div className="address">
          <p> Mittal Food, <br/>Survey No. 278/1/2/9, <br/>Balda Industrial Estate, <br/> Behind Fountain Hotel, GIDC, <br/> Killa Pardi, (Gujarat-India) 396125</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
