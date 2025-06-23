import React from 'react'
import './Foot.css'
import theme from '../../assets/urch6.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faUser } from '@fortawesome/free-solid-svg-icons';

function Foot() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img className='img' src={theme} alt="" />
                <p>I am a frontend developer with over 2 years experience in multiple companies like primedEhealth,UpChat and Core3dsolutions,connect with me</p>
            </div>
            <div className="foot-top-right">
                <div className="footer-email-input">
                    <FontAwesomeIcon icon={faUser} />
                    <input type="email" placeholder='enter your email'/>
                </div>
                 <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
           
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2024 Gloria Urch. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Foot