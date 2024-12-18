import React from 'react';
import "../../assets/styles/artist/artistfive.css";
import artistfiveleft from "../../assets/images/back.jpeg"; // Import the left image
import artistfiveright from "../../assets/images/fansfour.jpg";

const ArtistFive = () => {
  return (
    <div className="artistfive-container">
      <div className="artistfive_left-section">
        <img src={artistfiveleft} alt="Artist Toolkit" className="artistfive_image" />
        <h5 className="artistfive_title">ARTIST TOOLKIT</h5>
        <h1 className="artistfive_heading">Take you and your works to next <br/>level.</h1>
        <h4 className="artistfive_subheading">
          We have a lot of informations and tips about music production,
          physical <br/>format and music business for you.
        </h4>
        <button className="artistfive_button">LEARN MORE</button>
      </div>
      <div className="artistfive_right-section">
        <img src={artistfiveright} alt="Customer Support" className="artistfive_image" />
        <h5 className="artistfive_title">CUSTOMER SUPPORT</h5>
        <h1 className="artistfive_heading">Here to help, whenever you need <br/>it.</h1>
        <h4 className="artistfive_subheading">
          Whether you’re an artist in the middle of product, or a fan with <br />
          questions about your order; our team is here to help.
        </h4>
        <button className="artistfive_button">CONTACT US</button>
      </div>
    </div>
  );
}

export default ArtistFive;
