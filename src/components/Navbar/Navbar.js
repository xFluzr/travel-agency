import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h3>visit<span className='font-poland'>Poland</span>.pl</h3>
        <nav className='navbar__links'>
          <a href="#">Places to go</a>
          <a href="#">Magazine</a>
          <a href="#">Tickets</a>
          <select>
            <option>EN</option>
            <option>DE</option>
            <option>PL</option>
          </select>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </nav>
    </div>
  )
}

export default Navbar