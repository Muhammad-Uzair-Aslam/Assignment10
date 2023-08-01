import React from 'react'
export default function TopCreators(props) {
  return (
    <div className='col-lg-3 col-sm-12 col-md-6 text-center p-3 m-2 mx-auto' style={{backgroundColor:"#3B3B3B",borderRadius:"30px",width:"250px"}}>
      
        <div className='bg-dark m-2' style={{width:"22px",borderRadius:"12px",color:"#858584"}}>{props.title}</div>
        <img src={props.src}/><br/>
        <h3>{props.name}</h3>
        <span style={{color:"#858584"}}>Total Sales:</span>
        <span>34.53 ETH</span>
    </div>
  )
}
