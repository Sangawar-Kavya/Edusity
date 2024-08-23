import React from 'react'
import Navbar from './components/Navbar'
import Background from './components/Background'
import Program from './components/Program'
import Title from './components/Title'
import About from './components/About'
import Campus from './components/Campus'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Background />
      <div className='container'>
        <Title subTitle='OUR PROGRAM' title='What We Offer'/>
        <Program />
        <About />
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What Students Says'/>
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App

