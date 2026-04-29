import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Icosahedron, MeshDistortMaterial, Stars } from '@react-three/drei'
import { useRef } from 'react'

function Planet() {
  const meshRef = useRef(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25
    }
  })

  return (
    <Float speed={2} rotationIntensity={1.4} floatIntensity={1.8}>
      <Icosahedron ref={meshRef} args={[1.4, 4]} position={[0, 0.2, 0]}>
        <MeshDistortMaterial color="#4cc9f0" emissive="#7b2cbf" emissiveIntensity={0.9} roughness={0.1} distort={0.35} speed={2.5} />
      </Icosahedron>
    </Float>
  )
}

export default function UniverseScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.7], fov: 60 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 2]} intensity={1.2} color="#90e0ef" />
      <pointLight position={[-2, -1, 2]} intensity={1} color="#7b2cbf" />
      <Stars radius={80} depth={50} count={2300} factor={4} saturation={0} fade speed={1} />
      <Planet />
    </Canvas>
  )
}
