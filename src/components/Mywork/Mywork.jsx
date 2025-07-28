import React from 'react'
import './Mywork.css'
import logo from '../../assets/urch10.jpeg'
import mywork from '../../assets/project-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function Mywork() {
  return (
    <div id='Portfolio' className='mywork'>
        <div className="mywork-tittle">
            <h1>
                My latest work
            </h1>
            <img  className='img' src={logo} alt="" />
        </div>
        <div className="mywork-container">
          {mywork.map((work,index) => {
            return <img key={index} src= {work.w_img} alt="" />

          })}
        </div>
        <div className='aa'>
          <h1>MY PROJECTS LINKS</h1>
          <a href="https://edu-web-demo.vercel.app/" target='_blank'>Please click Link 1</a>
          <a href="https://urch-best-birthday.vercel.app/" target='_blank'>Please click Link 2</a>
          <a href='https://portfolio-wine-alpha-20.vercel.app/' target='_blank'>Please Click Link 3</a>

        </div>
        <div className="mywork-showmore">
          <p>Show More</p>
          <FontAwesomeIcon icon={faArrowRight} />

        </div>
    </div>
  )
}

export default Mywork