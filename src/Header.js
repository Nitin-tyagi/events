import React from 'react'
import logos from "../src/Images/logo.png";
import  './App.css';
const Header = () => {
  return (
    <>
    <div className='logo'>
    <img className='logo-image' src={logos} alt="Logo"/>
    <div className='heading1'>
      <h1>Astrix.</h1>
      </div>

    </div>
    </>
  )
}

export default Header;