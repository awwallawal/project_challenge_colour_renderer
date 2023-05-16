import { useState } from 'react'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import './App.css'

function App() {
  
  
  
  const title = "Colour Renderer";
  const developer = "Awwal";
  const productionYear = new Date().getFullYear();

  return (
    <div className='App'>
      <Header
        title = {title}
      />
      <MainContent />
      <Footer 
        developer = {developer}
        productionYear = {productionYear}
      />
    </div>
  )
}

export default App
