import React, { useState } from 'react';
import people from '../assets/people.png';
import profile from '../assets/profile.png'
import './Navbar.css'
import Form_val from './Form_val';

function Navbar({isModal, setIsModal}) {
const handleOpenForm = () => {
  if(isModal=== false){
    setIsModal(true)
  }else{
    setIsModal(false)
  }
}
  
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
        <img src= {profile} className='img2' alt="" onClick={()=>{handleOpenForm()}} />
      </div>
    </nav>
  );
}

export default Navbar;