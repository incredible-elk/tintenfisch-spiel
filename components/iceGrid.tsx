import styles from '../styles/Home.module.css'

export function IceGrid() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="260">
      <polygon className={styles.hexagon} points="60,26 45,52 15,52 0,26 15,0 45,0"></polygon>
    </svg>
  );
} 