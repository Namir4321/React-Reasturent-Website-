import React from "react";
const Carousel = () => {
    return(
        <>
        <div className=".container d-block d-sm-none " style={{textAlign:'center',borderRadius:'20px'}}>
        <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" style={{borderRadius:'10px'}}>
      <img src={require('./sitebook/3.jpg')} class="d-block w-100" alt="..." style={{borderRadius:'10px'}}/>
    </div>
    <div class="carousel-item">
      <img src={require('./sitebook/2.jpg')} class="d-block w-100" alt="..." style={{borderRadius:'10px'}}/>
    </div>
    <div class="carousel-item">
      <img src={require('./sitebook/1.jpg')} class="d-block w-100" alt="..." style={{borderRadius:'10px'}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
        </>
    )
}
export default Carousel;