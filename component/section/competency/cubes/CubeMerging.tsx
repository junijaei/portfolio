'use client';

import { useContext, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import CubeCooperation from '@/component/section/competency/cubes/CubeCooperation';
import { CubeContext } from '@/component/cube-animation/CubeContext';

const CUBE_POSITIONS = [
  [5, -5, -5],
  [-5, 3, -5],
  [-5, -5, 5],
];
export default function CubeMergingPoints() {
  const context = useContext(CubeContext);

  if (!context) throw new Error();

  const [mergeProgress, setMergeProgress] = useState(0);

  useFrame(() => {
    if (!context.groupRef.current || context.phase !== 'animate') return;

    const t = Math.min(context.clock.current / context.duration.animate, 1);
    setMergeProgress(t);
    context.groupRef.current.position.set(0, 0, 0);
    context.groupRef.current.rotation.set(0, 0, 0);

    if (t >= 1) context.goNextPhase();
  });

  return (
    <>
      {CUBE_POSITIONS.map((pos, i) => (
        <CubeCooperation
          key={i}
          initialPosition={pos}
          progress={context.phase === 'animate' ? mergeProgress : 1}
        />
      ))}
    </>
  );
}
