import { RefObject, useRef } from 'react';
import { easeInOut } from 'motion';
import { Group, Object3DEventMap } from 'three';

export default function useCubeAnimation({
  clock,
  groupRef,
  onAnimateEnd,
}: {
  clock: RefObject<number>;
  groupRef: RefObject<Group<Object3DEventMap> | null>;
  onAnimateEnd: () => void;
}) {
  const rotateClock = useRef<number>(0);

  const rotate = (delta: number, duration: number) => {
    if (!groupRef.current) return;
    rotateClock.current += delta;
    const t = Math.min(rotateClock.current / duration, 1);
    const eased = easeInOut(t);
    groupRef.current.rotation.y = eased * Math.PI * 2;
    if (t >= 1) {
      rotateClock.current = 0;
      groupRef.current.rotation.y = 0;
      onAnimateEnd();
    }
  };

  const hold = (duration: number) => {
    const t = Math.min(clock.current / duration, 1);
    if (t >= 1) onAnimateEnd();
  };

  return {
    rotate,
    hold,
  };
}
