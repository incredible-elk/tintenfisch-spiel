import { useState } from 'react'
import type { Hexagon } from '../types'
import { IceGrid } from './iceGrid'
import { isEqual } from '../utils/isEqual'
import { getNeighbors } from '../utils/getNeighbors'


type GameplayIceGridProps = {
  hexagonList: Hexagon[]; /* Array of Tuples */
  path: Hexagon[];
  startHexagons: Hexagon[];
}

export function GameplayIceGrid({hexagonList, path, startHexagons}: GameplayIceGridProps) {
  const [pathPosition, setPathPosition] = useState(0);
  const [mistakeHexagons, setMistakeHexagons] = useState<Hexagon[]>([]);

  return (
    <IceGrid
      clickableHexagons={
        pathPosition === 0 ?
          startHexagons
        : 
        getNeighbors(path[pathPosition - 1])
      }
      hexagonList={hexagonList} 
      mistakeHexagons={mistakeHexagons}
      onHexagonClick={(hexagon: Hexagon) => {
        if (isEqual(hexagon, path[pathPosition]) ) {
          setPathPosition(pathPosition + 1)
        } else {
          setMistakeHexagons([...mistakeHexagons, hexagon])
        }
      }} 
      path={path.slice(0, pathPosition)}  
    />
  );
}