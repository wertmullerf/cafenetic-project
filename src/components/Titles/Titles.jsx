import React from 'react'
import './Titles.css'
const Titles = ({title, text}) => {
  return (
    <div className='title'>
        <strong>{title}</strong>
        <p>{text}</p>
    </div>
  )
}

export default Titles