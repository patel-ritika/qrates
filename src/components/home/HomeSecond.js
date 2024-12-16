import React, {useState} from 'react';
import "../../assets/styles/home/homesecond.css";
import mainImage from "../../assets/images/slide.jpg";
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpeg";
import slide3 from "../../assets/images/slide3.jpg";
import slide4 from "../../assets/images/slide4.jpg";


const HomeSecond = () => {
    const [backgroundImage, setBackgroundImage] = useState(mainImage);

  const handleMouseEnter = (image) => {
    setBackgroundImage(image);
  };

  const handleMouseLeave = () => {
    setBackgroundImage(mainImage);
  };
  return (
    <div
    className="home-second-container"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="content">
      <h4 className="tag">FOR FANS</h4>
      <h1 className="list">
        <span
          onMouseEnter={() => handleMouseEnter(slide1)}
          onMouseLeave={handleMouseLeave}
        >
          Records
        </span>
        <span
          onMouseEnter={() => handleMouseEnter(slide2)}
          onMouseLeave={handleMouseLeave}
        >
          Cassettes
        </span>
        <span
          onMouseEnter={() => handleMouseEnter(slide3)}
          onMouseLeave={handleMouseLeave}
        >
          Stories
        </span>
        <span
          onMouseEnter={() => handleMouseEnter(slide4)}
          onMouseLeave={handleMouseLeave}
        >
          Qrates Curated
        </span>
      </h1>
      <h5 className="subtitle">The latest from the Qrates community</h5>
    </div>
  </div>
  );
}

export default HomeSecond;
