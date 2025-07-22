'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Points } from '@react-three/drei';

function RotatingSquare() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const cubeSize = 1;
    const divisionsPerEdge = 100;
    const jitterAmount = 0.7;

    const edges = [
      [
        [-cubeSize, -cubeSize, -cubeSize],
        [cubeSize, -cubeSize, -cubeSize],
      ],
      [
        [cubeSize, -cubeSize, -cubeSize],
        [cubeSize, cubeSize, -cubeSize],
      ],
      [
        [cubeSize, cubeSize, -cubeSize],
        [-cubeSize, cubeSize, -cubeSize],
      ],
      [
        [-cubeSize, cubeSize, -cubeSize],
        [-cubeSize, -cubeSize, -cubeSize],
      ],

      [
        [-cubeSize, -cubeSize, cubeSize],
        [cubeSize, -cubeSize, cubeSize],
      ],
      [
        [cubeSize, -cubeSize, cubeSize],
        [cubeSize, cubeSize, cubeSize],
      ],
      [
        [cubeSize, cubeSize, cubeSize],
        [-cubeSize, cubeSize, cubeSize],
      ],
      [
        [-cubeSize, cubeSize, cubeSize],
        [-cubeSize, -cubeSize, cubeSize],
      ],

      [
        [-cubeSize, -cubeSize, -cubeSize],
        [-cubeSize, -cubeSize, cubeSize],
      ],
      [
        [cubeSize, -cubeSize, -cubeSize],
        [cubeSize, -cubeSize, cubeSize],
      ],
      [
        [cubeSize, cubeSize, -cubeSize],
        [cubeSize, cubeSize, cubeSize],
      ],
      [
        [-cubeSize, cubeSize, -cubeSize],
        [-cubeSize, cubeSize, cubeSize],
      ],
    ];

    const pos: number[] = [];

    edges.forEach(([start, end]) => {
      for (let i = 0; i <= divisionsPerEdge; i++) {
        const t = i / divisionsPerEdge;
        const x = THREE.MathUtils.lerp(start[0], end[0], t);
        const y = THREE.MathUtils.lerp(start[1], end[1], t);
        const z = THREE.MathUtils.lerp(start[2], end[2], t);

        pos.push(
          x + (Math.random() - 0.5) * jitterAmount,
          y + (Math.random() - 0.5) * jitterAmount,
          z + (Math.random() - 0.5) * jitterAmount,
        );
      }
    });

    return new Float32Array(pos);
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          args={[positions, 3]}
          attach="attributes-position"
        />
      </bufferGeometry>
      <pointsMaterial
        color="white"
        size={0.01}
        sizeAttenuation={true}
      />
    </Points>
  );
}

export default function SquareDots() {
  return (
    <div className={'h-100vh absolute left-0 top-0 -z-10 w-full'}>
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight />
        <RotatingSquare />
      </Canvas>
    </div>
  );
}
