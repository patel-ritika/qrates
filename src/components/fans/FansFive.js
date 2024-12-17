import React from 'react';
import "../../assets/styles/fans/fansfive.css";
import fansfive from '../../assets/images/folder4.jpeg';

const FansFive = () => {
  return (
    <div className="fansfive-container">
      <div className="fansfive-left">
        <h5 className="fansfive-title">ARTISTS ON QRATES</h5>
        <h4 className="fansfive-description">
          The response was overwhelming. It made me<br/>
           wonder why I hadn't pressed
          any records on<br/>
           vinyl before now. It felt like something that<br/>
            people had
          been waiting for for a long time.
        </h4>
      </div>
      <div className="fansfive-right">
        <img src={fansfive} alt="Artist" className="fansfive-image" />
      </div>
    </div>
  );
}

export default FansFive;
