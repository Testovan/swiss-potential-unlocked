import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// Planet component with rotation and mouse interaction
function Planet({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Slow rotation around Y-axis (20s per rotation)
      meshRef.current.rotation.y += delta * 0.05;
      
      // Subtle mouse parallax
      meshRef.current.rotation.x = mousePosition.y * 0.1;
      meshRef.current.rotation.z = mousePosition.x * 0.05;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2, 32, 32]} position={[2, 0, 0]}>
      <meshStandardMaterial
        color="#8B7355"
        roughness={0.7}
        metalness={0.3}
        emissive="#2E1B0A"
        emissiveIntensity={0.1}
      />
    </Sphere>
  );
}

// Floating particles component
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlePositions = useMemo(() => {
    const count = 50;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;     // x
      positions[i + 1] = (Math.random() - 0.5) * 20; // y  
      positions[i + 2] = (Math.random() - 0.5) * 10; // z
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.getElapsedTime();
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        // Gentle floating movement
        positions[i + 1] += Math.sin(time * 0.5 + i) * 0.001;
        positions[i] += Math.cos(time * 0.3 + i) * 0.0005;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlePositions.length / 3}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#CED4DA"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main 3D Scene component
function Scene({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  return (
    <>
      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.2} color="#FDFCF9" />
      <directionalLight
        position={[-5, 5, 5]}
        intensity={0.8}
        color="#FDFCF9"
        castShadow
      />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#2E7D32" />
      
      {/* Background stars */}
      <Stars
        radius={50}
        depth={20}
        count={1000}
        factor={3}
        saturation={0}
        fade
        speed={0.3}
      />
      
      {/* Main planet */}
      <Planet mousePosition={mousePosition} />
      
      {/* Floating particles */}
      <FloatingParticles />
    </>
  );
}

// Mobile fallback component
function MobileFallback() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-80 h-80 rounded-full bg-gradient-to-br from-[#8B7355] via-[#5D4D3F] to-[#2E1B0A] 
                   shadow-[0_0_120px_rgba(139,115,85,0.3)] opacity-80"
      />
      
      {/* Subtle glow particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-silver-gray rounded-full opacity-60"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export const SwissSpaceAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [useWebGL, setUseWebGL] = useState(true);

  // Detect mobile and WebGL support
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        setUseWebGL(!!gl);
      } catch (e) {
        setUseWebGL(false);
      }
    };

    checkMobile();
    checkWebGL();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse tracking for parallax
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Fallback for mobile or no WebGL
  if (isMobile || !useWebGL) {
    return <MobileFallback />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance" 
        }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <Scene mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};