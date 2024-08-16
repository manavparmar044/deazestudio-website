import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Brands from './components/Brands/Brands'
import Services from './components/Services/Services'

function App() {

  return (
    <>
      <div className="App">
      <div>
        <div className="bluebg-gradient"></div>
        <div className="bluebg1-gradient"></div>
      <Header />
      <Hero />
      </div>
      <Brands />
      <Services />
      </div>
    </>
  )
}

export default App
