import React from 'react';
import "../../assets/styles/artist/artistthird.css";
import artistthird from "../../assets/images/record19.jpeg";

const ArtistThird = () => {
  return (
    <div className="artistthird-container">
    {/* Left Section */}
    <div className="artistthird_left-section">
      <h5 className="artistthird_box">YOU</h5>
      <h1>Focus on making music</h1>
      <h4>
        You can focus on your music production with peace of<br/> mind: the Artist
        Toolkit has lots of information about<br/> music production, knowledge
        about vinyl records and<br/> cassettes, and tips on how to sell your music.
        Artist<br/> Toolkit
      </h4>
      <h2>Express your work on Qrates</h2>
      <h3>Qrates studio</h3>
      <h4>
        Your product details should match the details of your music.<br/> Tweak and
        customize your vinyl, sleeve, jacket, and more.
      </h4>
    </div>

    {/* Right Section */}
    <div className="artistthird_right-section">
      <h5 className="artistthird_box">QRATES</h5>
      <h1>We'll take care of the hassle</h1>
      <h4>
        Qrates supports a wide range of artists while eliminating<br/> the hassles,
        costs, and risks associated with pressing <br/>records, giving artists more
        time and income back in<br/> their hands.
      </h4>
      <h2>Over 120,000 customization possibilities<br/>3D Visualizer</h2>
      <h4>
        Choose from vinyl or cassette, each with a wide range of<br/> options
        including colors, packaging, obi strips, download cards,<br/> etc. There
        are over 120,000 variations of colors and specs for<br/> vinyl and cassette
        that can be customized in the Qrates<br/> Studio.
      </h4>
      <img src={artistthird} alt="Customization Options" className="artistthird_right-image" />
    </div>
  </div>
  );
}

export default ArtistThird;
