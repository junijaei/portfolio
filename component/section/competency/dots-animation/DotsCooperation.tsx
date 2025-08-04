'use client';

import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { mapCubePoints } from '@/utils/three-utils';

type DotsCooperationProps = {
  startPos: THREE.Vector3;
  progress: number;
};

export default function DotsCooperation({
  startPos,
  progress,
}: DotsCooperationProps) {
  const pointsRef = useRef<THREE.Points>(null);

  // 최초 edge 점 위치 (상대좌표)
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

  // 현재 점 위치 배열 (동적 갱신용)

  useFrame((_, delta) => {
    if (!pointsRef.current) return;

    for (let i = 0; i < edgePoints.length; i += 3) {
      const x0 = edgePoints[i] + startPos.x;
      const y0 = edgePoints[i + 1] + startPos.y;
      const z0 = edgePoints[i + 2] + startPos.z;

      const x1 = edgePoints[i];
      const y1 = edgePoints[i + 1];
      const z1 = edgePoints[i + 2];

      currentPositions[i] = THREE.MathUtils.lerp(x0, x1, progress);
      currentPositions[i + 1] = THREE.MathUtils.lerp(y0, y1, progress);
      currentPositions[i + 2] = THREE.MathUtils.lerp(z0, z1, progress);
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.visible = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          args={[currentPositions, 3]}
          attach="attributes-position"
        />
      </bufferGeometry>
      <pointsMaterial
        color="#000"
        size={0.1}
        sizeAttenuation={true}
      />
    </points>
  );
}
