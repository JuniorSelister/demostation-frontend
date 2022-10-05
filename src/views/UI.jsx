import React from "react";
import Skeleton from "../components/Skeleton";
import './style.css';

export default () => {
    return (
        <div className="cards-presentation">
            <h2>UI/UX</h2>
            <div className="display-cards">
                <Skeleton />           
                <Skeleton />           
                <Skeleton />           
            </div>
        </div>
    );
}