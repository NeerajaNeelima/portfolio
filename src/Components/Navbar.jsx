import React from 'react'
import "./Navbar.css"
import {FaBars,FaTimes} from 'react-icons/fa';
import {Link} from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {
    const [state,clickState]=useState(false);
    const handleClick = () => clickState(!state)
    const closeMenu = () => {
        clickState(false);
      };
    
    const[color,setColor] =useState(false);
    const changeColor = () =>{
        if(window.scrollY >= 100)
        {
            setColor(true)
        }
        else{
            setColor(false)
        }
    };

    window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link  to="/">
                <h1  style={{color:"#ff5858"}}>Portfolio</h1>
        </Link>
        <ul className={state ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link  to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
                <Link  to="/project" onClick={closeMenu}>Projects</Link>
            </li>
            <li>
                <Link  to="/about" onClick={closeMenu}>About</Link>
            </li>
            <li>
                <Link  to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
           
        </ul>
        <div className='Hamburger'>
            {state ? <FaTimes
                size={20} 
                style={{ color:"#ff5858" }} 
                onClick={handleClick}
                /> : (<FaBars 
                    size={20} 
                    style={{ color:"#ff5858" }} 
                    onClick={handleClick}
                />)
            }
                
                
        </div>
    </div>
  )
}

export default Navbar