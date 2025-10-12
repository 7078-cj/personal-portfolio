import React from 'react'


function Box({position, w=2, h=5, d=1}) {
  return (
     <mesh rotation={[0.4, 0.5, 0]}  position={position}>
      <boxGeometry args={[w, h, d]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

export default Box