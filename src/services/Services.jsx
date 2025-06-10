import React from 'react'
import './Services.css'
import theme from '../assets/urch10.jpeg'
import Servives_Data from '../assets/services-data'

function Services() {
  return (
    <div id='Services' className='services'>
      <div className=" services-title">
        <h1>My Services</h1>
        <img src={theme} alt="" className='imgg' />
      </div>
      <div className="services-container">
        {Servives_Data.map((services,index)=>{
          return <div key={index} className="services-format">
              <h3> {services.s_no} </h3>
              <h2> {services.s_name} </h2>
              <p>{ services.s_desc}</p>
              <div className="services-report">
                <p>Read More!</p>
              </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services