import React from "react";
import UICard from "./UICard";

import './style.css';

export default () => {
    return (
        <div className="cards-presentation">
            <h2>UI/UX</h2>
            <div className="display-cards">
                <UICard />
            </div>
        </div>
    );
}