import React from 'react'
import './Background.css'
import dark_arrow from '../assests/dark-arrow.png'

const Background = () => {
  return (
    <div className='background container'>
      <div className='backg-text'>
        <h1>We Enusre better education for a better world</h1>
        <p>
            Our cutting-edge curriculum is designed to empower students with the knowledge, skills and experiences needed to excel in the dynamic field of education.
        </p>
        <button className='btn'> Explore more <img src={dark_arrow} alt=''/> </button>
      </div>
    </div>
  )
}

export default Background
