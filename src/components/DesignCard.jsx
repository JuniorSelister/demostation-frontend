import React from "react";
import './style.css';
import { cardDesign } from './data';

const DesignCard = () => {
  return (
    <div className="card-layout">
      {cardDesign.map((datas) => (
        <div key={datas.id} className="card">
          <img src={datas.img} alt="Icons" className="card-image"/>
          <p className="card-info">{datas.text}</p>
        </div>
      ))}
    </div>
  );
}

export default DesignCard;