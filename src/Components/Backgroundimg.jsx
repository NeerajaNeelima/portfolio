import "./Backgroundimg.css"
import React from 'react'
import IntroImg from '../assets/background8.avif';
import {Link } from 'react-router-dom'
import pimage from '../assets/profile-photo.jpg'
import { useTypewriter,Cursor } from "react-simple-typewriter";
const Backgroundimg = () => {
  const[text]=useTypewriter({
    words : ['MERN Developer','Frontend Developer','Django Developer','Tech Aspirants'],
    loop:{},
    typeSpeed:120,
    delaySpeed:80,
  })   
  
 return (
    <div className="Background">
        <div className="mask">
        <img className="into-img" src={IntroImg} alt=" img not found"/>
        </div>
        
        <div className="content">
            <div className="left">
            <p>HI, I'M NARU NEERAJA.</p>
            <h1>{text}
            <span style={{color:'#ff5858'}}> <Cursor cursorStyle="|"/> </span>
            </h1>
             <div>
                <Link to="/project" className="btn">
                    Project
                </Link>
                <Link to="/contact" className="btn-light">
                    contact
                </Link>
            </div>
            </div>
            <div className="right">
              
                <div className="profile">
                <img src={pimage} alt="not found"/>
                </div>  
            {/*<div className='container-box'>
                <div className='avatar'>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png" alt="not found"/>
                </div>
            </div>*/}
            
            </div>
            
        </div>
    </div>
            
       
        
       
  )
}

export default Backgroundimg