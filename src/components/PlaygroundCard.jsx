import React from "react";
import './style.css';
import { cardPlayground } from './data'

const PlaygroundCard = () => {
  return (
    <div className="card-layout">
      {cardPlayground.map((datas) => (
        <div key={datas.id} className="card">
          <img src={datas.img} alt="" className="card-image" />
          <h3 className="card-title">{datas.title}</h3>
          <p className="card-info">{datas.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PlaygroundCard;