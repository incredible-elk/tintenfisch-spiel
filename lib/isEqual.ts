import type { Hexagon } from '../types'

export function isEqual([x1, y1]: Hexagon, [x2, y2]: Hexagon): boolean {
  return x1 === x2 && y1 === y2;
}