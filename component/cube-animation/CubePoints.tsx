'use client';

import { RefObject } from 'react';
import { Points } from 'three';

export default function DotsPoints({
  currentPositions,
  pointsRef,
}: {
  currentPositions: Float32Array<ArrayBuffer>;
  pointsRef: RefObject<Points | null>;
}) {
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
      />
    </points>
  );
}
