import React from "react";
import './style.css';
import Skeleton from '../components/Skeleton';

export default () => {
    return (
        <div className="cards-presentation">
            <h2>Technology</h2>
            <div className="display-cards">
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
        </div>
    );
}