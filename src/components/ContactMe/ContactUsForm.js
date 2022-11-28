import React from 'react';
import classes from "./ContactUsForm.module.css";

const ContactMeForm = () => {
  return (
        <form className={classes.contactUsForm}>
            <h2 className={classes['contact-us']}>CONTACT US</h2>
            <input className={classes.contactUsForm__input} placeholder='Enter your name' type="name"/>
            <input className={classes.contactUsForm__input} placeholder='Enter a valid email' type="email"/>
            <textarea className={classes.contactUsForm__textarea} placeholder='Message' type="name"/>
            <button className={classes.contactUsForm__btn}>SUBMIT</button>
        </form>
  )
}

export default ContactMeForm