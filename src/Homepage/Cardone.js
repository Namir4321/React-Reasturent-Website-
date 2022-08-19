import React from "react";
const Cardone = () => {
  return (
    <>
     
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
          <img
            className=" card-img-top  cardone-img"
            src={require("../sitebook/cafe44.jpg")}
            style={{ padding: "5px", borderRadius: "15px" }}
          />
          <div class="card-body">
            <h5 class="card-title">Tiffin</h5>
            <p
              class="card-text mb-0"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Hotel Winway,South Tukoganj,East indore
            </p>
            <p class="card-text mb-0">1000 for 2 (Approx)|Nort india</p>
            <p class="card-text mb-0">Malvani</p>
            <a href="#" class="btn m-0" style={{ color: "blue" }}>
              2 deals avaliable
            </a>
          </div>
        </div>
    
    </>
  );
};
export default Cardone;
