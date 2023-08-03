import React from 'react'
import "../index.css"


const Cards = ({name, image, action}) => {
  return (
      <div>
        <h2>{name}</h2>
        <img className='images' src={image} alt={name} />
        <button onClick={() => action(name)} className='btn'>Button</button>
        <hr/>
        </div>
  )
}

export default Cards