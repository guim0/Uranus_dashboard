import React from 'react';

import styles from './styles.module.scss';

export function Climate() {

  return (
    <div className={styles.Card}>

    <div className={styles.Title}>
        <p>Climate</p>
        <div className={styles.data}>
          <p>33°</p>
        </div>
    </div>

    </div>

  );
}

export default Climate;