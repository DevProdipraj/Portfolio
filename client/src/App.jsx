import React from 'react'
import Navbar from './components/Navbar'
import HeroArea from './components/HeroArea'
import About from './components/About'
import Work from './components/Work'
import Services from './components/Services'
import WorkProcess from './components/WorkProcess'
import Contact from './components/Contact'
import BottomBar from './components/BottomBar'
// import StartProjectForm from './components/HiremeForm'

const App = () => {
  return (
    <div className='  '>
     <Navbar />
     <BottomBar/>
     <HeroArea />
     <About />
     <Work />
     {/* <StartProjectForm /> */}
     <Services />
     < WorkProcess/>
     <Contact/>
    </div>
  )
}

export default App
