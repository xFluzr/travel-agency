import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ImageSlider from './ImageSlider'
import classes from './ListOfPlaces.module.css'


const ListOfPlaces = () => {

  const slides=[
   { place:'Warsaw', price:399,imgURL:"/assets/warsaw.jpg"},
   {place:'Kraków', price:159, imgURL:"/assets/krakow2.jpg"},
   {place:'Gdańsk', price:99, imgURL:"/assets/gdansk.jpg"},
   {place:'Wrocław', price:199 ,imgURL:"../assets/wroclaw.jpg"},
   {place:'Rzeszów', price:99, imgURL:"../assets/rzeszow.jpg"},
   {place:'Rzeszów', price:99, imgURL:"../assets/rzeszow.jpg"}  ]


  return (
    <div className={classes['listOfPlaces__wrapper']}>
      <div className={classes.listHeader} id="placesToGo">
      <h2 className={classes['list-Heading']}>Places to go</h2>
      <p className={classes['listHeader__right']}>Find out more <FontAwesomeIcon icon={faArrowRight} className={classes.arrow}/></p>
      </div>
      <div className={classes['list-of-places']}>
          {<ImageSlider slides={slides}/>}
      </div>
    </div>
  
  )
}

export default ListOfPlaces