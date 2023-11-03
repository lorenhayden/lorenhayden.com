/* imports */
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const Scene = () => {
  const meshRef = useRef<Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.set(0, state.clock.elapsedTime, 0);
    }
  })
  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial color="#00aeff" />
    </mesh>
  )
}


const SceneCanvas = () => {
  return (
    <></>
    // <Canvas camera={{ "position": [0, 3, 5] }} style={{ "zIndex": "0", "border": "dashed 2pt orange" }}>
    //   <ambientLight />
    //   <Scene />
    // </Canvas>
  )
}

export default SceneCanvas;