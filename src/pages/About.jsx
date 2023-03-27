
import './About.css'
import React from 'react'
import Footer from '../components/Footer'
const About = () => {
  return (
    <div className='about'>
      <div className='about__content'>

      <h2>Hello I'm Shishir Chaurasiya</h2>
      <div className='profile__links'>
      <p><a href="https://shishirchaurasiya.site" target='_blank'>Portfolio</a></p>
      <p>&nbsp;|&nbsp;</p>
      <p><a href="https://github.com/Shishir435" target='_blank'>Github</a></p>
      <p>&nbsp;|&nbsp;</p>
      <p><a href="https://www.linkedin.com/in/shishir-chaurasiya-b3b7ab234/" target='_blank'>Linkedin</a></p>
      <p>&nbsp;|&nbsp;</p>
      <p><a href="https://www.instagram.com/_shishir435/" target='_blank'>Instagram</a></p>
      </div>
      <Footer isBlack/>
      </div>
    </div>
  )
}

export default About