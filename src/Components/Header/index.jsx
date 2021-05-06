
import styles from './styles.module.scss';

export function Header() {

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