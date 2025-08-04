'use client';

import { Canvas } from '@react-three/fiber';
import { ReactNode } from 'react';

export default function Scene({ children }: { children: ReactNode }) {
  return (
    <Canvas camera={{ position: [10, 15, 10], fov: 75 }}>{children}</Canvas>
  );
}
