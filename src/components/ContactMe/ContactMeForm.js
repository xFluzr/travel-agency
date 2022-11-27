import React from 'react';
import classes from "./ContactMeForm.module.css";

const ContactMeForm = () => {
  return (
        <form className={classes.contactMeForm}>
            <h2 className={classes['contact-me__heading']}>CONTACT ME</h2>
            <input className={classes.contactMeForm__input} placeholder='Enter your name' type="name"/>
            <input className={classes.contactMeForm__input} placeholder='Enter a valid email' type="email"/>
            <textarea className={classes.contactMeForm__textarea} placeholder='Message' type="name"/>
            <button className={classes.contactMeForm__btn}>SUBMIT</button>
        </form>
  )
}

export default ContactMeForm