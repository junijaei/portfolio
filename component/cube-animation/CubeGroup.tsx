'use client';

import { ReactNode } from 'react';
import { CubeContext } from '@/component/cube-animation/CubeContext';
import useAnimationPhase from '@/component/cube-animation/useAnimationPhase';

export default function CubeGroup({ children }: { children: ReactNode }) {
  const animationPhase = useAnimationPhase();
  return (
    <CubeContext value={{ ...animationPhase }}>
      <group
        ref={animationPhase.groupRef}
        scale={[5, 5, 5]}
      >
        {children}
      </group>
    </CubeContext>
  );
}
