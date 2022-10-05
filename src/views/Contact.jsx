import React from "react";
import './style.css';
import Button from '../components/Button';

export default () => {
    return (
        <div className="contact-presentation">
            <div className="contact-text">
                <h1>Let us know</h1>
                <h3>If you arrived until here, it's quite possible that something interested you. Send your project idea and we will tell the possibilities.</h3>
                <div className="contact-form">
                    <input className="email-field" type="text" />
                    <Button info="Send" />
                </div>
            </div>
        </div>
    );
}