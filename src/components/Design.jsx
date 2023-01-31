import React from "react";
import DesignCard from "./DesignCard";
import Button from './Button';
import { design } from './data'

import './style.css';

export default () => {
    return (
        <div className="design">
            <h2 className="design-title">{design[0].title}</h2>
            <h3 className="design-header">{design[0].header}</h3>

            <div className="design-card">
                <DesignCard />
            </div>

            <h3 className="design-bottom">{design[0].bottom}</h3>
            <h3 className="design-extra">{design[0].extra}</h3>

            <Button info="Behance" />
        </div>
    );
}