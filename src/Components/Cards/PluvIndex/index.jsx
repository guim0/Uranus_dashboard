import React from 'react';

import styles from './styles.module.scss';

export function PluvIndex({ pluv }) {

  
  return (
    <div className={styles.Card}>

    <div className={styles.Title}>
        <p>Pluviometric Index</p>
        <div className={styles.data}>
          <p>{pluv}<span>mm</span></p>
        </div>
    </div>

    </div>

  );
}

export default PluvIndex;