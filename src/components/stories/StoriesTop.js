import React, {useState} from 'react';
import "../../assets//styles/stories/storiestop.css";
import story1 from "../../assets/images/story1.jpeg";
import story2 from "../../assets/images/story2.jpeg";
import story3 from "../../assets/images/story3.jpeg";
import story4 from "../../assets/images/story4.jpeg";
import story5 from "../../assets/images/story5.jpeg";
import story6 from "../../assets/images/story6.jpeg";
import story7 from "../../assets/images/story7.jpeg";
import story8 from "../../assets/images/story8.jpg";
import story9 from "../../assets/images/story9.jpeg";
import story10 from "../../assets/images/story10.jpg";
import story11 from "../../assets/images/story11.jpeg";
import story12 from "../../assets/images/story12.jpeg";

const StoriesTop = () => {
    const [images] = useState([
        story1, story2, story3, story4, story5, story6,
        story7, story8, story9, story10, story11, story12,
      ]);
  return (
    <div className="storiestop-container">
      <div className="storiestop_image-grid">
        {images.map((image, index) => (
          <div className="storiestop_image-item" key={index}>
            <img src={image} alt={`Story ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="storiestop_button-container">
        <button className="load-more">LOAD MORE</button>
      </div>
    </div>
  );
}

export default StoriesTop;
