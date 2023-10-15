import "./footer.css"
import React from 'react'
import {FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter,FaGithub} from 'react-icons/fa';
const footer = () => {
  return (
    <div className="footer">
        <div className="footer__container">
            <div className="footer__left">
                <div className="location">
                    <FaHome size={25} style={{ color :"#fff" , marginRigt :"2rem"}}/>
                
                <p>RTC Colony, Ragolu, Srikakulam,Andhra Pradesh, 532-484</p>
                
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color :"#fff" , marginRight :"2rem"}}/> 9346571625</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color :"#fff" , marginRight :"2rem"}}/> neerajanaru023@gamil.com</h4>
                </div>
            </div>
            <div className="footer__right">
             <h4>
                I'M a Friendly Front-End Developer. You can Follow me with the below links.
             </h4>
             <div className="social">
             <FaFacebook size={25} style={{ color :"#fff" , marginRight :"1rem"}}/> 
             <FaTwitter size={25} style={{ color :"#fff" , marginRight :"1rem"}}/>
             <FaLinkedin size={25} style={{ color :"#fff" , marginRight :"1rem"}}/>
             <FaGithub size={25} style={{ color :"#fff" , marginRight :"1rem"}}/>
             </div>
            </div>
        </div>
    </div>
  )
}

export default footer