import React from 'react'
import classes from "./Button.module.css"
const Button = (props) => {
  return (
    <button className={classes.btn} type={props.type}>
       <p className={classes['red-color']}>{props.icon}<span className={classes.btn__text}>{props.text}</span></p>
    </button>
  )
}

export default Button