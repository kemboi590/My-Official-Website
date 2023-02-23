import React, { useState } from 'react';
import Logo from '../../images/Logo.jpg'
import data from './data'
import { FaBars } from 'react-icons/fa';
import './navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className={`nav__menu ${isOpen ? 'show' : ''}`}>
            {
              data.map(item => <li key={item.id}><a href={item.link}>{item.tittle}</a></li>)
            }
        </ul>
        <FaBars className='nav__hamburger' onClick={() => setIsOpen(!isOpen)} />
      </div>
    </nav>
  )
}

export default Navbar
