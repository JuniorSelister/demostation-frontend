import React from "react";
import './style.css';
import { contact } from './data';
import Button from './Button';
import Form from "./Form";

export default () => {
    return (
        <div className="contact">
            <h2 className="contact-title">{contact[0].title}</h2>
            <h3 className="contact-header">{contact[0].header}</h3>
            <h4 className="contact-extra">{contact[0].extra}</h4>

            <Form />

            <Button info="Send message!" />
        </div>
    );
}