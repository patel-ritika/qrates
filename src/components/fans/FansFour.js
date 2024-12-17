import React from 'react';
import "../../assets/styles/fans/fansfour.css";
import fansfour from "../../assets/images/fansfour.jpg"; 

const FansFour = () => {
  return (
    <div className="fansfour-container">
    {/* Left side content */}
    <div className="fansfour-left">
      <h5 className="fansfour_community-title">SUPPORT</h5>
      <div className="fansfour_content-box">
        <h1 className="fansfour_main-heading">
        Global shipping and customer<br/> support in specialized packing<br/> from 3 continents.
        </h1>
        <h4 className="fansfour_description">
        All records and cassettes purchased from Qrates are carefully <br/>
        packed one by one in our affiliated warehouses in the U.S., U.K., and <br/>
        Japan in special packaging and shipped to our customers<br/>
         worldwide. Our customer support team is ready to handle inquiries<br/>
          regarding delivery status after purchase, as well as any problems <br/>
          that may arise.
        </h4>
      </div>
    </div>

    {/* Right side image */}
    <div className="fansfour-right">
      <img src={fansfour} alt="Qrates Community" className="fansfour-image" />
    </div>
  </div>
  );
}

export default FansFour;
