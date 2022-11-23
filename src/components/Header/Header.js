import React from 'react';
import Button from '../UI/Button/Button';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}><h1 className={classes.header__heading}>Welcome to Poland</h1></header>
   
  )
}

export default Header