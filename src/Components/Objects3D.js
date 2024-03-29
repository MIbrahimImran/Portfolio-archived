import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function BackgroundStars() {
  const mesh = useRef();

  useFrame((state, delta) => (mesh.current.position.z += 0.05));
  return (
    <Stars
      ref={mesh}
      radius={100}
      depth={100}
      count={5000}
      factor={7}
      saturation={1}
      fade
    ></Stars>
  );
}

function BackgroundSphere() {
  const mesh = useRef();

  useFrame((state, delta) => (mesh.current.rotation.z += 0.01));
  return (
    <mesh ref={mesh} position={[0, -2, 0]}>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color={'red'} />
    </mesh>
  );
}

export { BackgroundStars, BackgroundSphere };
