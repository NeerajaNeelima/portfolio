/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Navbar from '../Components/Navbar'
import Backgroundimg from '../Components/Backgroundimg'
import Footer from "../Components/footer"
import Cardlist from '../Components/Cardlist'
import Card from '../Components/Card'
import About_body from './About_body'
import Contact_body from './Contact_body'



const Home = () => {
  return (
    <>
    <Navbar />
    <Backgroundimg />
    <h1 style={{ color:"#fff",marginTop: "20px",textAlign:"center"}}>Projects</h1>
    <Cardlist/>
    <About_body/>
    <Contact_body/>
    <Footer/>

    </>
  )
}

export default Home