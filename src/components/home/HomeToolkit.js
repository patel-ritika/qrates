import React from 'react';
import "../../assets/styles/home/hometoolkit.css";
import toolkitImage from '../../assets/images/back.jpeg';

const HomeToolkit = () => {
  return (
    <div className="toolkit-container">
      <div className="toolkit_image-container">
        <img src={toolkitImage} alt="Artist Toolkit" className="toolkit-image" />
        <div className="text-overlay">
          <h4 className="toolkit-title">ARTIST TOOLKIT</h4>
          <ul className="toolkit-list">
            <li>Vinyl Knowledge</li>
            <li>Distribution & Promotion</li>
            <li>Mixing & Mastering</li>
            <li>Inspiration</li>
            <li>Qrates Tips</li>
          </ul>
          <h4 className="latest-title">The latest from Artist Toolkit</h4>
        </div>
      </div>
    </div>
  );
}

export default HomeToolkit;
