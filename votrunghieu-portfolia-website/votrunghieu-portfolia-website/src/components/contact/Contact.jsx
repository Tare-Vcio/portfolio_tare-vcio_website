import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_74zykp3', 'template_ata0xhm', form.current, 'KcQJwbGCg_oRTSkEM')

    e.target.reset()
  };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>votrunghieu332001@gmail.com</h5>
            <a href="mailto:votrunghieu332001@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option' target="_blank">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>votrunghieu</h5>
            <a href="">Send a message</a>
          </article>
          <article className='contact__option' target="_blank">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+0355842331</h5>
            <a href="">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>


    </section>
  )
}

export default Contact