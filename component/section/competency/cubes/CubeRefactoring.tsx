'use client';

import { MathUtils, Points } from 'three';
import { useContext, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easeInOut } from 'motion';
import { getPointsCount, mapCubePoints } from '@/utils/three-utils';
import CubeGroup from '@/component/cube-animation/CubeGroup';
import CubePoints from '@/component/cube-animation/CubePoints';
import { CubeContext } from '@/component/cube-animation/CubeContext';

function CubeRefactoringPoints() {
  const pointsRef = useRef<Points>(null);
  const context = useContext(CubeContext);

  if (!context) throw new Error();

  const jitter = () => MathUtils.randFloat(-0.25, 0.25);

  const {
    mergedPositions,
    fallStartPositions,
    fallEndPositions,
    currentPositions,
  } = useMemo(() => {
    const result = mapCubePoints(({ point }) => ({
      merged: [point.x, point.y, point.z],
      fallStart: [
        point.x + jitter(),
        point.y + jitter() + 3,
        point.z + jitter(),
      ],
      fallEnd: [point.x + jitter(), point.y + jitter(), point.z + jitter()],
    }));

    return {
      mergedPositions: new Float32Array(result.flatMap(r => r.merged)),
      fallStartPositions: new Float32Array(result.flatMap(r => r.fallStart)),
      fallEndPositions: new Float32Array(result.flatMap(r => r.fallEnd)),
      currentPositions: new Float32Array(result.flatMap(r => r.fallStart)),
    };
  }, []);

  useFrame(() => {
    if (!pointsRef.current || !context.groupRef.current) return;

    const posAttr = pointsRef.current.geometry.attributes.position;

    if (context.phase === 'animate') {
      const t = Math.min(context.clock.current / context.duration.animate, 1);
      if (t < 0.5) {
        // [0.0 ~ 0.5) → fall 단계
        const localT = t / 0.5;
        const eased = easeInOut(localT);

        for (let i = 0; i < getPointsCount() * 3; i++) {
          const interpolated = MathUtils.lerp(
            fallStartPositions[i],
            fallEndPositions[i],
            eased,
          );
          currentPositions[i] = interpolated + jitter();
        }
      } else {
        // [0.5 ~ 1.0] → unclean 단계
        const localT = (t - 0.5) / 0.5;
        const shakeStrength = (1 - localT) * 0.7;

        for (let i = 0; i < mergedPositions.length; i += 3) {
          const baseX = mergedPositions[i];
          const baseY = mergedPositions[i + 1];
          const baseZ = mergedPositions[i + 2];

          currentPositions[i] = baseX + (Math.random() - 0.5) * shakeStrength;
          currentPositions[i + 1] =
            baseY + (Math.random() - 0.5) * shakeStrength;
          currentPositions[i + 2] =
            baseZ + (Math.random() - 0.5) * shakeStrength;
        }
      }
      if (t >= 1) context.goNextPhase();
    }
    posAttr.needsUpdate = true;
  });

  return (
    <CubePoints
      currentPositions={currentPositions}
      pointsRef={pointsRef}
    />
  );
}

export default function CubeRefactoring() {
  return (
    <CubeGroup>
      <CubeRefactoringPoints />
    </CubeGroup>
  );
}
