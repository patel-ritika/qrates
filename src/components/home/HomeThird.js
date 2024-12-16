import React from 'react';
import "../../assets/styles/home/homethird.css";
import homethirdImage from '../../assets/images/home.jpeg';

const HomeThird = () => {
  return (
    <div className="home-third-container">
    <div className="homethird_image-container">
      <img src={homethirdImage} alt="Artist" className="homethird_artist-image" />
    </div>
    <div className="homethird_content-container">
      <div className="homethird_for-artists-box">FOR ARTISTS</div>
      <h1 className="homethird_main-heading">
        Your music on vinyl and cassette,<br/> direct to your fans.
      </h1>
      <h4 className="homethird_sub-heading">
        Qrates is a one-stop platform for your vinyl record and <br/>cassette
        production, logistics, sales, and distribution. We<br/> take away the
        burden of hassle, cost, and risk, and return<br/> more time and revenue to
        artists and labels.
      </h4>
      <button className="homethird_artist-button">FOR ARTISTS</button>
    </div>
  </div>
  );
}

export default HomeThird;
