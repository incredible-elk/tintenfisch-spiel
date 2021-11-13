import type { Hexagon, Level } from '../types'
import { isOdd } from '../utils/isOdd'

const maxPathGeneratorIterations = 200;

function isEqual([x1, y1]: Hexagon, [x2, y2]: Hexagon): boolean {
  return x1 === x2 && y1 === y2;
}

function getNeighbors([x, y]: Hexagon): Hexagon[] {
  const yOffset = isOdd(x) ? 0 : -1;

  return [
    [x, y - 1],
    [x + 1, y + yOffset],
    [x + 1, y + 1 + yOffset],
    [x, y + 1],
    [x - 1, y + 1 + yOffset],
    [x - 1, y + yOffset],
  ]
}

function generatePathInner({hexagonList, startHexagon, maxPathLength}: {
  hexagonList: Hexagon[];
  startHexagon: Hexagon;
  maxPathLength: number;
}): Hexagon[] {
  const path: Hexagon[] = [startHexagon];
  let hexagon: Hexagon = startHexagon;
  let availableHexagons = hexagonList.filter((availableHexagon) => (
    !isEqual(availableHexagon, hexagon))
  );

  for (let i = 0; i < maxPathLength - 1; i++) {
    const neighbors = getNeighbors(hexagon);
    const availableNeighbors = neighbors.filter((neighbor) => (
      availableHexagons.find((availableHexagon) => isEqual(availableHexagon, neighbor)) !== undefined
    ))

    if (availableNeighbors.length === 0) break;

    const nextHexagonIndex = Math.floor(Math.random() * availableNeighbors.length);
    const nextHexagon = availableNeighbors[nextHexagonIndex];

    path.push(nextHexagon);
    
    availableHexagons = availableHexagons.filter((availableHexagon) => (
      neighbors.every((neighbor) => !isEqual(availableHexagon, neighbor))
    ));
    
    hexagon = nextHexagon;
  }

  return path;
}

export function generatePath({hexagonList, startHexagons, endHexagons, minPathLenght, maxPathLength}: Level): Hexagon[] {
  const startHexagonIndex = Math.floor(Math.random() * startHexagons.length);
  const startHexagon = startHexagons[startHexagonIndex];

  for (let i = 0; i < maxPathGeneratorIterations; i++) {
    const path = generatePathInner({hexagonList, startHexagon, maxPathLength});
    const lastHexagon = path[path.length - 1];

    if (path.length >= minPathLenght) {
      if (endHexagons.find((endHexagon) => isEqual(endHexagon, lastHexagon))) {
        return path;
      }
    }  
  }

  throw new Error(`Could not find suitable path after ${maxPathGeneratorIterations} iterations`);
}