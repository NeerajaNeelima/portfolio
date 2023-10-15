import React from 'react'
import Frontend from "../assets/frontend.jpeg"
import Frontend2 from "../assets/frontend2.jpeg"
import { NavLink } from 'react-router-dom'
import './About.css'
const About_body = () => {
  return (
    <div>
    <div className="container">
    <div className='left'>
      <h1>Who Am I?</h1>
      <p>Im a react front-end developer. I create responsive secure websites for my clients.</p>
      <NavLink to="/contact" className="card__contact">Contact</NavLink>
    </div>
    <div className='right'>
      <div className='img-container'>
      <div className='img-top'>
      <img src={Frontend} alt="img not found"/>
      </div>
      <div className='img-bottom'>
        <img src={Frontend2} alt='img not found'/>
      </div>
      </div>
      
      
    </div>
    </div>
    </div>
  )
}

export default About_body