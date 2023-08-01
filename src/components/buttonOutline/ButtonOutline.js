import React from 'react'

export default function ButtonOutline(props) {
  return (
    <div>
            <button className='btn btn-outline-primary btn-lg fw-bold text-white' style={{borderColor:"#A259FF"}}><img src={props.src} style={{color:"#A259FF",padding:"5px"}} />{props.title}</button>
    </div>
  )
}
