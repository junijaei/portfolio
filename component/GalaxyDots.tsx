'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PointMaterial, Points } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function GalaxyPoints() {
  const pointsRef = useRef<THREE.Points>(null);
  const numDots = 5000;
  const { size } = useThree(); // 화면 크기 가져오기

  const radiusSize = useMemo(() => {
    return {
      min: Math.min(size.width, size.height) / 15,
      max: Math.min(size.width, size.height) / 7,
    };
  }, [size]);

  const pointSize = useMemo(() => {
    console.log(size);
    const base = 0.8; // 기준 크기
    const scale = Math.min(Math.min(size.width, size.height) / 800, 0.15); // 800 기준으로 스케일링
    return base * scale;
  }, [size]);

  // 생성 시점에만 geometry 데이터 계산
  const positions = useMemo(() => {
    const posArray = new Float32Array(numDots * 3);

    for (let i = 0; i < numDots; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius =
        radiusSize.min + Math.random() * (radiusSize.max - radiusSize.min);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      posArray.set([x, y, z], i * 3);
    }

    return posArray;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Points
      ref={pointsRef}
      frustumCulled={false}
      positions={positions}
    >
      <PointMaterial
        sizeAttenuation
        color="#ffffff"
        size={pointSize}
      />
    </Points>
  );
}

export default function GalaxyDotsScene() {
  return (
    <div className={'absolute left-1/3 right-0 top-0 -z-10 h-full'}>
      <Canvas camera={{ position: [0, 0, 200], fov: 75 }}>
        <ambientLight />
        <GalaxyPoints />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
