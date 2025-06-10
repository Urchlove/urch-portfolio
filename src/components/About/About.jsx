import React from 'react'
import './About.css'
import self from '../../assets/urch10.jpeg'
import me from '../../assets/urch2.jpeg'

function About() {
  return (
    <div className='about'>
        <div id='About me' className="about-tittle">
            <h1>About Me</h1>
            <img className='logo' src={self} alt="" />
        </div>
        <div className="about-section">
          <div className="about-left">
            <img src={me} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>I am a frontend developer with over 2 years of professional expertise in the field</p>
              <p> My passion for frontend development is not only reflected in my extensive experience but also in the enthusiam and dedication i bring</p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{width: '80%'}}/>
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{width: '70%'}}/>
              </div>
              <div className="about-skill">
                <p>React js</p>
                <hr style={{width: '70%'}}/>
              </div>
              <div className="about-skill">
                <p>Next js</p>
                <hr style={{width: '50%'}}/>
              </div>
            </div>
          </div>
          <div className="about-achivement">
            <div className="about-achive">
              <h1>2+</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achive">
              <h1>40+</h1>
              <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achive">
              <h1>10+</h1>
              <p>happy clients</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About