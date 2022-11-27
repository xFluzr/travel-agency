import React from 'react';
import Opinion from './Opinion';
import classes from './UserOpinions.module.css';

const UserOpinions = () => {
  const opinions=[
  {title:"Experts in our Job",text:"We are leading in every competions since 2010. We have great experience in travel industry.",opinionURL:"/assets/opinions/experts.svg"},
  {title:"Start your journey with us",text:"We have helped over 1000000 users, about 99% were glad of our help",opinionURL:"/assets/opinions/travelMode.svg"},
  {title:"Choose your destination",text:"About 10000 places to go. We wil help you find the most attractive one",opinionURL:"/assets/opinions/roadSign.svg"}
]
  return (
    <div className={classes['userOpinions__wrapper']}>
      {opinions.map((opinion,index)=>
        <Opinion key={index} title={opinion.title} text={opinion.text} opinionURL={opinion.opinionURL}/>
      )}
      
    </div>
  )
}

export default UserOpinions