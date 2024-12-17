import React from 'react';
import "../../assets/styles/fans/fansthird.css";
import featureImage from "../../assets/images/fansthird.png";

const FansThird = () => {
  return (
    <div className="fansthird-container">
      {/* Left Side - Image */}
      <div className="fansthird-left">
        <img src={featureImage} alt="Features" className="fansthird-image" />
      </div>

      {/* Right Side - Content */}
      <div className="fansthird-right">
        <h5 className="fansthird-title">FEATURES</h5>
        {/* Combined div for Heading and Description */}
        <div className="fansthird-content">
          <h1 className="fansthird-heading">
            Stay up to date on all of your<br/> past and future favorite releases
          </h1>
          <h4 className="fansthird-description">
            Use our "Watch" feature to keep track of new releases by your<br/> favorite artists
            and participate in "Crowdfunding" to support artists<br/> and bring their
            music to life, and send a "Repress Request" to<br/> request artists to repress a
            project you have missed out on. If a<br/> project came with a digital download or
            bonus track, you can<br/> download the music at any time and enjoy it
            on your mobile device<br/> or other devices.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default FansThird;
