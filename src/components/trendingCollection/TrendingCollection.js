import React from "react";
import NFTimg from "../../assets/imgs/Number of additional NFTs.png";
export default function TrendingCollection(props) {
  return (
    <div className="col-lg-4 col-sm-12  pt-4 p-4 mx-auto">
      <img className="text-center" src={props.img1}/>
       <br/>
       <div className="p-2">
      <img src={props.img2} width={"90px"} style={{padding:"5px"}}/>
      <img src={props.img3} width={"90px"} style={{padding:"5px"}}/>
      <img src={NFTimg} width={"90px"} style={{padding:"5px"}}/><br/>
       <h3 /*style={{textAlign:"left",position:"relative",left:"40px"}}*/>{props.title}</h3> 
       <img src={props.img4}/> <span className="px-2">{props.desc}</span>
      </div>
    </div>
  );
}

