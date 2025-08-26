import { createContext, Dispatch, RefObject, SetStateAction } from 'react';
import { Group, Object3DEventMap } from 'three';
import { Phase } from '@/types';

interface CubeContextType {
  clock: RefObject<number>;
  phase: Phase;
  setPhase: Dispatch<SetStateAction<Phase>>;
  phaseOrder: Phase[];
  duration: Record<Phase, number>;
  groupRef: RefObject<Group<Object3DEventMap> | null>;
  goNextPhase: () => void;
}

export const CubeContext = createContext<CubeContextType | null>(null);
