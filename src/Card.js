import React from "react";
import "./Card.css";
const Card = () => {
    return(
        <>
  <div className="card yes mb-3 mt-3">
  <div className="row no gutters">
  <div className="col-lg-4 col-sm-12">
  <img className="img-fluid main_photo" src={require('./sitebook/cafe11.jpg')}alt="" />
  </div>
  <div className="col-lg-7 col-sm-12">
  <div className="card-body" style={{padding:'10px'}}>
  <div className="card-title topname">Booking ID :</div>
  <div className="card-text name">Shere punjab Reasturent</div>
  <div className="card-text place">Morar Gwalior</div>
  <div className="card-text food">Pizza Fast Food Burger</div>
  <div className="row no gutter">
  <div className="col-4" style={{display:'inline-block'}}>
  <img className="card-img-top customerpng" src={require('./sitebook/customer_50px.png')}alt=""/>
 
  </div>
  <div className="col-8">
  <img src={require('./sitebook/calendar_25px.png')}alt="" className="customerpng"/>
  </div>
  <div className="col-lg-8 d-none d-block d-sm-none">22</div>
  </div>
  </div>
  </div>
  </div>
  </div>    
        </>
        )
};
export default Card;