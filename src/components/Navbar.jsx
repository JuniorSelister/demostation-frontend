import React from "react";
import './style.css';
import demo from '../assets/demostation-03.png';

export default () => {
  return (
    <nav className="menu-icon">
      <input type="checkbox" className="menu-icon__checkbox" />
      <img className="demo_logo" src={demo} alt="demo logo" />
      <div className="hamb-icon">
        <span className="hamb-span"></span>
        <span className="hamb-span"></span>
      </div>
        <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link active" href="/home">Home</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/technology">Technology</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="ui">UI/UX</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="contact">Contact</a>
          </li>
        </ul>
    </nav>
  );
}
