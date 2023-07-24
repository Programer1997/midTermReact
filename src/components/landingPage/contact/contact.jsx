import React,{useState} from "react";
import './contact.scss';



const Contact = ()=> { 

    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [message,setMessage]= useState('');
    const [celphone,setCelphone]= useState('');

    const handleNameChange =(event)=>{ 
        setName(event.target.value);
    };
    const handleEmailChange =(event)=>{
        setEmail(event.target.value);
    };
    const handleMessageChange = (event)=>{
        setMessage(event.target.value);
     };
     const handleCelphoneChange = (event)=>{
        setCelphone(event.target.value);
     };
     
     const handleSubmit = ()=> {
        console.log("name:",name);
        console.log("email:",email);
        console.log("Message:",message);
        console.log("Celphone:",celphone);

        setName('');
        setEmail('');
        setMessage('');
        setCelphone('');

     }

    return (
        <div id="contact">
            <h2>What can us do for you ?</h2>
            <p>We are ready to work on a project of any complexity,wheter it's commercial or residencial</p>
            <form action="">
                <div id="nameEmail">
                    <input type="text" className="form-control" value={name} onChange={handleNameChange} placeholder="Your Name..."/>
                    <input id="email" type="text" className="form-control" value={email} onChange={handleEmailChange} placeholder="Name@example.com..."/>
                </div>
                <div id="selectCel">
                    <select name="" id="" className="form-select" placeholder="You need :">
                        <option value="">You Need : </option>
                        <option value="">Carpenter's</option>
                        <option value="">Labour's</option>
                        <option value="">Finisher's</option>
                        <option value="">More Information</option>
                        <option value="">Meeting Us</option>
                    </select>
                    <input type="text" className="form-control" value={celphone} onChange={handleCelphoneChange} placeholder="Your Celphone..."/>
                </div>
                <textarea name="" id="" cols="20" rows="10" value={message} className="form-control" onChange={handleMessageChange} placeholder="Write us what do you are looking for ..."></textarea>
                <button className="btn btn-primary" onClick={handleSubmit} >Submit</button>
            </form>


        </div>
    );
        
    

};

export default Contact;

