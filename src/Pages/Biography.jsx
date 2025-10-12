import React from 'react'
import Box from '../Components/Box'
import Render from '../Components/Render'

function Biography() {
  return (
    <div className='w-[100%] h-screen'>
      <Render>
        <Box position={[0,0,0]}/>
        <Box position={[5, 0, 0]} w={1} h={2} d={3}/>
      </Render>
    </div>
  )
}

export default Biography