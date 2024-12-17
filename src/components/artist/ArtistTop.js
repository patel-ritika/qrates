import React from 'react';
import "../../assets/styles/artist/artisttop.css";
import artisttop from "../../assets/images/artisttop.jpeg";

const ArtistTop = () => {
  return (
    <div className="artisttop-container">
    <div className="artisttop_left-side">
      <h5>FOR ARTISTS</h5>
      <h1>Music in your <br/>
      hands. Without the<br/> barriers.</h1>
      <h4>Full-service production, a global retail <br/>
      network, customer support - and you keep<br/> up to 85% of profits.</h4>
    </div>
    <div className="artisttop_right-side">
      <img src={artisttop} alt="Artist" />
    </div>
  </div>
  );
}

export default ArtistTop;
