import React,{useState,useEffect} from "react";
import "./ourWork.scss";

import carpImg1 from './carpenter1.png';
import carpImg2 from './carpenter2.jpeg';
import labourImg1 from './labour1.jpeg';
import labourImg2 from './labour2.jpeg';
import finishOne from './finishing1.jpg';
import finishTwo from './finishing2.jpg';

const OurWork = ()=>{
    //console.log(props);

    const dummyData = [
        {title : "Carpentery",image1:carpImg1, image2:carpImg2},
        {title : "General Labour's",image1:labourImg1, image2:labourImg2},
        {title : "Concrete",image1:finishOne, image2:finishTwo}
    ];

    //Using UseState : 
    const [arrayPosition,setArrayPosition] =useState(dummyData); 
    console.log(arrayPosition);

    /*useEffect (()=>{
        setTimeout(()=>{
            setArrayPosition(dummyData);
        },500);
    },[]);*/
    
    return (
        <div id="ourWork">

            {
            arrayPosition.map((element,index)=>{
                
                return <Card key={index} title = {element.title} imageOne = {element.image1} imageTwo = {element.image2}/>
            })}

        </div>
    );

};

const Card = ({title,imageOne,imageTwo})=> {

    return (
        <div id="cardIndividual">
            
            <h1>{title}</h1>
            <img id="imgOne" src={imageOne} alt="something is wrong" />
            <img id="imgTwo" src={imageTwo} alt="something is wrong" />

        </div>
    );


};

export default OurWork;
