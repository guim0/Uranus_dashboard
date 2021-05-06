import React from 'react';
import { Climate } from './Climate'
import { Moisture } from './Moisture'
import { Windspeed } from './Windspeed'
import { WindDir } from './WindDir'
import { PluvIndex } from './PluvIndex'


import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

import styles from './styles.module.scss';


export function Cards() {

  return (
       <div className={styles.container}>

         <div className={styles.leftSide}>
         <Climate/>
         <Moisture/>
         <Windspeed/>
         <WindDir/>
         </div>
         <div className={styles.rightSide}>
         <Calendar />
         <PluvIndex/>
         </div>
       </div>


  );
}

export default Cards;