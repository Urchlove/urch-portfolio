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
        <div className="mywork-showmore">
          <p>Show More</p>
          <FontAwesomeIcon icon={faArrowRight} />

        </div>
    </div>
  )
}

export default Mywork