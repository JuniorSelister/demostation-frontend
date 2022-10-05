import React from "react";
import './style.css';


export default () => {
    return (
        <div className="home-presentation">
            <div className="text-presentation">
                <h1>Rethink the way you see your web page</h1>
                <div className="is-img-active"> <span className="img-active" /> </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus, ipsum nec pellentesque efficitur, quam est porta sem, at volutpat.</p>
                {/* <p>Bring your idea and get your project for real</p> */}
            </div>
            <div className="img-here" /> 
            <h2 className="text-pres-active">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus, ipsum nec pellentesque efficitur, quam est porta sem, at volutpat.</h2>
        </div>
    );
}