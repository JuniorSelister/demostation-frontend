import React from "react";
import './style.css';

export default () => {
    return (
        <footer className="footer">
            <div className="footer-social">
                <div className="footer-social-up">
                    <ul>
                        <li className="social-icon-items">LinkedIn</li>
                        <li className="social-icon-items">Instagram</li>
                        <li className="social-icon-items">Twitter</li>
                    </ul>
                </div>
                <div className="footer-social-down">
                    <ul>
                        <li className="social-icon-items">GitHub</li>
                        <li className="social-icon-items">Dribble</li>
                    </ul>
                </div>
            </div>

            <div className="footer-separator"></div>

            <div className="demomap">
                <h3 className="footer-title">DemoMap</h3>
                <ul>
                    <li className="footer-map-items">Home</li>
                    <li className="footer-map-items">Technology</li>
                    <li className="footer-map-items">Design</li>
                    <li className="footer-map-items">Playground</li>
                    <li className="footer-map-items">Contact</li>
                </ul>
            </div>
            
            <div className="footer-bottom">
                <p>DemoStation® has all rights reserved</p>
            </div>
        </footer>
    );
}