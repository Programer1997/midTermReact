import React from "react";
import "./home.scss";
import picOne from "./home5.jpg";

const Home = ()=> {
    return (
        
        <div className="homePage" id="homePage">
            <img src={picOne} alt="something is wroongs" />
            <div className="textHome">
                <h1>Building things is our mision.</h1>
            </div>
            <div className="register">
                <button className="btn btn-danger">Register</button>
            </div>
        </div>
        
    );

};

export default Home;