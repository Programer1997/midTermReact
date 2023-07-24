import React from "react";
import "./reputation.scss"; 




const Reputation = (props)=>{
    return (
        
        <div className="cards">
            <img src={props.image} alt="Something is worng" />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>


    );

};

export default Reputation;