import React from 'react';
import PlaceCard from './PlaceCard';

const ImageSlider = (props) => {
  return (
    <>
        {props.slides.map((slide,index)=>{
                return(
                    index<5?<PlaceCard key={index} imgURL={slide.imgURL} place={slide.place} price={slide.price}/>:""
                )
            })}
    </> 
  )
}

export default ImageSlider