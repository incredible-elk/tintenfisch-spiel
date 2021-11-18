import type { Hexagon } from '../types';
import { isOdd } from '../lib/isOdd';
import { isEqual } from '../lib/isEqual';
import styles from '../styles/IceGrid.module.css';

type IceGridProps = {
  clickableHexagons: Hexagon[];
  hexagonList: Hexagon[] /* Array of Tuples */;
  mistakeHexagons: Hexagon[];
  onHexagonClick: (hexagon: Hexagon) => void;
  path: Hexagon[];
};

export function IceGrid({
  clickableHexagons,
  hexagonList,
  mistakeHexagons,
  onHexagonClick,
  path,
}: IceGridProps) {
  const maxX = Math.max(...hexagonList.map(([x]) => x));
  const maxY = Math.max(...hexagonList.map(([_, y]) => y));
  const width = (maxX + 1) * 46 + 15;
  const height = (maxY + 1) * 54 + 27;

  return (
    <div className={styles.gridContainer}>
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        viewBox={`0 0 ${width} ${height}`}
      >
        <defs>
          <polygon
            id="hexagon"
            points="60,26 45,52 15,52 0,26 15,0 45,0"
          ></polygon>
        </defs>
        {hexagonList.map((hexagon) => {
          const [x, y] = hexagon;
          const translateX = x * 46;
          const translateY = y * 54 + (isOdd(x) ? 27 : 0);
          const isOnPath = path.find((pathHexagon) =>
            isEqual(hexagon, pathHexagon)
          );
          const isClickable = clickableHexagons.find((clickableHexagon) =>
            isEqual(hexagon, clickableHexagon)
          );
          const isMistake = mistakeHexagons.find((mistakeHexagon) =>
            isEqual(hexagon, mistakeHexagon)
          );

          return (
            <use
              className={
                isOnPath
                  ? styles.hexagonPath
                  : isMistake
                  ? styles.hexagonMistake
                  : isClickable
                  ? styles.hexagonClickable
                  : styles.hexagon
              }
              key={`${x},${y}`}
              onClick={isClickable ? () => onHexagonClick(hexagon) : undefined}
              transform={`translate(${translateX},${translateY})`}
              xlinkHref="#hexagon"
            />
          );
        })}
      </svg>
    </div>
  );
}
