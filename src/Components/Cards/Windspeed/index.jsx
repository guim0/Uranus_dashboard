import React from 'react';

import styles from './styles.module.scss';

export function Windspeed() {

  return (
    <div className={styles.Card}>

    <div className={styles.Title}>
        <p>Wind speed</p>
        <div className={styles.data}>
          <p>10<span>KM/s</span></p>
        </div>
    </div>

    </div>

  );
}

export default Windspeed;