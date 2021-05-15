import React, { useState, useEffect} from 'react'
import axios from 'axios';
import styles from './styles.module.scss';

export function Header() {

  const [location, setLocation] = useState (false);
  const [weather, setWeather] = useState(false);


  let getWeather = async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: 'pt',
      }
    });
  }


  useEffect(() =>{
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [])
        if(location == false){
          return (
            <>
            <p className={styles.needloc}>Oi! precisamos da sua localização :D</p>
            </>
          )
        }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
     <h1>dashboard</h1>
     <p>view panel of the data</p>
     </div>
    
    
     <div className={styles.headerInputs}>
      <p>Guarulhos - SP</p>

      <img src="./bell.png"alt="Bell"/><span className={styles.dot}></span>
      <img id="user" src="./admin.png"alt="Bell"/>


      </div>
    </header>
  );
}