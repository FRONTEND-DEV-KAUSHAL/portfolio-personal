"use client"

import { useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function Helmet3DModel({ modelPath }: { modelPath?: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const targetRotation = useRef({ x: 0, y: 0 })
  const currentRotation = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    targetRotation.current = {
      x: mousePosition.y * 0.4,
      y: mousePosition.x * 0.4,
    }
  }, [mousePosition])

  useFrame((state) => {
    if (meshRef.current) {
      const elapsedTime = state.clock.getElapsedTime()
      
      // Lerp mouse interaction rotation
      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.05
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.05

      meshRef.current.rotation.x = currentRotation.current.x + elapsedTime * 0.1
      meshRef.current.rotation.y = currentRotation.current.y + elapsedTime * 0.15
    }
  })

  return (
    <mesh ref={meshRef} scale={1.6}>
      <torusKnotGeometry args={[1, 0.35, 120, 16, 2, 3]} />
      <meshStandardMaterial
        color="#c8f550"
        wireframe
        emissive="#c8f550"
        emissiveIntensity={0.2}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  )
}
