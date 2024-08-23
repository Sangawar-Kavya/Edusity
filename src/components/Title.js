import React from 'react'
import './Title.css'

const Title = ({subTitle,title}) => {
  return (
    <div className='title'>
      <p>
        {subTitle}
        <h2>
          {title}
        </h2>
      </p>
    </div>
  )
}

export default Title
