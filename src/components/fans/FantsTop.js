import React from 'react';
import "../../assets/styles/fans/fantstop.css";
import fanImage from "../../assets/images/folder2.jpeg";

const FantsTop = () => {
  return (
<div>
      <div className="fantstop-container">
        <div className="fantstop-left">
          <h6 className="fans-text">FOR FANS</h6>
          <h1 className="fans_title-text">
            Music community <br/>and platform  for
            <br/> people who  love<br/> analog media
          </h1>
          <h3 className="fans_description-text">
            Qrates has grown by meeting the diverse<br/>
             needs of artists and fans of analog
            media, and<br/>
             in the process has returned greater profits to<br/>
              the community. Our
            goal is to bring artists and<br/>
             fans together through Qrates, and help the<br/>
              music
            community thrive and evolve.
          </h3>
        </div>
        <div className="fantstop-right">
          <img src={fanImage} alt="Fans" className="fan-image" />
        </div>
      </div>
      <div className="fantstop-footer">
        <h2>We connect artists and fans directly</h2>
      </div>
    </div>
  );
}

export default FantsTop;
