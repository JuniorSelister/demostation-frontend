import React from "react";
import './style.css';
import TechCard from './TechCard';
import Button from './Button';
import { technology } from "./data";

export default () => {
    return (
        <div className="technology">
            <h2 className="technology-title">{technology[0].title}</h2>
            <h3 className="technology-header">{technology[0].header}</h3>

            <div className="technology-card">
                <TechCard />
            </div>

            <h3 className="technology-bottom">{technology[0].bottom}</h3>
            <h4 className="technology-extra">{technology[0].extra}</h4>
            <Button info="Message us" />
        </div>
    );
}