import type { Hexagon, Level } from '../types';
import { isEqual } from './isEqual';
import { getNeighbors } from './getNeighbors';

const maxPathGeneratorIterations = 200;

function generatePathInner({
  hexagonList,
  startHexagon,
  maxPathLength,
}: {
  hexagonList: Hexagon[];
  startHexagon: Hexagon;
  maxPathLength: number;
}): Hexagon[] {
  const path: Hexagon[] = [startHexagon];
  let hexagon: Hexagon = startHexagon;
  let availableHexagons = hexagonList.filter(
    (availableHexagon) => !isEqual(availableHexagon, hexagon)
  );

  for (let i = 0; i < maxPathLength - 1; i++) {
    const neighbors = getNeighbors(hexagon);
    const availableNeighbors = neighbors.filter(
      (neighbor) =>
        availableHexagons.find((availableHexagon) =>
          isEqual(availableHexagon, neighbor)
        ) !== undefined
    );

    if (availableNeighbors.length === 0) break;

    const nextHexagonIndex = Math.floor(
      Math.random() * availableNeighbors.length
    );
    const nextHexagon = availableNeighbors[nextHexagonIndex];

    path.push(nextHexagon);

    availableHexagons = availableHexagons.filter((availableHexagon) =>
      neighbors.every((neighbor) => !isEqual(availableHexagon, neighbor))
    );

    hexagon = nextHexagon;
  }

  return path;
}

export function generatePath({
  hexagonList,
  startHexagons,
  endHexagons,
  minPathLength,
  maxPathLength,
}: Level): Hexagon[] {
  const startHexagonIndex = Math.floor(Math.random() * startHexagons.length);
  const startHexagon = startHexagons[startHexagonIndex];

  for (let i = 0; i < maxPathGeneratorIterations; i++) {
    const path = generatePathInner({
      hexagonList,
      startHexagon,
      maxPathLength,
    });
    const lastHexagon = path[path.length - 1];

    if (path.length >= minPathLength) {
      if (endHexagons.find((endHexagon) => isEqual(endHexagon, lastHexagon))) {
        return path;
      }
    }
  }

  throw new Error(
    `Could not find suitable path after ${maxPathGeneratorIterations} iterations`
  );
}
