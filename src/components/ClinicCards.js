import React from "react";
import styling from "./cliniccards.module.css";

const ClinicCards = (props) => {
    return (
      
       <div className={styling.box}>
           <img src={props.src} alt={props.alt} /> 
           <h2>{props.h2}</h2>
           <h4>{props.h4}</h4>
           <p>{props.p}</p>
       </div>
  
    );
    }
 
 
export default ClinicCards;