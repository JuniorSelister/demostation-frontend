import React from "react";
import './style.css';
import { home } from "./data";
import Button from "./Button";

export default () => {
    return (
        <div className="home">
            <h1 className="home-title">{home[0].title}</h1>
            <h2 className="home-description">{home[0].description}</h2>
            <Button info="Playground" />
        </div>
    );
}