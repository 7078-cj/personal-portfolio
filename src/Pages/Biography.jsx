import React from 'react'
import Box from '../Components/Box'
import Render from '../Components/Render'
import ControllableObject from '../Components/ControllableObject'

function Biography() {
  return (
    <div className='w-[100%] h-screen'>
      <Render>
        <Box position={[-5,0,0]} w={2} h={5} d={1}/>
        <ControllableObject initialPosition={[0,0,0]}/>
      </Render>
    </div>
  )
}

export default Biography