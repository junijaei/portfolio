'use client';

import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils, Points, Vector3 } from 'three';
import { mapCubePoints } from '@/utils/three-utils';
import CubePoints from '@/component/cube-animation/CubePoints';

export default function CubeCooperation({
  initialPosition,
  progress,
}: {
  initialPosition: number[];
  progress: number;
}) {
  const pointsRef = useRef<Points>(null);
  const prevProgress = useRef<number>(-1);

  const startPosition = useMemo(() => {
    const [sx, sy, sz] = initialPosition;
    return new Vector3(sx, sy, sz);
  }, [initialPosition]);

  const { edgePoints, currentPositions } = useMemo(() => {
    const result = mapCubePoints(({ point }) => [
      point.x,
      point.y,
      point.z,
    ]).flat();
    return {
      edgePoints: new Float32Array(result),
      currentPositions: new Float32Array(result),
    };
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;

    if (Math.abs(progress - prevProgress.current) > 0.005) {
      for (let i = 0; i < edgePoints.length; i += 3) {
        const x0 = edgePoints[i] + startPosition.x;
        const y0 = edgePoints[i + 1] + startPosition.y;
        const z0 = edgePoints[i + 2] + startPosition.z;

        const x1 = edgePoints[i];
        const y1 = edgePoints[i + 1];
        const z1 = edgePoints[i + 2];

        currentPositions[i] = MathUtils.lerp(x0, x1, progress);
        currentPositions[i + 1] = MathUtils.lerp(y0, y1, progress);
        currentPositions[i + 2] = MathUtils.lerp(z0, z1, progress);
      }

      pointsRef.current.visible = true;
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <CubePoints
      currentPositions={currentPositions}
      pointsRef={pointsRef}
    />
  );
}
