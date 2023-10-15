/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import About_body from './About_body'
import About_background from './About_background'
import Footer from "../Components/footer"

const About = () => {
  return (
    <div>
      <>
      <About_background/>
      <About_body />
      <Footer/>
      </>
    </div>
  )
}

export default About