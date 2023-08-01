import React from 'react'

export default function HowITWorks(props) {
  return (
    <div className='col-lg-4 col-sm-12'>
      <div className='mx-auto text-center p-3 m-2' style={{backgroundColor:"#3B3B3B"}}>
        <img src={props.src}/><br/>
        <span className='fw-bold'>{props.heading}</span><br/>
        <p>{props.para}</p>
      </div>
    </div>
  )
}
