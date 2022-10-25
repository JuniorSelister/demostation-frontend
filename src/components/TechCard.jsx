import React from "react";
import './style.css';
import data from "./data";

export default () => {
  return (
    <div className="card-layout">
      {data.map((datas) => (
        <div key={datas.id} className="card">
          <img src={datas.img} alt="Icons" className="card-image"/>
          <h2 className="card-title">{datas.title}</h2>
          <p className="card-info">{datas.text}</p>
        </div>
      ))}
    </div>
  );
}