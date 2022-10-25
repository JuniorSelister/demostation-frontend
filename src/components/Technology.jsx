import React from "react";
import './style.css';
import TechCard from './TechCard'

export default () => {
    return (
        <div className="cards-presentation">
            <h2>Technology</h2>
            <div className="display-cards">
                <TechCard />
            </div>
        </div>
    );
}