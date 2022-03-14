import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/avatarNa.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello Everyone!</h5>
        <h1>I'm Tare Vico</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA/>
        <HeaderSocials/>
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header