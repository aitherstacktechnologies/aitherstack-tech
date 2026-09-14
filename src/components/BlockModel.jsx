import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ContactShadows, Environment, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const blocks = [
  { position: [-1.75, -1.15, -0.35], scale: [2.25, 2.25, 2.25], color: '#0a0f1a', roughness: 0.15, metalness: 0.95 },
  { position: [0.15, -1.55, 0.1], scale: [1.45, 1.45, 1.45], color: '#050912', roughness: 0.25, metalness: 0.85 },
  { position: [1.55, -0.75, 0.0], scale: [1.15, 2.75, 1.15], color: '#0d1526', roughness: 0.12, metalness: 0.75 },
  { position: [-0.65, -0.45, 1.05], scale: [0.95, 0.95, 0.95], color: '#080e1a', roughness: 0.2, metalness: 0.9 },
  { position: [1.05, -0.18, -1.0], scale: [0.82, 0.82, 0.82], color: '#FF6B1A', roughness: 0.05, metalness: 0.98 },
];

function Block({ item, index }) {
  const materialRef = useRef(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (materialRef.current) {
      materialRef.current.metalness = item.metalness + Math.sin(t * 0.8 + index) * 0.02;
      materialRef.current.roughness = item.roughness + Math.cos(t * 0.7 + index) * 0.015;
    }
  });

  return (
    <mesh
      position={item.position}
      scale={item.scale}
      castShadow
      receiveShadow
      rotation={[0.08 * (index + 1), 0.18 * (index + 1), 0.04 * (index + 1)]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
        ref={materialRef}
        color={item.color}
        roughness={item.roughness}
        metalness={item.metalness}
        clearcoat={0.9}
        clearcoatRoughness={0.1}
        envMapIntensity={1.5}
        ior={2.33}
        transmission={item.color === '#FF6B1A' ? 0.3 : 0}
        thickness={item.color === '#FF6B1A' ? 0.5 : 0}
      />
    </mesh>
  );
}

function BlockScene() {
  const controls = useThree((state) => state.controls);
  const lastInteraction = useRef(0);
  const blockGroup = useMemo(() => blocks, []);

  useFrame((state, delta) => {
    if (!controls) return;
    const elapsed = state.clock.elapsedTime * 1000;
    const idle = elapsed - lastInteraction.current > 1600;
    controls.autoRotate = idle;
    controls.autoRotateSpeed = 0.45;
    controls.update(delta);
  });

  return (
    <>
      <Environment preset="city" background={false} />
      <ambientLight intensity={0.25} color="#FF6B1A" />
      <directionalLight position={[8, 10, 8]} intensity={2.5} castShadow shadow-mapSize={[2048, 2048]} color="#ffffff" />
      <directionalLight position={[-6, 5, -4]} intensity={1.2} color="#FF6B1A" />
      <pointLight position={[0, 6, 4]} color="#FF6B1A" intensity={2} distance={15} decay={2} />
      <pointLight position={[5, 3, -5]} color="#004466" intensity={1} distance={15} decay={2} />
      <spotLight position={[0, 8, 0]} angle={0.3} penumbra={0.5} intensity={3} color="#FF6B1A" distance={20} decay={2} target={[0, 0, 0]} />

      <Float speed={0.6} rotationIntensity={0.15} floatIntensity={0.4}>
        <group ref={(node) => (node && (node.userData.blocks = blockGroup))}>
          {blockGroup.map((item, index) => <Block key={index} item={item} index={index} />)}
        </group>
      </Float>

      <ContactShadows position={[0, -2.55, 0]} opacity={0.25} scale={8} blur={3} far={5} color="#FF6B1A" />
    </>
  );
}

export default function BlockModel() {
  return (
    <div className="relative h-[62vh] w-full min-h-[420px] sm:h-[72vh] lg:h-[78vh]">
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 1.6, 7.4], fov: 42, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.2;
        }}
      >
        <BlockScene />
        <OrbitControls
          enableDamping
          dampingFactor={0.06}
          rotateSpeed={0.55}
          zoomEnabled={false}
          panEnabled={false}
          minPolarAngle={Math.PI * 0.28}
          maxPolarAngle={Math.PI * 0.62}
          minDistance={5.5}
          maxDistance={9.5}
          autoRotate={false}
          autoRotateSpeed={0.45}
          onStart={() => {
            lastInteraction.current = performance.now();
          }}
          onEnd={() => {
            lastInteraction.current = performance.now();
          }}
        />
      </Canvas>
    </div>
  );
}