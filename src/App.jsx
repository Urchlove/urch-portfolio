import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './services/Services'
import Mywork from './components/Mywork/Mywork'
import Contact from './components/contact/contact'
import Foot from './components/Foot/Foot'

function App() {
  
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Foot/>


    </div>
  )
}

export default App