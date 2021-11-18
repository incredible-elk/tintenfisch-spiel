import type { Hexagon } from '../types';
import { isOdd } from './isOdd';

export function getNeighbors([x, y]: Hexagon): Hexagon[] {
  const yOffset = isOdd(x) ? 0 : -1;

  return [
    [x, y - 1],
    [x + 1, y + yOffset],
    [x + 1, y + 1 + yOffset],
    [x, y + 1],
    [x - 1, y + 1 + yOffset],
    [x - 1, y + yOffset],
  ];
}
