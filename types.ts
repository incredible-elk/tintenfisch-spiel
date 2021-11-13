export type Hexagon = [number, number];

export type Level = {
  hexagonList: Hexagon[];
  startHexagons: Hexagon[];
  endHexagons: Hexagon[];
  minPathLenght: number;
  maxPathLength: number;
};