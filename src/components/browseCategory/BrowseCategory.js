import React from 'react'
import BrowseCategoryImg1 from '../../assets/imgs/Photo & Icon.png'
export default function BrowseCategory(props) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
        <div className=" mx-auto"style={{width:"250px",height:"280px",borderRadius:"20px 20px 5px 5px" ,borderTop:"20px",backgroundColor:"#3B3B3B"}}>
             <img src={props.src} width={"250px"}/><br/>
             <h5 className='p-3'>{props.heading}</h5>
        </div>
    </div>
  )
}
