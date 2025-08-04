'use client';
import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { easeInOut } from 'motion';
import { getPointsCount, mapCubePoints } from '@/utils/three-utils';

type Phase = 'build' | 'rotate' | 'hold';
const PHASE_ORDER: Phase[] = ['build', 'rotate', 'hold'];
const DURATION = {
  fall: 2,
  rotate: 1,
  hold: 1,
};

export default function DotsBuilding() {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [phase, setPhase] = useState<Phase>('build');
  const clock = useRef(0);
  const rotateClock = useRef(0);

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

    const posAttr = pointsRef.current.geometry.attributes.position;
    clock.current += delta;

    switch (phase) {
      case 'build': {
        groupRef.current.visible = true;
        const totalPoints = getPointsCount();
        const progress = Math.min(clock.current / 2, 1);
        const visiblePoints = Math.floor(totalPoints * progress);

        if (!posAttr) break;

        for (let i = 0; i < visiblePoints * 3; i++)
          currentPositions[i] = mergedPositions[i];

        pointsRef.current.geometry.setDrawRange(0, visiblePoints);

        posAttr.needsUpdate = true;

        if (progress >= 1) goNextPhase();
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
          color={'#000'}
          depthWrite={false}
          size={0.1}
          sizeAttenuation={true}
        />
      </points>
    </group>
  );
}
