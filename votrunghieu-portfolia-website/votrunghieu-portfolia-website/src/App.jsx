import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components//about/About'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Testimonials from './components/testimonials/Testimonials'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact/>
      <Footer />
    </>
  )
}

export default App