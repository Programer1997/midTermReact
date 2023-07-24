import React from "react";
import "./styles.scss";
import Header from "./components/landingPage/header/header.jsx";
import Home from "./components/landingPage/homePage/Home";
import OurWork from "./components/landingPage/ourWork/ourWork";
import Reputation from  "./components/landingPage/ourReputation/reputation.jsx";
import Services from "./components/landingPage/services/services";
import Contact from "./components/landingPage/contact/contact.jsx";

import serviceImg from './images/earbuds.png';
import teamImg from './images/team (1).png';
import designImg from './images/design.png';

import workImgOne from './images/carpenter1.png';
import workImgTwo from './images/carpenter2.jpeg';

import labourImgOne from './images/labour1.jpeg';
import labourImgTwo from './images/labour2.jpeg';




function App() {
    return (
        <div className="container">
            <Header/>
            <Home/>
            <div className="reputationSite" id="reputationSite">
                <h1>Our Reputation</h1>
                <div className="cardsRep">
                    <Reputation title="Best Service" text="Our service in forming constuction are those ..." image={serviceImg}/>
                    <Reputation title="Best Team" text="Our service in forming constuction are those ..." image={teamImg}/>
                    <Reputation title="Best Service" text="Our service in forming constuction are those ..." image={designImg}/>
                </div>
            </div>
            <div className="ourWorkSite" id="ourWorkSite">
                <h1>How's Our Work</h1>
                <OurWork />
            </div>
            
            <Services/>
            <Contact />
            
        </div>
        
        );
    
  };
  
  export default App;