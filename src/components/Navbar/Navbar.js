import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [showFinder,setShowFinder]=useState(false);

  const clickHandler=()=>{
    setShowFinder(prevState=>!prevState);
  }
  
  return (
    <div className={classes.navbar}>
        <h3 className={classes.navbar__logo}>visit
          <span className={classes['logo-italic']}>
            Poland
          </span>.pl
        </h3>
        <nav className={classes.navbar__links}>
          <a href="#" className={classes.navbar__link}>Places to go</a>
          <a href="#" className={classes.navbar__link}>Magazine</a>
          <a href="#" className={classes.navbar__link}>Tickets</a>
          <input className={!showFinder?classes['finder'] :''} />
          <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.magnifier} onClick={clickHandler}/>
        </nav>
    </div>
  )
}

export default Navbar