import React from 'react';
import "../../assets/styles/casets/cassetstop.css";
import img1 from "../../assets/images/caset1.jpeg";
import img2 from "../../assets/images/caset2.png";
import img3 from "../../assets/images/caset3.jpeg";
import img4 from "../../assets/images/caset4.png";
import img5 from "../../assets/images/caset5.jpeg";
import img6 from "../../assets/images/caset6.jpeg";
import img7 from "../../assets/images/caset7.webp";
import img8 from "../../assets/images/caset8.jpeg";
import img9 from "../../assets/images/caset9.png";
import img10 from "../../assets/images/caset10.jpeg";
import img11 from "../../assets/images/caset11.png";
import img12 from "../../assets/images/caset12.jpeg";
import img13 from "../../assets/images/caset13.jpg";
import img14 from "../../assets/images/caset14.jpeg";
import img15 from "../../assets/images/caset15.jpg";
import img16 from "../../assets/images/caset16.jpg";
import img17 from "../../assets/images/caset17.jpeg";
import img18 from "../../assets/images/caset18.png";
import img19 from "../../assets/images/caset19.jpg";
import img20 from "../../assets/images/caset20.jpg";


const imagesData = [
    { img: img1, title1: "Right Way Round", title2: "Lunar IsIes", price: "$12.00", tag: "IN-STOCK" },
    { img: img2, title1: "The Jippington Alphabet", title2: "Jippington Industries", price: "$22.22", tag: "IN-STOCK" },
    { img: img3, title1: "Lagrimas blancas", title2: "Mareaboba", price: "$15.00", tag: "IN-STOCK" },
    { img: img4, title1: "Eien's Fable", title2: "Nogymx", price: "$8.02", tag: "IN-STOCK" },
    { img: img5, title1: "At Times", title2: "Kristoffer Eikrem", price: "$17.00", tag: "IN-STOCK" },
    { img: img6, title1: "sakura", title2: "Tomonori Kubota", price: "3,500", tag: "" },
    { img: img7, title1: "AGONIZER CASSETTE", title2: "SENTRIES", price: "$25.00", tag: "FINISHED 50/50" },
    { img: img8, title1: "i was mature for my age, but i was...", title2: "grouptherapy.", price: "$14.99", tag: "FINISHED 117/100" },
    { img: img9, title1: "Orbit 13: Vaporwave", title2: "Novatone", price: "$10.00", tag: "FINISHED 59/50" },
    { img: img10, title1: "HOORAY FOR EARTH-selftitled", title2: "Hooray For Earth", price: "$11.55", tag: "FINISHED 51/50" },
    { img: img11, title1: "R.E.P. mixtape", title2: "Saiid", price: "$20.00", tag: "FINISHED 105/100" },
    { img: img12, title1: "Fresh Tracks For Autodidacts", title2: "Jippy & Dan O.", price: "$22.22", tag: "SOLD OUT" },
    { img: img13, title1: "Doreamon Cassette", title2: "The Doreamons", price: "$30.00", tag: "UNCOMPLETED" },
    { img: img14, title1: "I Am Him(Album)", title2: "Maj3sty", price: "$20.00", tag: "UNCOMPLETED" },
    { img: img15, title1: "Audio Cassette Speed Calibration", title2: "Sound Engineer", price: "$15.00", tag: "UNCOMPLETED" },
    { img: img16, title1: "Death Row Cassette", title2: "WantToKillMyself", price: "$12.00", tag: "UNCOMPLETED" },
    { img: img17, title1: "2003", title2: "BruncleDew", price: "$15.00", tag: "UNCOMPLETED" },
    { img: img18, title1: "EP 1&2 (Remastered", title2: "Hauntissimo", price: "$16.00", tag: "UNCOMPLETED" },
    { img: img19, title1: "Float", title2: "Kaseki Hunter", price: "$930", tag: "UNCOMPLETED" },
    { img: img20, title1: "Spooky month", title2: "Lucyyylalarose", price: "$30.00", tag: "UNCOMPLETED" },
  ];

const CassetsTop = () => {
  return (
    <div className="caset-container">
      {imagesData.map((item, index) => (
        <div className="caset-box" key={index}>
          <img src={item.img} alt={`img-${index}`} />
          <h3>{item.title1}</h3>
          <h4>{item.title2}</h4>
          <div className="caset-details">
            <h5>{item.price}</h5>
            <h6>{item.tag}</h6>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CassetsTop;
