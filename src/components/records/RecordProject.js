import React from 'react';
import "../../assets/styles/records/recordproject.css";
import img1 from "../../assets/images/record1.png";
import img2 from "../../assets/images/record2.png";
import img3 from "../../assets/images/record3.webp";
import img4 from "../../assets/images/record4.jpg";
import img5 from "../../assets/images/record5.jpeg";
import img6 from "../../assets/images/record6.jpeg";
import img7 from "../../assets/images/record7.avif";
import img8 from "../../assets/images/record8.jpg";
import img9 from "../../assets/images/record9.jpeg";
import img10 from "../../assets/images/record10.jpeg";
import img11 from "../../assets/images/record11.jpeg";
import img12 from "../../assets/images/record12.png";
import img13 from "../../assets/images/record13.jpeg";
import img14 from "../../assets/images/record14.jpeg";
import img15 from "../../assets/images/record15.jpeg";
import img16 from "../../assets/images/record16.jpeg";
import img17 from "../../assets/images/record17.jpg";
import img18 from "../../assets/images/record18.jpeg";
import img19 from "../../assets/images/record19.jpeg";
import img20 from "../../assets/images/record20.jpg";

const imagesData = [
    { img: img1, title1: "Anglesea 10 inch EP", title2: "King Gizzard & the Lizard Wizard", price: "$25.00", tag: "PRE-ORDER" },
    { img: img2, title1: "Gizz Jams-Volume One:Red Rock...", title2: "King Gizzard and the Lizard Wizard", price: "$20.00", tag: "PRE-ORDER" },
    { img: img3, title1: "Encelade build and sell", title2: "Saga Industrie", price: "$29.09", tag: "PRE-ORDER" },
    { img: img4, title1: "Brettrospective", title2: "Brett Domino", price: "$26.00", tag: "IN-STOCK" },
    { img: img5, title1: "Zezeco", title2: "zezeco", price: "$3,800", tag: "PRE-ORDER" },
    { img: img6, title1: "The Root", title2: "Monterey J", price: "$25.00", tag: "IN-STOCK" },
    { img: img7, title1: "Summer Waves with Best Friends", title2: "Jerry Collins", price: "$19.99", tag: "PRE-ORDER" },
    { img: img8, title1: "Regrets Only", title2: "Quiet Takes", price: "$30.00", tag: "PRE-ORDER" },
    { img: img9, title1: "GXNXSIS-Soul Waves", title2: "GXNXSIS", price: "$18.00", tag: "IN-STOCK" },
    { img: img10, title1: "Muteki no Tabiji", title2: "PelleK", price: "$29.99", tag: "PRE-ORDER" },
    { img: img11, title1: "Tokyo Riddim 1976-1985", title2: "V .A.", price: "$25.00", tag: "IN-STOCK" },
    { img: img12, title1: "All In", title2: "John Splithoff", price: "$25.00", tag: "PRE-ORDER" },
    { img: img13, title1: "Rogue Planet EP", title2: "WETURNTORED", price: "$25.00", tag: "IN-STOCK" },
    { img: img14, title1: "Memento Mori", title2: "Max Bartos", price: "$35.00", tag: "PRE-ORDER" },
    { img: img15, title1: "I COULD DIE JUST THINKING OF U...", title2: "GRANT KNOCHE", price: "$30.00", tag: "IN-STOCK" },
    { img: img16, title1: "Meditation Drive-thru", title2: "Rob Giles", price: "$25.00", tag: "PRE-ORDER" },
    { img: img17, title1: "Bulgarian Beat Wave vol. 2", title2: "V .A.", price: "$32.00", tag: "PRE-ORDER" },
    { img: img18, title1: "Make a Stand / Transformation", title2: "MARTER", price: "$2,000", tag: "PRE-ORDER" },
    { img: img19, title1: "\ Philanthrop /", title2: "Ephemeral Sky", price: "$24.99", tag: "PRE-ORDER" },
    { img: img20, title1: "City on the Typeof Forever", title2: "Greydon Square", price: "$65.00", tag: "IN-STOCK" },
  ];
  

const RecordProject = () => {
  return (
    <div className="record-container">
      {imagesData.map((item, index) => (
        <div className="record-box" key={index}>
          <img src={item.img} alt={`img-${index}`} />
          <h3>{item.title1}</h3>
          <h4>{item.title2}</h4>
          <div className="record-details">
            <h5>{item.price}</h5>
            <h6>{item.tag}</h6>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecordProject;
