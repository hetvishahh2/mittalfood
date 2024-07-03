import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./icons"; 
import ScrollToSection from './ScrollToSection';

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          {/* <img src="./images/electrovolt.jpg" alt="Logo" className="logo" /> */}
          <ScrollToSection sectionId="home">
            <div className="nav-links-logo">Mittal Food</div>
          </ScrollToSection>
          
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <ScrollToSection sectionId="about">
                <div className="nav-links">About</div>
              </ScrollToSection>
            </li>
            
            <li className="nav-item">
              <ScrollToSection sectionId="products">
                <div className="nav-links">Products</div>
              </ScrollToSection>
            </li>
            
            <li className="nav-item">
              <ScrollToSection sectionId="values">
                <div className="nav-links">Why Choose Us</div>
              </ScrollToSection>
            </li>
           

            <li className="nav-item">
              <ScrollToSection sectionId="contact">
                <div className="nav-links">Contact</div>
              </ScrollToSection>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
