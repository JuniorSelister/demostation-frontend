import React from "react";
import { Routes, Route } from "react-router-dom";
import "./navbar.css";

import Home from '../../views/Home';
import Technology from '../../views/Technology';
import UI from '../../views/UI';
import Contact from '../../views/Contact';
import NotFound from '../../views/NotFound';

export default (props) => {
    return (
        <div className="menu-navbar">
            <Routes>
                <Route path="/home" element={ <Home /> }/>
                <Route path="/technology" element={ <Technology /> }/>
                <Route path="/ui" element={ <UI /> }/>
                <Route path="/contact" element={ <Contact /> }/>
                <Route path="*" element={ <NotFound /> }/>
            </Routes>
        </div>
    );
}