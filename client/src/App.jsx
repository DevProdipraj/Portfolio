import React from 'react'
import Navbar from './components/Navbar'
import HeroArea from './components/HeroArea'
import About from './components/About'
import Work from './components/Work'
import Services from './components/Services'

const App = () => {
  return (
    <div className='  bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1a1030]'>
     <Navbar />
     <HeroArea />
     <About />
     {/* <Work /> */}
     {/* <Services /> */}
    </div>
  )
}

export default App
