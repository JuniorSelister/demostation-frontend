import React from "react";
import '../../views/style.css';
import demo from '../../assets/demostation-03.png';

export default () => {
    return (
        <header className="">
            <img className="demo_logo" src={demo} alt="demo logo" />
            <nav className="collapse navbar-collapse">
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
        </header>
    );
}
