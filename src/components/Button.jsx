import React from "react";
import './button.css';

export default (props) => {
    return (
        <div className="btn-cont">
            <span className="btn-bkg">
                <p> {props.info} </p>
            </span>
        </div>
    );
}