'use client';

import * as THREE from 'three';
import { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';
import { easeInOut } from 'motion';
import { getPointsCount, mapCubePoints } from '@/utils/three-utils';

type Phase = 'fall' | 'unclean' | 'rotate' | 'hold';
const PHASE_ORDER: Phase[] = ['fall', 'unclean', 'rotate', 'hold'];
const DURATION = {
  fall: 1,
  unclean: 1,
  rotate: 1,
  hold: 1,
};

export default function DotsRefactoring() {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);
  const clock = useRef(0);
  const rotateClock = useRef(0);
  const [phase, setPhase] = useState<Phase>('fall');

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

  const goNextPhase = () => {
    clock.current = 0;
    const currentIndex = PHASE_ORDER.findIndex(p => p === phase);
    const nextIndex = (currentIndex + 1) % PHASE_ORDER.length;
    setPhase(PHASE_ORDER[nextIndex]);
  };

  const resetPosition = () => {
    if (!groupRef.current) return;
    groupRef.current.visible = false;
    for (let i = 0; i < getPointsCount() * 3; i++) currentPositions[i] = 0;

    // 위치, 회전 초기화
    groupRef.current.position.set(0, 0, 0);
    groupRef.current.rotation.set(0, 0, 0);
  };

  useFrame((_, delta) => {
    if (!pointsRef.current || !groupRef.current) return;

    clock.current += delta;
    const posAttr = pointsRef.current.geometry.attributes.position;

    switch (phase) {
      case 'fall': {
        groupRef.current.visible = true;
        const t = Math.min(clock.current / DURATION.fall, 1);
        const eased = easeInOut(t);

        for (let i = 0; i < getPointsCount() * 3; i++) {
          const interpolated = THREE.MathUtils.lerp(
            fallStartPositions[i],
            fallEndPositions[i],
            eased,
          );
          currentPositions[i] = interpolated + jitter();
        }

        if (t >= 1) goNextPhase();
        break;
      }
      case 'unclean': {
        const t = Math.min(clock.current / DURATION.unclean, 1);
        const shakeStrength = (1 - t) * 0.7;

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

        if (t >= 1) goNextPhase();
        break;
      }
      case 'rotate': {
        rotateClock.current += delta;
        const t = Math.min(rotateClock.current / DURATION.rotate, 1);
        const eased = easeInOut(t);
        groupRef.current.rotation.y = eased * Math.PI * 2;

        if (t >= 1) {
          rotateClock.current = 0;
          groupRef.current.rotation.y = 0;
          goNextPhase();
        }
        break;
      }
      case 'hold': {
        const t = Math.min(clock.current / DURATION.hold, 1);
        if (t >= 1) goNextPhase();
        break;
      }
    }
    posAttr.needsUpdate = true;
  });

  return (
    <group
      ref={groupRef}
      scale={[5, 5, 5]}
    >
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            args={[currentPositions, 3]}
            attach="attributes-position"
          />
        </bufferGeometry>
        <pointsMaterial
          color="#000"
          depthWrite={false}
          size={0.1}
          sizeAttenuation={true}
        />
      </points>
    </group>
  );
}
