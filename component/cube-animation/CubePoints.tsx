'use client';

import { RefObject, useMemo } from 'react';
import { Points } from 'three';
import { useTheme } from 'next-themes';

const DARK_THEME_POINT_COLOR = '#e8e8e8';
const LIGHT_THEME_POINT_COLOR = '#121212';

export default function DotsPoints({
  currentPositions,
  pointsRef,
}: {
  currentPositions: Float32Array<ArrayBuffer>;
  pointsRef: RefObject<Points | null>;
}) {
  const { resolvedTheme } = useTheme();

  const pointColor = useMemo(() => {
    return resolvedTheme === 'dark'
      ? DARK_THEME_POINT_COLOR
      : LIGHT_THEME_POINT_COLOR;
  }, [resolvedTheme]);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          args={[currentPositions, 3]}
          attach="attributes-position"
        />
      </bufferGeometry>
      <pointsMaterial
        color={pointColor}
        size={0.1}
      />
    </points>
  );
}
