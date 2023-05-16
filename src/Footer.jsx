import React from 'react'

function Footer({ developer, productionYear }) {
  
  return (
    <footer className='Footer'>
      <small>Copyright &copy; {developer} Development {productionYear}</small>
    </footer>
  )
}

export default Footer
