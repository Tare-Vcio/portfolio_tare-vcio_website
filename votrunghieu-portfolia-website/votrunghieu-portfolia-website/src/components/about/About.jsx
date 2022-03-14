//rafce create default react
import React from 'react'
import './about.css'
import Me from '../../assets/portfolio2.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'> 
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className="about__icon"/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>5+ Viet Nam</small>
            </article>
            <article className='about__card'>
              <AiOutlineFolderOpen className="about__icon"/>
              <h5>Project</h5>
              <small>5+ completed</small>
            </article>
          </div>


          <p>
            Hey yo! Everyone. I'm here Tare and you can call me by another name. That is HieuChubby 
            I'm just a new front-end developer. Hope anyone can see my portfolio made a friend with me.
            Glad to see you buddy ^^          
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About