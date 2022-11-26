import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import classes from './ListOfPlaces.module.css'
import PlaceCard from './PlaceCard'

const ListOfPlaces = () => {
  return (
    <>
      <div className={classes.listHeader}>
      <h2 className={classes['list-Heading']}>Places to go</h2>
      <p className={classes['listHeader__right']}>Find out more <FontAwesomeIcon icon={faArrowRight} className={classes.arrow}/></p>
      </div>
      <div className={classes['list-of-places']}>
        <button className={classes['list-scroll-left']}>  </button>
        <PlaceCard place={'Warsaw'} price={399} imgURL={"/assets/warsaw.jpg"} />
        <PlaceCard place={'Krakow'} price={159} imgURL={"/assets/krakow2.jpg"} />
        <PlaceCard place={'Gdansk'} price={199} imgURL={"/assets/gdansk.jpg"} />
        <PlaceCard place={'Wroclaw'} price={199} imgURL={"../assets/wroclaw.jpg"} />
        <PlaceCard place={'Rzeszow'} price={99} imgURL={"../assets/rzeszow.jpg"} />
        <button className={classes['list-scroll-right']}>  </button>
      </div>
    </>
  
  )
}

export default ListOfPlaces