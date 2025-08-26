import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedSphere({ position, scale, color }: { position: [number, number, number], scale: number, color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} scale={scale} args={[1, 32, 32]}>
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.6}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

function AnimatedBox({ position, scale, color }: { position: [number, number, number], scale: number, color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.6) * 0.3;
    }
  });

  return (
    <Box ref={meshRef} position={position} scale={scale} args={[1, 1, 1]}>
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.4}
        roughness={0.3}
        metalness={0.7}
      />
    </Box>
  );
}

function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#22c55e" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#fbbf24" />
      <pointLight position={[0, 0, 10]} intensity={0.8} color="#ffffff" />
      
      {/* Animated objects with Swiss colors */}
      <AnimatedSphere position={[-4, 2, -2]} scale={1.5} color="#dc2626" />
      <AnimatedSphere position={[4, -1, -3]} scale={1.2} color="#ffffff" />
      <AnimatedBox position={[2, 3, -1]} scale={0.8} color="#22c55e" />
      <AnimatedBox position={[-3, -2, -4]} scale={1.1} color="#fbbf24" />
      <AnimatedSphere position={[0, 0, -5]} scale={2} color="#1e40af" />
      <AnimatedBox position={[5, 1, -2]} scale={0.7} color="#dc2626" />
      
      {/* Subtle orbit controls (disabled interaction) */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate={false}
        autoRotate 
        autoRotateSpeed={0.5}
      />
    </>
  );
}

export const SwissBackground3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        className="w-full h-full"
      >
        <Scene />
      </Canvas>
    </div>
  );
};