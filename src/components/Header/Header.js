import React from 'react';
import Button from '../UI/Button/Button';
import classes from './Header.module.css';
import { faBookAtlas, faCompass, faThumbtack, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className={classes.header}><h1 className={classes.header__heading}>Welcome to Poland</h1>
        <div className={classes['btn-list']}>
          <Button text={"Top 10 hours"} icon={<FontAwesomeIcon icon={faTicket}/>}/>
          <Button text={"Tickets"}  icon={<FontAwesomeIcon icon={faThumbtack}/>}/>
          <Button text={"Travel Info"} icon={<FontAwesomeIcon icon={faCompass}/>}/>
          <Button text={"Book your holidays"} icon={<FontAwesomeIcon icon={faBookAtlas}/>}/>
        </div>
    </header>
    
  )
}

export default Header