import React from 'react';
import "../../assets/styles/home/hometop.css";
import hometop from "../../assets/images/home.jpeg";

const HomeTop = () => {
  return (
    <div className="home-top-container">
      <div className="text-container">
        <h1>
          QRATES<br />
          MUSIC IN<br />
          YOUR HANDS
        </h1>
        <h3>
          We make it easy for artists to make vinyl and<br/> cassettes, 
          so fans can keep pieces of the music they <br/>love ↓
        </h3>
        <div className="button-row">
          <button className="button-fans">FOR FANS</button>
          <button className="button-artists">FOR ARTISTS</button>
        </div>
      </div>
      <div className="image-container">
        <img src={hometop} alt="Music" className="styled-image" />
      </div>
    </div>
  );
}

export default HomeTop;
