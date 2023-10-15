import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from "../Components/footer"
import Backgroundimg2 from '../Components/Backgroundimg2'
import Card from '../Components/Card'
import Cardlist from '../Components/Cardlist'
const Project = () => {
  return (
    <div>
      <>
      
      <Backgroundimg2 heading="PROJECTS" text="Some of my Projects"/>
      <h1 style={{ color:"#fff",marginTop: "20px",textAlign:"center"}}>Projects</h1>
      <Cardlist/>
      <Footer/>
      </>
    </div>
  )
}

export default Project