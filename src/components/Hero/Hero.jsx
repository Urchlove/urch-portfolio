import React from 'react'
import './Hero.css'
import profileimg from '../../assets/urch3.JPG'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <div id='home' className='hero'>
        <img className='profile' src={profileimg} alt="" />
        <h1><span> I'm Uchechukwu Gloria Anthony,</span>frontend developer based in Nigeria.</h1>
        <p>I am a frontend developer based in Nigeria,with 2 years experience in multiple companies like primedEhealth,UpChat and Core3dsolutions </p>
        <div className='hero-action'>
            <div className="hero-connect"> <AnchorLink className='anchorlink' offset={50} href='#Contact'> Connect with me </AnchorLink> </div>
            <div className="hero-resume">My resume.</div>
        </div>
    </div>
  )
}

export default Hero