import React from "react";
import Cardone from "./Cardone";
const ArrangeCard = () => {
  return (
    <>
      <div className="container-fluid ml-2 mr-2">
        <div className="col-lg-12">
          <div className="row">
            <div
              className="cards"
              style={{
                display: "flex",
                // flexDirection: "row",
                flexflow: "wrap",
              }}
            >
              <Cardone />
              <Cardone />
              <Cardone />
              <Cardone />
              <Cardone />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ArrangeCard;
