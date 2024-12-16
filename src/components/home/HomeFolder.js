import React from 'react';
import "../../assets/styles/home/homefolder.css";
import folder1 from '../../assets/images/folder1.jpeg';
import folder2 from '../../assets/images/folder2.jpeg';
import folder3 from '../../assets/images/folder3.jpeg';
import folder4 from '../../assets/images/folder4.jpeg';
import folder5 from '../../assets/images/folder5.jpeg';
import folder6 from '../../assets/images/folder6.jpg';
import folder7 from '../../assets/images/folder7.jpeg';
import folder8 from '../../assets/images/folder8.jpg';

const HomeFolder = () => {
    const images = [folder1, folder2, folder3, folder4, folder5, folder6, folder7, folder8];
  return (
    <div className="homefolder_image-container">
      {images.map((image, index) => (
        <div key={index} className="homefolder_image-box">
          <img src={image} alt={`Image ${index + 1}`} className="homefolder_image" />
        </div>
      ))}
    </div>
  );
}

export default HomeFolder;
