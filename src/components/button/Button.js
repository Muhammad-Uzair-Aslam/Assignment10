import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className='btn btn-lg fw-bold text-white' style={{backgroundColor:"#A259FF"}}><img src={props.src}/>{props.title}</button>
    </div>
  )
}
