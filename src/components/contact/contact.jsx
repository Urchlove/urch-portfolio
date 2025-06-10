import React from 'react'
import './contact.css'
import theme from '../../assets/urch10.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "269a09c9-4eb1-49fc-82b9-2cdeaae9f9d3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  return (
    <div id='Contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img className='img' src={theme} alt="" />

      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on a new project,so feel free to contact me.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>gloriaanthony177@gmail.com</p>
            </div>
             <div className="contact-detail">
              <FontAwesomeIcon icon={faPhone} />
              <p>08068510570</p>
              
            </div>
             <div className="contact-detail">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Nigeria</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor=''>Your Name</label>
          <input type='text' placeholder='enter your name' name='name'/>
          <label htmlFor=''>Your Email</label>
          <input type='email' placeholder='email' name='email'/>
          <label htmlFor=''>Write your message</label>
          <textarea name='message' rows="8" placeholder='enter your message'></textarea>
          <button type='submit' >Submit now</button>
        </form>
      </div>
    </div>  
  )
}

export default Contact
