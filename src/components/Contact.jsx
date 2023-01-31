import React from "react";
import './style.css';
import { contact } from './data';
import Button from './Button';

export default () => {
    return (
        <div className="contact">
            <h2 className="contact-title">{contact[0].title}</h2>
            <h3 className="contact-header">{contact[0].header}</h3>
            <h4 className="contact-extra">{contact[0].extra}</h4>

            {/* form */}

            <Button info="Send message!" />
        </div>
    );
}