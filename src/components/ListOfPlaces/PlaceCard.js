import React from 'react';
import classes from './PlaceCard.module.css';

const PlaceCard = (props) => {

    const imgBackground={backgroundImage:`url(${props.imgURL})`}
  return (
    <div className={classes.card} style={imgBackground}>
        
    </div>
  )
}

export default PlaceCard