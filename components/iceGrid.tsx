import styles from '../styles/IceGrid.module.css'

type IceGridProps = {
  hexagonList: [number, number][]; /* Array of Tuples */
}

export function IceGrid({hexagonList}: IceGridProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="300" height="260">
      <defs>
        <polygon className={styles.hexagon} id="hexagon" points="60,26 45,52 15,52 0,26 15,0 45,0"></polygon>
      </defs>
      {hexagonList.map(([x, y]) => {
        const isXOdd = x % 2 === 1;
        const translateX = x * 46;
        const translateY = y * 54 + (isXOdd ? 27 : 0);
        
        return (
          <use key={`${x},${y}`} xlinkHref="#hexagon" transform={`translate(${translateX},${translateY})`} />
        )
      })}
    </svg>
  );
} 