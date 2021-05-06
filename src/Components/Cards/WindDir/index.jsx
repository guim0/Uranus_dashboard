import React from 'react';

import styles from './styles.module.scss';

export function WindDir() {

  return (
    <div className={styles.Card}>

    <div className={styles.Title}>
        <p>Wind direction</p>
        <div className={styles.data}>
          <p><img src="./arrow.png" alt="Direction"/></p>
        </div>
        <p>SSE</p>
    </div>

    </div>

  );
}

export default WindDir;