import React from 'react'
import { useState } from 'react'

function MainContent() {

  const [color, setColor] = useState('');
  const [changeColor, setChangeColor] = useState('Empty Value')
  
 const myName = "Awwal"
 const handleColor = () => {
  return color
 }

 const backColor = {backgroundColor: color}


  return (
    <main className='MainContent'>

          <div 
              className='colour-box'
              style={backColor}
          >
            {handleColor()}
          </div>

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
