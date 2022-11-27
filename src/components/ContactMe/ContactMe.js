import { faBusinessTime, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import classes from './BackGroundStripe.module.css'
import ContactMeForm from './ContactMeForm'

const ContactMe = () => {
  return (
    <div className={classes.wrapper}>
        <div className={classes['contact-info']}>
            <div className={classes['location-info']}>
                <h4><FontAwesomeIcon icon={faPhone} className={classes.icon}/>Call Me</h4>
                <p>154 230 134, 111 222 333</p>
            </div>
            <div className={classes['location-info']}>
                <h4><FontAwesomeIcon icon={faLocation} className={classes.icon}/>Location</h4>
                <p>Dębica 39-200, Grodzka 21/37</p>
            </div>
            <div className={classes['location-info']}>
                <h4><FontAwesomeIcon icon={faBusinessTime} className={classes.icon}/>Businnes Hours</h4>
                <p>Mon-Fri(08-17), Sat(09-14)</p>
            </div>
        </div>
      
       <ContactMeForm/>
    </div>
  )
}

export default ContactMe