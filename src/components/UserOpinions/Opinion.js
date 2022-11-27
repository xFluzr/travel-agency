import React from 'react';
import classes from './Opinion.module.css';

const Opinion = (props) => {
  return (
    <div className={classes['opinion__card']}>
        <img className={classes['opinion__img']} src={props.opinionURL} alt='opinion-image'/>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
  )
}

export default Opinion