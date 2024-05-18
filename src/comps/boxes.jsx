import React from 'react'
import './boxes.css'

export default function Boxes(props) {
  return (
    <div>
      <div className=' m-3 p-3 box'>
      <i class={props.icon} style={{fontSize:"60px"}}></i><hr></hr>
      <h3>{props.title}</h3>
      {props.para}
      </div>
      
    </div>
  )
}
