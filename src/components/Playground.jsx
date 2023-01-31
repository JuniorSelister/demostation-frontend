import React from "react";
import { playground } from './data'
import PlaygroundCard from "./PlaygroundCard";

const Playground = () => {
  return (
    <div className="playground">
      <h2 className="playground-title">{playground[0].title}</h2>

      <div className="playground-card">
        <PlaygroundCard />
      </div>

      <h3 className="playground-bottom">{playground[0].bottom}</h3>
    </div>
  );
}

export default Playground;