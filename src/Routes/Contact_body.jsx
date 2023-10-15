import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import './Contact.css'
const Contact_body = () => {

    const form = useRef();
  const notify = () => toast('Message send Successfully!.....');
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jp4z7nk', 'template_uvj59zr', form.current, '0MbmGeO95oNYfOHbk')
      .then((result) => {
        
         console.log(result.text);
      }, (error) => {
        
        console.log(error.text);
      });
  };
  return (
    <div className='content-box'>
      <div className='left'>
        <form className="form" ref={form} onSubmit={sendEmail}>
  <h2 className='contact-header'>CONTACT US</h2>
  <p type="Name:" className='p'><input type="text" name="to_name" id="to_name" placeholder='Enter your Name . . . . . .'/></p>
  <p type="Email:" className='p'><input type="email" name="from_name" id="from_name" placeholder='Enter your Email id . . . . . .'/></p>
  <p type="Message:" className='p'><textarea name="message" id="message" placeholder='Text . . . . . .'/></p>
  <button type="submit" value="Send" className='button_contact' onClick={notify}>Send</button>
  <Toaster style={{ backgroundColor: "Black", color:"green"}}/>
  </form>
  </div>
  <div className="right">
    <div className='container-box'>
      <div className='avatar'>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png" alt="not found"/>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Contact_body