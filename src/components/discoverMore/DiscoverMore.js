import React from 'react'
export default function DiscoverMore(props) {
  return (
    <div className='col-lg-4 col-sm-12 pt-5'>
        <div className='mx-auto text-center' style={{height:"450px",backgroundColor:"#3B3B3B",width:"330px",borderRadius:"20px"}}>
            <img src={props.src}/><br/>
            <div className='p-3' style={{textAlign:"left" }}>
                <h4 >{props.heading}</h4>
                <img src={props.src1}/>
                <span className='px-2'>{props.title}</span><br/>
                <div style={{display:"flex",justifyContent:"space-between",paddingTop:"15px",paddingBottom:"15px"}}>
                <div style={{ color:"#858584"}}>price<br/> <span className='text-white'>1.63 ETH</span></div>
                <div style={{color:"#858584"}}>Highest bid <br/> <span className='text-white'>0.33 wETH</span></div>
                </div>
            </div>
        </div>
    </div>
  )
}
