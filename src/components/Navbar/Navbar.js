import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [showFinder,setShowFinder]=useState(false);
  const [color,setColor]=useState(false);

  const clickHandler=()=>{
    setShowFinder(prevState=>!prevState);
  }
  const changeColor=()=>{
    if(window.scrollY>=90){
      setColor(true);
    }else{
      setColor(false);
    }
  }

  window.addEventListener("scroll",changeColor)
  
  return (
    <div className={color?`${classes.navbar}  ${classes['navbar-bg-black']}`:classes.navbar }>
        <h3 className={classes.navbar__logo}>
          <a  href='#'>visit
          <span className={classes['logo-italic']}>
            Poland
          </span>.pl</a>
          
        </h3>
        <nav className={classes.navbar__links}>
          <a href="#placesToGo" className={classes.navbar__link}>Places to go</a>
          <a href="#" className={classes.navbar__link}>Magazine</a>
          <a href="#" className={classes.navbar__link}>Tickets</a>
          <input className={!showFinder?classes.finder:classes['finder-active']} placeholder="Explore... " />
          <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.magnifier} onClick={clickHandler}/>
        </nav>
    </div>
  )
}

export default Navbar