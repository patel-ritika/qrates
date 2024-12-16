import React, {useState, useEffect} from 'react';
import "../../assets/styles/home/homechange.css";
import change1 from '../../assets/images/change1.webp';
import change2 from '../../assets/images/change2.jpeg';
import change3 from '../../assets/images/change3.jpeg';
import change4 from '../../assets/images/change4.jpeg';
import change5 from '../../assets/images/change5.jpeg';

const HomeChange = () => {
    const [currentImage, setCurrentImage] = useState(0);
  const images = [change1, change2, change3, change4, change5];

  // Function to cycle through images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);
  return (
    <div className="homechange-container">
      <div className="homechange_content">
        <h5>TRY IT NOW</h5>
        <h1>Make it real with Qrates Studio</h1>
        <h4>
          Design the look and feel of your vinyl and cassette and use the profit calculator<br/> to immediately see how much your project will cost, and how much you'll earn.
        </h4>
      </div>

      <div className="homechange_image-slider">
        <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} className="homechange_slider-image" />
      </div>

      <button className="homechange_try-it-now-button">TRY IT NOW</button>
    </div>
  );
}

export default HomeChange;
