import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header1">
        <Link to="#"><b>Kelvin Architect</b></Link>
      </div>

      {/* Hamburger icon (only visible when menu is closed) */}
      {!isOpen && (
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      )}

      {/* Navigation links */}
      <nav className={`header2 ${isOpen ? 'open' : ''}`}>
        {/* Close icon inside the menu */}
        {isOpen && (
          <div className="close-icon" onClick={toggleMenu}>
            ✖
          </div>
        )}

        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact Me</a>
        <a href="#about">About me</a>
        <a href="#myProjects">Projects</a>
      </nav>
    </header>
  );
};

export default Header;
