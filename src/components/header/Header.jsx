import React from 'react';
import './style.css';
import icon from './logo192.png';
const Header = () => {
  return (
    <div className='header'>
      <a href='/'>My Todo List</a>
      <p>React <img style={{height:'25px', transform:'translateY(2px)'}} src={icon} alt="Icon"/></p>
    </div>
  );
};

export default Header;