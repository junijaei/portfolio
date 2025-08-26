import { useRef, useState } from 'react';
import { Group } from 'three';
import useCubeAnimation from '@/component/cube-animation/useCubeAnimation';
import { useFrame } from '@react-three/fiber';
import { Phase } from '@/types';

export default function useAnimationPhase() {
  const PHASE_ORDER: Phase[] = ['animate', 'rotate', 'hold'];
  const DURATION: Record<Phase, number> = {
    animate: 2,
    rotate: 1,
    hold: 1,
  };
  const groupRef = useRef<Group>(null);
  const [phase, setPhase] = useState<Phase>('animate');
  const clock = useRef(0);

  const goNextPhase = () => {
    clock.current = 0;
    const currentIndex = PHASE_ORDER.findIndex(p => p === phase);
    const nextIndex = (currentIndex + 1) % PHASE_ORDER.length;
    setPhase(PHASE_ORDER[nextIndex]);
  };

  const { rotate, hold } = useCubeAnimation({
    clock,
    groupRef,
    onAnimateEnd: goNextPhase,
  });

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    clock.current += delta;
    switch (phase) {
      case 'rotate':
        rotate(delta, DURATION.rotate);
        break;
      case 'hold':
        hold(DURATION.hold);
        break;
    }
  });

  return {
    groupRef,
    phase,
    setPhase,
    phaseOrder: PHASE_ORDER,
    duration: DURATION,
    clock,
    goNextPhase,
  };
}
