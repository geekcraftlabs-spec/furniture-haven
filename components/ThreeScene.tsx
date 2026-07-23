"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

// A simple 3D furniture piece (geometric modern chair)
function FurnitureModel() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]} scale={1.2}>
      {/* Seat */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <boxGeometry args={[1.8, 0.2, 1.8]} />
        <meshStandardMaterial color="#d4b896" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Backrest */}
      <mesh position={[0, 2.2, -0.9]} castShadow>
        <boxGeometry args={[1.6, 0.8, 0.15]} />
        <meshStandardMaterial color="#8b6914" roughness={0.4} metalness={0.05} />
      </mesh>

      {/* Four legs */}
      {[
        [-0.7, -0.7],
        [0.7, -0.7],
        [-0.7, 0.7],
        [0.7, 0.7],
      ].map(([x, z]) => (
        <mesh key={`leg-${x}-${z}`} position={[x, 0.4, z]} castShadow>
          <cylinderGeometry args={[0.06, 0.08, 0.8]} />
          <meshStandardMaterial color="#4a3520" roughness={0.6} metalness={0.2} />
        </mesh>
      ))}

      {/* Armrests */}
      {[
        [-0.95, 0],
        [0.95, 0],
      ].map(([x]) => (
        <mesh key={`arm-${x}`} position={[x, 1.6, 0]} castShadow>
          <boxGeometry args={[0.1, 0.6, 1.6]} />
          <meshStandardMaterial color="#4a3520" roughness={0.5} metalness={0.1} />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Canvas
        shadows
        camera={{ position: [4, 3, 5], fov: 45 }}
        className="rounded-2xl"
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} angle={0.3} intensity={1} castShadow />
        <spotLight position={[-5, 5, -5]} angle={0.3} intensity={0.5} />
        <Environment preset="studio" />

        <FurnitureModel />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 3.5}
        />
      </Canvas>
    </div>
  );
}