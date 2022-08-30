import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div className='card-container'>
        {/* <div className='image-container'>
            <img src={props.img} alt=''/>
        </div> */}
        {/* <div className="card-title">
            {props.title}
        </div> */}
        <p className="card-text">
            {props.text}
        </p>
    </div>
  )
}

export default Card