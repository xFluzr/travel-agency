
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <p>Made with <FontAwesomeIcon icon={faHeart} className={classes.heart}/> by Jakub Jaszcz</p>
    </footer>
  )
}

export default Footer