import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'

const Navbar = () => {
  return (
    <nav>
      <img src="logo" alt="" />
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Contact us</li>
        </ul>
    </nav>
  )
}

export default Navbar
