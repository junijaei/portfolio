'use client';

import { Canvas, CanvasProps } from '@react-three/fiber';
import { ReactNode } from 'react';

interface Scene extends CanvasProps {
  children: ReactNode;
}
export default function Scene({ children, ...rest }: Scene) {
  return (
    <Canvas
      camera={{ position: [10, 15, 10], fov: 75 }}
      {...rest}
    >
      {children}
    </Canvas>
  );
}
