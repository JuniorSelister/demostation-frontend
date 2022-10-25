import React from "react";
import './style.css';
import data from "./data";

export default () => {
  return (
    <div className="card">
      {data.map((datas) => (
        <div key={datas.id}>
          <div className="card-image">
            <img src={datas.img} alt="Icons" />
          </div>
          <h2 className="card-title">{datas.title}</h2>
          <p className="card-info">{datas.text}</p>
        </div>
      ))}
    </div>
  );
}