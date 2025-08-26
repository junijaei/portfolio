'use client';

import { useContext, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points } from 'three';
import { getPointsCount, mapCubePoints } from '@/utils/three-utils';
import { CubeContext } from '@/component/cube-animation/CubeContext';
import CubePoints from '@/component/cube-animation/CubePoints';

export default function CubeBuilding() {
  const pointsRef = useRef<Points>(null);
  const prevVisiblePoints = useRef<number>(0);
  const context = useContext(CubeContext);

  if (!context) throw new Error();

  const { mergedPositions, currentPositions } = useMemo(() => {
    const points = mapCubePoints(({ point }) => {
      return [point.x, point.y, point.z];
    }).flat();

    return {
      mergedPositions: new Float32Array(points),
      currentPositions: new Float32Array(
        Array.from({ length: points.length }, () => 0),
      ),
    };
  }, []);

  useFrame(() => {
    if (
      !pointsRef.current ||
      !context.groupRef.current ||
      context.phase !== 'animate'
    )
      return;

    const totalPoints = getPointsCount();
    const progress = Math.min(
      context.clock.current / context.duration.animate,
      1,
    );
    const visiblePoints = Math.floor(totalPoints * progress);

    if (visiblePoints !== prevVisiblePoints.current) {
      const posAttr = pointsRef.current.geometry.attributes.position;

      currentPositions.set(mergedPositions.subarray(0, visiblePoints * 3));
      pointsRef.current.geometry.setDrawRange(0, visiblePoints);
      posAttr.needsUpdate = true;
      prevVisiblePoints.current = visiblePoints;
    }

    if (progress >= 1) context.goNextPhase();
  });

  return (
    <CubePoints
      currentPositions={currentPositions}
      pointsRef={pointsRef}
    />
  );
}
