import React from 'react'

export default function StratBoxes(props) {
  return (
    
      <div className='m-3 p-2 d-flex flex-wrap' style={{border:"2px solid grey", width:"500px", borderRadius:"5px"}}>

        <p style={{color:"black"}}><b>{props.num}. {props.title}</b></p><br></br>
        <p style={{color: "black"}}>{props.desc}</p>
      </div>
   
  )
}
