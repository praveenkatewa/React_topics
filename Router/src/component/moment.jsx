import React from 'react'
import moment from 'moment';

const Moment = () => {
  const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
 
  const day=moment().format('dddd');                   
  const month =moment().format("MMM Do YY");               
    
 const format=moment().format();   

  return (
    <div>
    <h1>Current Date and Time</h1>
    <p>{currentDate}</p>
    <p>{day}</p>
    <p>{month}</p>
    <p>{format}</p>
   

      
    </div>
  )
}

export default Moment
