import React from 'react';
import people from '../assets/people.png';
import profile from '../assets/profile.png'
import './Navbar.css'

function Navbar() {
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <img src= {people} alt="error" />
        <span className="navbar-logo"><b>User Details</b></span>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
        <button className="search-button">Search</button>
        <img src= {profile} className='img2' alt=""  />
      </div>
    </nav>
  );
}

export default Navbar;