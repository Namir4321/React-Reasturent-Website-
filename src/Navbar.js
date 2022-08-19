import React from 'react';
import "./Navbar.css";
import { GoLocation } from "react-icons/go"
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
return(
    <>
    <nav class="navbar navbar-expand-lg navbar-light  d-none d-lg-block" style={{padding:'0px',marginTop:'-10px',backgroundColor:'#C05959',fontWeight:'700'}}>
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">For Bussiness</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Help</a>
          </li>
          <li class="nav-item">
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">En</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><a class="dropdown-divider"></a></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
{/*secound navbar*/ }

<nav class="navbar navbar-expand-lg navbar-light bg-white flex"style={{height:'69px'}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-start" id="navbarNav" style={{justifycontent:'start'}}>
      <ul class="navbar-nav ">
        <li class="nav-item ">
        <div class="dropdown"style={{fontSize:'25px'}}><GoLocation/>
  <a class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Get current location
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#"></a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> 
        </li>
</ul>
</div>
<div class="collapse navbar-collapse justify-content-start d-sm-10" id="navbarNav" >
<ul class="navbar-nav ">
  <li class="nav-item ">
  <form class="d-flex" style={{width:'100%'}}>
  <input class="form-control me-2 " type="search" placeholder="Reasturent and cuisine" aria-label="Search" style={{textAlign:'center',borderRadius:'8px'}}/>
  <button class="btn" type="submit" style={{position:'absolute',float:'right'}}><BsSearch/></button>
  </form>
  </li>
</ul>
</div>
<div class="collapse navbar-collapse justify-content-end" id="navbarNav" >
      <ul class="navbar-nav ">
      <li class="nav-item"style={{textAlign:'center'}}>
      <img className='img-fluid' src={require('./sitebook/male_user_100px.png')}style={{width:'50px',height:'50px'}}/>
      </li>
      <li class="nav-item ">
      <a class="nav-link" href="#">Aman</a>
      </li>
      </ul>
  </div>
  </div>
</nav>
    </>
)
};
export default Navbar;