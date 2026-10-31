import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

  const [Sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll",()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const togglemenu = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  }

  return (
    <nav className={`container ${Sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="Logo" className='Logo'/>
        <ul className={isMenuOpen ?"" : "hide-mobile-menu"}>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="programs" smooth={true} offset={-280} duration={500}>Program</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to="campus" smooth={true} offset={-280} duration={500}>Campus</Link></li>
            <li><Link to="test" smooth={true} offset={-280} duration={500}>Testimonials</Link></li>
            <li><Link to="contact" smooth={true} offset={-280} duration={500}><button className='btn'>Contact Us</button></Link></li>
        </ul>
        <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={togglemenu}/>
    </nav>
  )
}

export default Navbar
