import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Particles = ({ count = 8000 }) => {
  const points = useRef()

  // Generate random positions
  const particlesPosition = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return pos
  }, [count])

  useFrame((state) => {
    const { mouse } = state
    // Subtle rotation based on mouse position
    points.current.rotation.y = THREE.MathUtils.lerp(points.current.rotation.y, (mouse.x * Math.PI) / 6, 0.05)
    points.current.rotation.x = THREE.MathUtils.lerp(points.current.rotation.x, (mouse.y * Math.PI) / 6, 0.05)
    
    // Constant slow rotation
    points.current.rotation.z += 0.0005
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#ff1a1a"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

const ParticleBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#0a0a0a']} />
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  )
}

export default ParticleBackground
