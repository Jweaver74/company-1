import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
     <img src={process.env.PUBLIC_URL + '/images/beehive.jpg'} alt="Beehive" style={{maxWidth: '200px', height: 'auto'}}/>
      <h1>Welcome to Hetherington Honey</h1>
      <p>Your Source for Premium Honey</p>
    </div>
  );
}

export default Header;