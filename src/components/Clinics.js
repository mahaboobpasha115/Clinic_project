import React from "react";
import styling from "./clinics.module.css";

const Clinics = (props) => {
    return (
      
       <div className={styling.wrapper}>
           <h2>{props.h2}</h2>
           <img src={props.src} alt={props.alt} /> 
          
       </div>
  
    );
    }
 
 
export default Clinics;