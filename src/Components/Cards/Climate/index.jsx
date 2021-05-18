import React from 'react';


import styles from './styles.module.scss';

export function Climate({ temp, nome }) {
  return (
    <div className={styles.Card}>

    <div className={styles.Title}>
        <p>Climate</p>
        <div className={styles.data}>
          <p>{temp}<span>°C</span></p>
          <p>{nome}</p>
        </div>
    </div>

    </div>

  );
}

export default Climate;