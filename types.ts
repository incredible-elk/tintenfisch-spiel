export type Hexagon = [number, number];

export type Level = {
  endHexagons: Hexagon[];
  hexagonList: Hexagon[];
  maxMistakes: number;
  maxPathLength: number;
  minPathLength: number;
  showSolutionTime: number;
  startHexagons: Hexagon[];
};