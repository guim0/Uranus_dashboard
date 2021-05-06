import React from 'react';

import styles from './styles.module.scss';

export function Moisture() {

  return (
    <div className={styles.Card}>

    <div className={styles.Title}>
        <p>Moisture</p>
        <div className={styles.data}>
          <p>75<span>%</span></p>
        </div>
    </div>

    </div>

  );
}

export default Moisture;