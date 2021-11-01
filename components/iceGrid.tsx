import styles from '../styles/IceGrid.module.css'

export function IceGrid() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="300" height="260">
      <defs>
        <polygon className={styles.hexagon} id="hexagon" points="60,26 45,52 15,52 0,26 15,0 45,0"></polygon>
      </defs>
      <use xlinkHref="#hexagon" transform="translate(0,0)" />
      <use xlinkHref="#hexagon" transform="translate(92,0)" />
      <use xlinkHref="#hexagon" transform="translate(46,26)" />
    </svg>
  );
} 