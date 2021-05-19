import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Climate } from './Climate'
import { Moisture } from './Moisture'
import { Windspeed } from './Windspeed'
import { WindDir } from './WindDir'
import { PluvIndex } from './PluvIndex'


import Calendar from 'react-calendar';

import '../../styles/Calendar.css';

import styles from './styles.module.scss';


export function Cards() {
  
  const [hasLocation, setHasLocation] = useState (false);
  const [temperature, setTemperature] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [moisture, setMoisture] = useState(0);
  const [direction, setDirection] = useState(0)
  const [pluviometter, setPluviometter] = useState (12)
  const [dateSelected, setDateSelected] = useState(new Date());

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(async (position)=>{
      const date = dateSelected.toISOString().split('T')[0]

      let params = {}

      try {
        const res = await axios.get(`http://localhost:3303/api/mqtt/${date}`);
        
        if (res.data && res.data.params) {
          const { data } = res;
          params = data.params;
        }
      } catch (e) {
      }
      
      setTemperature(params.temperature ? params.temperature : 0);
      setMoisture(params.moisture ? params.moisture : 0);
      setVelocity(params.wind ? params.wind.velocity : 0);
      setDirection(params.wind ? params.wind.direction.replace('<', '') : 0);
      setPluviometter(params.pluviometter ? params.pluviometter : 0);
      setHasLocation(true)
    })
  }, [dateSelected])
  if(hasLocation == false){
    return (
        <>
          <p className={styles.needloc}>Oi! precisamos da sua localização :D</p>
        </>
    )
  }

  return (
    <>
       <div className={styles.container}>

         <div className={styles.leftSide}>
         <Climate temp={temperature} />
         <Moisture humidity={moisture}/>
         <Windspeed wind={velocity}/>
         <WindDir deg={direction}/>
         </div>

         <div className={styles.rightSide}>
         <Calendar 
          className="calendar"
          onChange={(value) => setDateSelected(value)}
          value={dateSelected}
          />
         <PluvIndex pluv={pluviometter}/>
         </div>
       </div>
       </>
  );
}

export default Cards;