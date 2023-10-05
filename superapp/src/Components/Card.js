import React, { useState } from 'react'
import '../Styles/Card.css'

function Card({props, setSelectedCategories, selectedCategories}) {

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = (category)=>{
        if(!selectedCategories.includes(props.category)){
          setSelectedCategories((prev)=>([...prev, category]))
          setIsClicked(!isClicked)
        } else {
          setIsClicked(!isClicked)
          setSelectedCategories((prev)=>(prev.filter((el)=>(el !== props.category))))
        }
    }

    const card = `card ${isClicked ? 'clicked' : ''}`
    const backgroundColor = {backgroundColor: props.color}
  return (
    <div style={backgroundColor} className={card} onClick={()=>{handleClick(props.category)}}>
        <div className='heading'>{props.category}</div>
        <div className='imgcontainer'>
            <img src={props.image} alt=''></img>
        </div>
    </div>
  )
}

export default Card;