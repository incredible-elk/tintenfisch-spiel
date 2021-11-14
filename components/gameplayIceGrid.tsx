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


  return (
    <IceGrid
      clickableHexagons={
        pathPosition === 0 ?
          startHexagons
        : 
        getNeighbors(path[pathPosition - 1])
      }
      hexagonList={hexagonList} 
      onHexagonClick={(hexagon) => {
        if (isEqual(hexagon, path[pathPosition]) ) {
          setPathPosition(pathPosition + 1)
        }
      }} 
      path={path.slice(0, pathPosition)}  
    />
  );
}