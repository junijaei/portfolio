'use client';

import { useContext, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points } from 'three';
import { getPointsCount, mapCubePoints } from '@/utils/three-utils';
import CubeGroup from '@/component/cube-animation/CubeGroup';
import { CubeContext } from '@/component/cube-animation/CubeContext';
import CubePoints from '@/component/cube-animation/CubePoints';

function CubeBuildingPoints() {
  const pointsRef = useRef<Points>(null);
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
    if (!pointsRef.current || !context.groupRef.current) return;

    const posAttr = pointsRef.current.geometry.attributes.position;

    if (context.phase === 'animate') {
      const totalPoints = getPointsCount();
      const progress = Math.min(
        context.clock.current / context.duration.animate,
        1,
      );
      const visiblePoints = Math.floor(totalPoints * progress);

      for (let i = 0; i < visiblePoints * 3; i++)
        currentPositions[i] = mergedPositions[i];

      pointsRef.current.geometry.setDrawRange(0, visiblePoints);

      posAttr.needsUpdate = true;
      if (progress >= 1) context.goNextPhase();
    }
  });

  return (
    <CubePoints
      currentPositions={currentPositions}
      pointsRef={pointsRef}
    />
  );
}

export default function CubeBuilding() {
  return (
    <CubeGroup>
      <CubeBuildingPoints />
    </CubeGroup>
  );
}
