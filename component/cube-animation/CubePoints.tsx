'use client';

import { RefObject } from 'react';
import { Points } from 'three';
import { useTheme } from 'next-themes';

export default function DotsPoints({
  currentPositions,
  pointsRef,
}: {
  currentPositions: Float32Array<ArrayBuffer>;
  pointsRef: RefObject<Points | null>;
}) {
  const { resolvedTheme } = useTheme();

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          args={[currentPositions, 3]}
          attach="attributes-position"
        />
      </bufferGeometry>
      <pointsMaterial
        color={resolvedTheme === 'dark' ? '#e8e8e8' : '#121212'}
        size={0.1}
      />
    </points>
  );
}
