import React from "react";
import NavBarImg from "../../assets/imgs/Storefront.png";
import logo1 from '../../assets/imgs/DiscordLogo.png'
import logo2 from '../../assets/imgs/YoutubeLogo.png'
import logo3 from '../../assets/imgs/TwitterLogo.png'
import logo4 from '../../assets/imgs/InstagramLogo.png'
import Button from '../button/Button'
export default function Footer() {
  return (
    <div className="container-fluid " style={{ backgroundColor: "#3B3B3B" }}>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-4 col-sm-12 p-4">
            <a
              className="navbar-brand fw-bold "
              href="#"
              style={{ fontSize: "25px" }}
            >
              <img src={NavBarImg} /> NFT MarketPlace
            </a>
            <p style={{fontSize:"20px",paddingTop:"20px"}}>NFT marketplace UI created with Anima for Figma.</p>
            <p>Join Our Community</p>
            <img src={logo1}/>
            <img src={logo2}/>
            <img src={logo3}/>
            <img src={logo4}/>
          </div>
          <div className="col-lg-4 col-sm-12 p-4">
            <h2>Explore</h2>
            <p className="pt-2">Market Place</p>
            <p >Ranking</p>
            <p >Connect a Wallet</p>
           </div>
           <div className="col-lg-4 col-sm-12 p-4">
            <h2>Join our weekly digest</h2>
            <p className="pt-2">Get exclusive promotions & <br/> updates<br/>
              straight to your inbox.</p>
              <div class="d-flex">
              <input
                type="email"
                class="form-control p-2  input-email"
                placeholder="Enter Your Email here"
                style={{width:"200px"}}
              />
              <div style={{marginLeft: "-3rem"}}>
              <Button title="Subscribe"  />
              </div>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
}
