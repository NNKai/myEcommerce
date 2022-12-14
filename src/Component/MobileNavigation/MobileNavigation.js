import React from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes, } from 'react-icons/fa'
import {BsFillCartFill} from 'react-icons/bs'
import { useRef } from 'react'
import './MobileNavigation.css'
import Logo from '../../Images/logo1.png'

const MobileNavigation = () => {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

  

  return (
      <header>
        
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars />
        </button>
        <nav ref={navRef}>
        <Link to="/" onClick={showNavbar}><img src={Logo} alt=''></img></Link>
            <Link to="/mens" onClick={showNavbar} >Men's Collection</Link>
            <Link to="/womens" onClick={showNavbar}>Women's Collection</Link>
            <Link to="/accessories" onClick={showNavbar}>Jewelery</Link>
            <span><Link to="/cart" onClick={showNavbar}>Cart(0)</Link></span>
            <Link to="/aboutus" onClick={showNavbar}>About us</Link>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
       <span> <Link to=""><img className="logo" src={Logo} alt='Logo'></img></Link></span>
        <div className='cart'><Link to='/cart'><BsFillCartFill/></Link></div>
      </header>
  )
}

export default MobileNavigation
