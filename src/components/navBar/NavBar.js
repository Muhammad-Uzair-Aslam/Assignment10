import React from 'react'
import NavBarImg from '../../assets/imgs/Storefront.png'
import signUpButton from '../../assets/imgs/User.png'
import Button from '../button/Button'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark  px-5">
  <div className="container-fluid px-5 p-5">
    <a className="navbar-brand fw-bold" href="#">
        <img src={NavBarImg} /> NFT MarketPlace</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{position:"absolute",right:"100px"}}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active fw-bold px-4" aria-current="page" href="#">Market Place</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fw-bold px-4" href="#">Rankings</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fw-bold px-4" href="#">Connect a Wallet</a>
        </li>
        <li>
            <Button title="Sign Up" src={signUpButton}/>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}


