import React from 'react';
import './Nav.css';
import icon from '../dog-icon.png';

const Nav = () => {
  return (
    <nav className="main-nav">
      <img src={icon} alt="icon"/>
      Puddlz
    </nav>
  )
}

export default Nav;

