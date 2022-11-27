import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from './ImageSlider.module.css';
import PlaceCard from './PlaceCard';

const ImageSlider = (props) => {
  return (
    <>
      <button className={classes['list-scroll-left']}> <FontAwesomeIcon icon={faArrowLeft}/></button>
        {props.slides.map((slide,index)=>{
                return(
                    index<5?<PlaceCard key={index} imgURL={slide.imgURL} place={slide.place} price={slide.price}/>:""
                )
            })}
      <button className={classes['list-scroll-right']}><FontAwesomeIcon icon={faArrowRight}/></button>
    </> 
  )
}

export default ImageSlider