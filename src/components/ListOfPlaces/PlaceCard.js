import React, { useState } from 'react';
import classes from './PlaceCard.module.css';

const PlaceCard = (props) => {
    const [showData,setShowData]=useState(false)
    const imgBackground={backgroundImage:`url(${props.imgURL})`}

    const onHoverHandler=()=>{
        setShowData((prevData)=>!prevData)
    }

    return (
        <div className={classes.card} style={imgBackground} onMouseEnter={onHoverHandler} onMouseLeave={onHoverHandler}>
          <div className={`${classes.card__content} ${showData && classes['card__content__onHover']}`}>
                <p>{props.place}</p>
                <p>Price:{props.price}zł /night</p>
            </div>
        </div>
    )
}

export default PlaceCard