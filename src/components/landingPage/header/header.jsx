import React from "react";
import "./header.scss";
import logoImage from "./construction.png";


const Header = ()=> {

    return (
        <div id="header">
            <div className="logo">
                <img src={logoImage} alt="something is wrong" />
                <h1>Veled </h1>
            </div>
            <h4>Forming Construction</h4>
            <div className="nav">
                <ul className="nav nav-tabs">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#homePage">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#service">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="#ourWorkSite">Our Work</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>  

        </div>
    );

};

export default Header;