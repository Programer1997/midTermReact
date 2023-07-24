import React from "react";
import "./services.scss";
import imageService from "./services3.jpg";

const Services = ()=>{
    return (
        
        <div className="services" id="service">
            <img src={imageService} alt="something is wrong" />
            <div className="serviceText">
                <h1>What we offer to you  ? </h1>
                <p>we offer you our the best hard workers, ready for work in your company.</p>
                <h2>Our services are : </h2>
                <h4>provide the best hard workers in the next positions : </h4>
                <ul>
                    <li>Carpenter's</li>
                    <li>Labour's</li>
                    <li>Finisher's</li>
                </ul>
                

            </div>
            <div className="consultingDiv">
            <button >Consult our Service</button>
            <p>cel : +1 365 476 80 48</p>
            </div>
            

        </div>
    );

};

export default Services;