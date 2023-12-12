import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assests/pizzaLogo.png';
import '../styles/NavBar.css'
function NavBar() {
  return (
    <div className="navbar">
        <div className="leftSide">
        <img src={Logo} />
        </div>
        <ul className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
        </ul>
    </div>
  )
}

export default NavBar