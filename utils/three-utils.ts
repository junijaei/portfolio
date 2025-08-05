import { Vector3 } from 'three';

const VERTICES = [
  [-1, -1, -1],
  [1, -1, -1],
  [1, 1, -1],
  [-1, 1, -1],
  [-1, -1, 1],
  [1, -1, 1],
  [1, 1, 1],
  [-1, 1, 1],
];

const EDGES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 4],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
];

const EDGE_DIVISIONS = 20;

export const mapCubePoints = <T>(
  callback: (params: {
    point: Vector3;
    start: Vector3;
    end: Vector3;
    t: number;
    edgeIndex: number;
    pointIndex: number;
  }) => T,
): T[] => {
  const result: T[] = [];
  EDGES.forEach(([startIdx, endIdx], edgeIndex) => {
    const start = new Vector3(...VERTICES[startIdx]);
    const end = new Vector3(...VERTICES[endIdx]);

    for (let pointIndex = 0; pointIndex < EDGE_DIVISIONS; pointIndex++) {
      const t = pointIndex / (EDGE_DIVISIONS - 1);
      const point = new Vector3().lerpVectors(start, end, t);
      result.push(
        callback({
          point,
          start,
          end,
          t,
          edgeIndex,
          pointIndex,
        }),
      );
    }
  });
  return result;
};

export const getPointsCount = () => EDGES.length * EDGE_DIVISIONS;
