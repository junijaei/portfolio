'use client';

import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import DotsCooperation from '@/component/DotsCooperation';
import { easeInOut } from 'motion';

type Phase = 'merge' | 'rotate' | 'hold';
const PHASE_ORDER: Phase[] = ['merge', 'rotate', 'hold'];
const DURATION = {
  merge: 2,
  rotate: 1,
  hold: 1,
};

export default function DotsMerging() {
  const cubes = [
    new THREE.Vector3(5, -5, -5),
    new THREE.Vector3(-5, 3, -5),
    new THREE.Vector3(-5, -5, 5),
  ];

  const [phase, setPhase] = useState<Phase>('merge');
  const clock = useRef(0);
  const groupRef = useRef<THREE.Group>(null);
  const [mergeProgress, setMergeProgress] = useState(0);

  const goNextPhase = () => {
    clock.current = 0;
    const currentIndex = PHASE_ORDER.findIndex(p => p === phase);
    const nextIndex = (currentIndex + 1) % PHASE_ORDER.length;
    setPhase(PHASE_ORDER[nextIndex]);
  };

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    clock.current += delta;

    switch (phase) {
      case 'merge': {
        const progress = Math.min(clock.current / DURATION.merge, 1);
        setMergeProgress(progress);
        groupRef.current.position.set(0, 0, 0);
        groupRef.current.rotation.set(0, 0, 0);

        if (progress >= 1) goNextPhase();
        break;
      }
      case 'rotate': {
        const t = Math.min(clock.current / DURATION.rotate, 1);
        const eased = easeInOut(t);
        groupRef.current.rotation.y = eased * Math.PI * 2;

        if (t >= 1) goNextPhase();
        break;
      }
      case 'hold': {
        const t = Math.min(clock.current / DURATION.hold, 1);
        if (t >= 1) goNextPhase();
        break;
      }
    }
  });

  return (
    <group
      ref={groupRef}
      scale={[5, 5, 5]}
    >
      {cubes.map((pos, i) => (
        <DotsCooperation
          key={i}
          progress={phase === 'merge' ? mergeProgress : 1} // merge 중일 때만 보간 진행, 그 외는 중앙 위치(progress=1)
          startPos={pos}
        />
      ))}
    </group>
  );
}
