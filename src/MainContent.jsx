import React from 'react'
import { useState } from 'react'

function MainContent() {

  const [color, setColor] = useState('');

  
 const myName = "Awwal"
 
 const backgroundColor = {backgroundColor: color}


  return (
    <main className='MainContent'>

          <input 
              className='colour-box'
              style={backgroundColor}
              value={(!color) ? "Empty Value" : color}
          />
          

          <input 
              type="text"
              required
              placeholder='Type color name'
              value={color}
              onChange={(e)=>{setColor(e.target.value)}}
          />
      
    </main>
  )
}

export default MainContent
