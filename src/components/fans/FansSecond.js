import React from 'react';
import "../../assets/styles/fans/fanssecond.css";
import fanssecond from "../../assets/images/fans.jpg"; 

const FansSecond = () => {
  return (
    <div className="fanssecond-container">
    {/* Left side content */}
    <div className="fanssecond-left">
      <h5 className="fanssecond_community-title">COMMUNITY</h5>
      <div className="fanssecond_content-box">
        <h1 className="fanssecond_main-heading">
          Up to 85% of revenue is returned<br/> to the artist.
        </h1>
        <h4 className="fanssecond_description">
          At Qrates, our priority is to create a vibrant music community where<br/>
          artists and fans can come together. We're committed to offering a<br/> high
          revenue return rate to artists and bridging the gap between<br/> them and
          their fans. Many talented artists have already shared their<br/> exclusive
          works with their fans all around the world through Qrates.<br/> We hope
          that Qrates will help even more artists and fans build<br/> relationships
          through the power of music.
        </h4>
      </div>
    </div>

    {/* Right side image */}
    <div className="fanssecond-right">
      <img src={fanssecond} alt="Qrates Community" className="community-image" />
    </div>
  </div>
  );
}

export default FansSecond;
