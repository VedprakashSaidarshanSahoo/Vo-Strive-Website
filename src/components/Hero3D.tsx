import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const Hero3D: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;