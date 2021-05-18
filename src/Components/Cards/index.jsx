import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Climate } from './Climate'
import { Moisture } from './Moisture'
import { Windspeed } from './Windspeed'
import { WindDir } from './WindDir'
import { PluvIndex } from './PluvIndex'


import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

import styles from './styles.module.scss';


export function Cards() {

  const [hasLocation, setHasLocation] = useState (false);
  const [temp, setTemp] = useState(0);
  const [wind, setWind] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [deg, setDeg] = useState(0)
  const [pluv, setPluv] = useState (12)
 

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position.coords.latitude, position.coords.longitude);
      axios.get("http://api.openweathermap.org/data/2.5/weather", {
        params: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          appId: process.env.REACT_APP_OPEN_WHETHER_KEY,
          lang: 'pt',
          units: 'Metric'
        }
      }).then(res => {
        const { temp, humidity } = res.data.main
        const { speed, deg } = res.data.wind
        setTemp(temp);
        setHumidity(humidity);
        setWind(speed);
        setDeg(deg);
        setPluv(pluv);
        
      })
      setHasLocation(true)
    })

  }, [])
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
         <Climate temp={temp} />
         <Moisture humidity={humidity}/>
         <Windspeed wind={wind}/>
         <WindDir deg={deg}/>
         </div>

         <div className={styles.rightSide}>
         <Calendar />
         <PluvIndex pluv={pluv}/>
         </div>
       </div>
       </>


  );
}

export default Cards;