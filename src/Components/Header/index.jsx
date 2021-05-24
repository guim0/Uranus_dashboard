import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styles from './styles.module.scss';

export function Header() {

  const [locale, setLocale] = useState('')

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
        const { name } = res.data
        setLocale(name);
      })
    })
  }, [])
 

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
     <h1>dashboard</h1>
     <p>view panel of the data</p>
     </div>
    
    
     <div className={styles.headerInputs}>
      <p>Guarulhos - SP</p>

      <img src="./bell.png"alt="Bell" /><span className={styles.dot}></span>
      <img className={styles.user} src="./admin.png"alt="Bell"/>


      </div>
    </header>
  );
}