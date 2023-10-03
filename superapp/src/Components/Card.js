import React from 'react'

function Card({props}) {

    const backgroundColor = {backgroundColor: props.color}
  return (
    <div className='card' style={backgroundColor}>
        <div className='heading'>{props.category}</div>
        <div className='imgcontainer'>
            <img src={props.image}></img>
        </div>
    </div>
  )
}

export default Card;