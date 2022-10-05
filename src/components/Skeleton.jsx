import React from "react";
import './skeleton.css';

export default () => {
    return (
        <div className="card skeleton-loading">
            <div className="skt-image"></div>
            <h2 className="skt-title"></h2>
            <p className="skt-line"></p>
        </div>
    );
}