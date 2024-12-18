import React from 'react';
import "../../assets/styles/artist/artistsecond.css";
import vinylImage from '../../assets/images/caset19.jpg'; 
import cassetteImage from '../../assets/images/caset17.jpeg';

const ArtistSecond = () => {
  return (
    <div className="artistsecond-container">
            {/* Top Section */}
            <div className="artistsecond-header">
                <h1>Choose from two formats with promised quality</h1>
                <hr />
            </div>

            {/* Content Section */}
            <div className="artistsecond-content">
                <div className="artistsecond-left">
                    <h1>Vinyl</h1>
                    <h4>
                        We know how special pressed records are to you. Our<br/>
                         products are built for fans, by fans. 
                        We make it easy for<br/>
                         artists to press vinyl, so the music you love can keep<br/> reaching ears in 
                        the most beautiful way.
                    </h4>
                    <img src={vinylImage} alt="Vinyl" />
                </div>

                <div className="artistsecond-divider"></div>
                <div className="artistsecond-right">
                    <h1>Cassette</h1>
                    <h4>
                        Cassettes have always been special to music fans and<br/>
                         artists. Whether you are saving a recording 
                        of a great<br/>
                         concert, or preserving an early demo, there’s no better<br/> way to keep that music close 
                        than on cassette tapes.
                    </h4>
                    <img src={cassetteImage} alt="Cassette" />
                </div>
            </div>

            {/* Footer Section */}
            <div className="artistsecond-footer">
                <h1>You make music. We do the rest.</h1>
            </div>
        </div>
  );
}

export default ArtistSecond;
