import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'


function ControllableObject({initialPosition, w=2, h=5, d=1}) {
    const meshRef = useRef()
    const [position, setPosition] = useState(initialPosition)
    const keys = useRef({ w: false, a: false, s: false, d: false })

    // Track key down/up
    useEffect(() => {
        const handleKeyDown = (e) => {
        if (keys.current[e.key.toLowerCase()] !== undefined) {
            keys.current[e.key.toLowerCase()] = true
        }
        }
        const handleKeyUp = (e) => {
        if (keys.current[e.key.toLowerCase()] !== undefined) {
            keys.current[e.key.toLowerCase()] = false
        }
        }

        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

        return () => {
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('keyup', handleKeyUp)
        }
    }, [])

    
    useFrame(() => {
        const [x, y, z] = position
        const speed = 0.1
        let newX = x
        let newZ = z

        if (keys.current.w) newZ -= speed
        if (keys.current.s) newZ += speed
        if (keys.current.a) newX -= speed
        if (keys.current.d) newX += speed

        setPosition([newX, y, newZ])
        if (meshRef.current) meshRef.current.position.set(newX, y, newZ)
    })

  return (
     <mesh ref={meshRef} rotation={[0.4, 0.5, 0]}>
      <boxGeometry args={[w, h, d]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

export default ControllableObject