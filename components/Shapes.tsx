'use client';

import { Canvas } from '@react-three/fiber';
import { ContactShadows, Float, Environment, MeshDistortMaterial } from '@react-three/drei';
import { Suspense } from 'react';

export default function Shapes() {
  return (
    <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          
          {/* Shape 1: The Data Orb */}
          <Float speed={2} rotationIntensity={1} floatIntensity={1} position={[3, 1, -2]}>
            <mesh scale={2.5}>
              <sphereGeometry args={[1, 64, 64]} />
              <MeshDistortMaterial
                color="#4f46e5" /* Indigo */
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0.2}
              />
            </mesh>
          </Float>

          {/* Shape 2: The Code Cube */}
          <Float speed={1.5} rotationIntensity={2} floatIntensity={1} position={[-3, -1, -1]}>
             <mesh scale={1.5}>
               <boxGeometry args={[1, 1, 1]} />
               <meshStandardMaterial color="#06b6d4" roughness={0.1} /> {/* Cyan */}
             </mesh>
          </Float>

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}