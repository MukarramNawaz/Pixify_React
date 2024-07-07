// src/components/Header.js
import React from 'react';
import '../App.css'; 
import '../images/LOGO.jpg'

const Header = () => {

  return (
    <header className="header">
      <img className="logo" src={require('../images/LOGO.jpg')} alt="LOGO" />
      <nav className="nav">
        <a href="https://calendly.com/pixfy/meeting" target='blank'>Contact US</a>
      </nav>
      
     <div>
      
     </div>
    </header>
  );
};

export default Header;
