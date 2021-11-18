import { useEffect, useState } from 'react'
import type { Hexagon } from '../types'
import { IceGrid } from './iceGrid'
import { isEqual } from '../lib/isEqual'
import { getNeighbors } from '../lib/getNeighbors'


type GameplayIceGridProps = {
  hexagonList: Hexagon[]; /* Array of Tuples */
  maxMistakes: number;
  onLoose: () => void;
  onWin: () => void;
  path: Hexagon[];
  startHexagons: Hexagon[];
}

export function GameplayIceGrid({
  hexagonList,
  maxMistakes,
  onLoose,
  onWin,
  path,
  startHexagons,
}: GameplayIceGridProps) {
  const [pathPosition, setPathPosition] = useState(0);
  const [mistakeHexagons, setMistakeHexagons] = useState<Hexagon[]>([]);

  const isWon = pathPosition === path.length;
  const isLost = mistakeHexagons.length >= maxMistakes;
  useEffect(() => {
    if (isWon) {
       onWin(); 
    }
  }, [isWon, onWin]);

  useEffect(() => {
    if (isLost) {
      onLoose();
    }
  }, [isLost, onLoose]);

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